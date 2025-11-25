# WebX Analytics

A lightweight, privacy-first analytics library.

### Usage

Add the tracking script (preferably in the `<head>` section):

```html
<script
  src="https://cdn.example.com/webx.js"
  type="text/javascript"
  data-cmpid="123-abc"
  data-beacon-url="https://api.example.com"
  data-track-threshold="100"
></script>
```

**Parameters**

- `data-cmpid` (Required): Your tracking campaign ID.
- `data-beacon-url` (Required): The endpoint URL where analytics data will be sent.
- `data-track-threshold` (Optional): A limit for any tracked category. When this number of events is reached, data is sent immediately to the server (flushed). Default is 255.

### Configuration

Configuration parameters are typically passed via `data-` attributes on the script tag.
However, you can also update the configuration at runtime using JavaScript:

```javascript
window.__webx.setConfig({
  cmpid: '1234',
  beaconURL: 'https://another.example.com',
  attrTrackThreshold: 100,
});
```

_Note: Runtime configuration merges with existing settings. Omitted properties remain unchanged._

### Consent Management

> [!CAUTION]
>
> **Privacy-First Architecture : WebX is opt-in by default.**
>
> No data will be recorded until you explicitly grant permission for a specific category. Any track calls made before granting permission will be safely ignored.

You can grant or revoke permissions using Custom Events or the Global Object.

**Option 1: Custom Events**

```javascript
// Grant consent
document.dispatchEvent(
  new CustomEvent('webx:consent:grant', {
    detail: {
      categories: ['analytics', 'marketing'],
    },
  }),
);

// Revoke consent
document.dispatchEvent(
  new CustomEvent('webx:consent:revoke', {
    detail: {
      categories: ['marketing'],
    },
  }),
);
```

**Option 2: Programmatic (Global Object)**

```javascript
// Grant consent
window.__webx.grant(['analytics', 'marketing']);

// Revoke consent
window.__webx.revoke(['analytics']);
```

### Tracking Events

To track events, you must provide a `category` (which must be granted) and an `event` name. Payload `data` is optional, if you need to only track `event`.

**Via Custom Event:**

```javascript
document.dispatchEvent(
  new CustomEvent('webx:track', {
    detail: {
      category: 'marketing',
      event: 'user_signin',
      data: { from: 'welcome_page' },
    },
  }),
);

document.dispatchEvent(
  new CustomEvent('webx:track', {
    detail: {
      category: 'analytics',
      event: 'button_click:like',
    },
  }),
);
```

**Via Global Object:**

```javascript
window.__webx.track('analytics', 'page_view', { url: location.href });
window.__webx.track('analytics', 'button_click:like');
```

### Data Submission Lifecycle

Data is buffered in the browser and sent to `data-beacon-url` when:

1. The number of events in a category reaches `data-track-threshold`.
2. The user hides the page (switches tabs, minimizes browser).
3. The user leaves the page (navigates away, closes tab).

The library uses `navigator.sendBeacon` for reliability, falling back to `fetch` (keepalive) if necessary.
