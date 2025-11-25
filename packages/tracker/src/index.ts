(function () {
  const scr = document.currentScript;

  const attrCmpId = scr?.dataset.cmpid;
  const attrUrl = scr?.dataset.beaconUrl;
  const attrTrackThreshold = parseInt(scr?.dataset.trackThreshold ?? '', 10);

  const config: WebXAnalyticsConfig = {
    cmpid: attrCmpId || '',
    beaconURL: attrUrl || '',
    attrTrackThreshold: Number.isInteger(attrTrackThreshold)
      ? attrTrackThreshold > 1
        ? attrTrackThreshold
        : 255
      : 255,
  };

  const buffer = new Map<
    string,
    Array<WebxAnalyticsBeaconData['entries'][number]>
  >();

  function setConfig(newConfig: Partial<WebXAnalyticsConfig>) {
    Object.assign(config, newConfig);
  }

  function hasData(): boolean {
    for (const entries of buffer.values()) {
      if (entries.length > 0) return true;
    }
    return false;
  }

  function sendBeaconFallback(blob: Blob) {
    fetch(config.beaconURL, {
      method: 'POST',
      body: blob,
      keepalive: true,
      headers: { 'Content-Type': 'application/json' },
    })
      .catch((err) => console.error('WebX lost data', err))
      .finally(() => clear());
  }

  function sendBeacon() {
    if (!config.cmpid) return console.error('WebX: no campaign ID');
    if (!config.beaconURL) return console.error('WebX: no beacon URL');
    if (hasData() !== true) return;

    const data = compose();
    const payload = JSON.stringify(data);
    const blob = new Blob([payload], { type: 'application/json' });
    let isOk = false;

    try {
      isOk = navigator.sendBeacon(config.beaconURL, blob);
    } catch (e) {
      isOk = false;
    }

    if (!isOk) {
      sendBeaconFallback(blob);
    } else {
      clear();
    }
  }

  function grant(categories: string[]) {
    categories.forEach((c) => {
      buffer.has(c) || buffer.set(c, []);
    });
  }

  function revoke(categories: string[]) {
    categories.forEach((c) => buffer.delete(c));
  }

  function track(
    category: string,
    event: string,
    data?: WebXAnalyticsTrackData,
  ) {
    const trk = buffer.get(category);
    if (trk == null) return;
    trk.push({ event, data, ts: Date.now() });
    if (trk.length >= config.attrTrackThreshold) {
      sendBeacon();
    }
  }

  function compose(): WebxAnalyticsBeacon {
    const composed: WebxAnalyticsBeaconData[] = [];
    buffer.forEach((entries, category) => {
      if (entries.length) composed.push({ category, entries });
    });
    return { cmpid: config.cmpid, data: composed };
  }

  function clear() {
    buffer.forEach((_, category) => {
      buffer.set(category, []);
    });
  }

  const m = 'addEventListener';

  document[m]('webx:consent:grant', (e: Event) => {
    if ('detail' in e)
      grant((e as WebXAnalyticsConsentEvent).detail.categories);
  });

  document[m]('webx:consent:revoke', (e: Event) => {
    if ('detail' in e)
      revoke((e as WebXAnalyticsConsentEvent).detail.categories);
  });

  document[m]('webx:track', (e: Event) => {
    if ('detail' in e) {
      const { category, event, data } = (e as WebXAnalyticsTrackEvent).detail;
      track(category, event, data);
    }
  });

  document[m]('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      sendBeacon();
    }
  });

  window[m]('pagehide', sendBeacon);

  window.__webx = { setConfig, track, grant, revoke };
})();

declare global {
  interface WindowOrWorkerGlobalScope {
    __webx: WebXAnalytics;
  }
}

declare interface WebXAnalytics {
  setConfig: WebXAnalyticsSetConfigFn;
  track: WebXAnalyticsTrackFn;
  grant: WebXAnalyticsManageFn;
  revoke: WebXAnalyticsManageFn;
}

declare interface WebXAnalyticsConfig {
  /** Campaign ID */
  cmpid: string;
  /** URL to send data to */
  beaconURL: string;
  /** When number of events on ANY tracked category is reached, send immediately */
  attrTrackThreshold: number;
}

declare interface WebXAnalyticsSetConfigFn {
  (config: WebXAnalyticsConfig): void;
}

declare interface WebXAnalyticsTrackFn {
  (category: string, event: string, data: WebXAnalyticsTrackData): void;
}

declare interface WebXAnalyticsManageFn {
  (categories: string[]): void;
}

declare type WebXAnalyticsCommand =
  | 'webx:consent:grant'
  | 'webx:consent:revoke'
  | 'webx:track';

declare interface WebXAnalyticsConsentEvent
  extends CustomEvent<{
    categories: string[];
  }> {}

declare type WebXAnalyticsTrackData =
  | string
  | number
  | { [key: string]: WebXAnalyticsTrackData }
  | Array<WebXAnalyticsTrackData>;

declare interface WebXAnalyticsTrackEvent
  extends CustomEvent<{
    category: string;
    event: string;
    data?: WebXAnalyticsTrackData;
  }> {}

declare type WebxAnalyticsBeaconData = {
  category: string;
  entries: {
    event: string;
    ts: number;
    data?: WebXAnalyticsTrackData;
  }[];
};

declare type WebxAnalyticsBeacon = {
  cmpid: string;
  data: WebxAnalyticsBeaconData[];
};

export type {
  WebXAnalyticsCommand,
  WebXAnalyticsConsentEvent,
  WebXAnalyticsTrackData,
  WebXAnalyticsTrackEvent,
  WebxAnalyticsBeacon,
  WebxAnalyticsBeaconData,
  WebXAnalyticsTrackFn,
  WebXAnalyticsManageFn,
};
