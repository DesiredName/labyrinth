import * as C from "react";
import B, { createContext as ce, useState as fe, useEffect as D, useContext as de } from "react";
import { twMerge as me } from "tailwind-merge";
var S = { exports: {} }, y = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W;
function be() {
  if (W) return y;
  W = 1;
  var r = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function t(o, s, l) {
    var f = null;
    if (l !== void 0 && (f = "" + l), s.key !== void 0 && (f = "" + s.key), "key" in s) {
      l = {};
      for (var m in s)
        m !== "key" && (l[m] = s[m]);
    } else l = s;
    return s = l.ref, {
      $$typeof: r,
      type: o,
      key: f,
      ref: s !== void 0 ? s : null,
      props: l
    };
  }
  return y.Fragment = a, y.jsx = t, y.jsxs = t, y;
}
var R = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var L;
function ve() {
  return L || (L = 1, process.env.NODE_ENV !== "production" && (function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === le ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case _:
          return "Fragment";
        case Q:
          return "Profiler";
        case K:
          return "StrictMode";
        case ne:
          return "Suspense";
        case oe:
          return "SuspenseList";
        case se:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case g:
            return "Portal";
          case re:
            return e.displayName || "Context";
          case ee:
            return (e._context.displayName || "Context") + ".Consumer";
          case te:
            var n = e.render;
            return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ae:
            return n = e.displayName || null, n !== null ? n : r(e.type) || "Memo";
          case j:
            n = e._payload, e = e._init;
            try {
              return r(e(n));
            } catch {
            }
        }
      return null;
    }
    function a(e) {
      return "" + e;
    }
    function t(e) {
      try {
        a(e);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var i = n.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
        ), a(e);
      }
    }
    function o(e) {
      if (e === _) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === j)
        return "<...>";
      try {
        var n = r(e);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = O.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function f(e) {
      if (Y.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, n) {
      function i() {
        U || (U = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      i.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: i,
        configurable: !0
      });
    }
    function w() {
      var e = r(this.type);
      return $[e] || ($[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function d(e, n, i, u, k, P) {
      var c = i.ref;
      return e = {
        $$typeof: T,
        type: e,
        key: n,
        props: i,
        _owner: u
      }, (c !== void 0 ? c : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: w
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: k
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: P
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function b(e, n, i, u, k, P) {
      var c = n.children;
      if (c !== void 0)
        if (u)
          if (ie(c)) {
            for (u = 0; u < c.length; u++)
              x(c[u]);
            Object.freeze && Object.freeze(c);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(c);
      if (Y.call(n, "key")) {
        c = r(e);
        var h = Object.keys(n).filter(function(ue) {
          return ue !== "key";
        });
        u = 0 < h.length ? "{key: someKey, " + h.join(": ..., ") + ": ...}" : "{key: someKey}", M[c + u] || (h = 0 < h.length ? "{" + h.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          c,
          h,
          c
        ), M[c + u] = !0);
      }
      if (c = null, i !== void 0 && (t(i), c = "" + i), f(n) && (t(n.key), c = "" + n.key), "key" in n) {
        i = {};
        for (var N in n)
          N !== "key" && (i[N] = n[N]);
      } else i = n;
      return c && m(
        i,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), d(
        e,
        c,
        i,
        s(),
        k,
        P
      );
    }
    function x(e) {
      v(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === j && (e._payload.status === "fulfilled" ? v(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function v(e) {
      return typeof e == "object" && e !== null && e.$$typeof === T;
    }
    var E = B, T = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), K = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), ee = Symbol.for("react.consumer"), re = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), oe = Symbol.for("react.suspense_list"), ae = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), se = Symbol.for("react.activity"), le = Symbol.for("react.client.reference"), O = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = Object.prototype.hasOwnProperty, ie = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var U, $ = {}, z = E.react_stack_bottom_frame.bind(
      E,
      l
    )(), F = A(o(l)), M = {};
    R.Fragment = _, R.jsx = function(e, n, i) {
      var u = 1e4 > O.recentlyCreatedOwnerStacks++;
      return b(
        e,
        n,
        i,
        !1,
        u ? Error("react-stack-top-frame") : z,
        u ? A(o(e)) : F
      );
    }, R.jsxs = function(e, n, i) {
      var u = 1e4 > O.recentlyCreatedOwnerStacks++;
      return b(
        e,
        n,
        i,
        !0,
        u ? Error("react-stack-top-frame") : z,
        u ? A(o(e)) : F
      );
    };
  })()), R;
}
var J;
function pe() {
  return J || (J = 1, process.env.NODE_ENV === "production" ? S.exports = be() : S.exports = ve()), S.exports;
}
var p = pe();
const xe = ["light", "dark", "system"], X = ce(
  void 0
), Oe = (r) => {
  const a = r.themeStorageKey ?? "app-theme", [t, o] = fe("system"), s = () => {
    document.body.parentElement.dataset.theme = t;
  }, l = () => {
    o(t === "dark" ? "light" : "dark");
  };
  return D(() => {
    const f = window.localStorage.getItem(
      a
    ), m = xe.includes(f) ? f : "system";
    o(m), s();
  }, []), D(() => {
    window.localStorage.setItem(a, t), s();
  }, [t]), /* @__PURE__ */ p.jsx(
    X.Provider,
    {
      value: { theme: t, setTheme: o, handleSetNextTheme: l },
      children: r.children
    }
  );
}, Ae = () => {
  const r = de(X);
  if (!r)
    throw new Error("useTheme must be used within an ThemeProvider");
  return r;
};
function H(r) {
  var a, t, o = "";
  if (typeof r == "string" || typeof r == "number") o += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var s = r.length;
    for (a = 0; a < s; a++) r[a] && (t = H(r[a])) && (o && (o += " "), o += t);
  } else for (t in r) r[t] && (o && (o += " "), o += t);
  return o;
}
function Z() {
  for (var r, a, t = 0, o = "", s = arguments.length; t < s; t++) (r = arguments[t]) && (a = H(r)) && (o && (o += " "), o += a);
  return o;
}
const q = (r) => typeof r == "boolean" ? `${r}` : r === 0 ? "0" : r, G = Z, I = (r, a) => (t) => {
  var o;
  if (a?.variants == null) return G(r, t?.class, t?.className);
  const { variants: s, defaultVariants: l } = a, f = Object.keys(s).map((d) => {
    const b = t?.[d], x = l?.[d];
    if (b === null) return null;
    const v = q(b) || q(x);
    return s[d][v];
  }), m = t && Object.entries(t).reduce((d, b) => {
    let [x, v] = b;
    return v === void 0 || (d[x] = v), d;
  }, {}), w = a == null || (o = a.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((d, b) => {
    let { class: x, className: v, ...E } = b;
    return Object.entries(E).every((T) => {
      let [g, _] = T;
      return Array.isArray(_) ? _.includes({
        ...l,
        ...m
      }[g]) : {
        ...l,
        ...m
      }[g] === _;
    }) ? [
      ...d,
      x,
      v
    ] : d;
  }, []);
  return G(r, f, w, t?.class, t?.className);
};
function V(...r) {
  return me(Z(r));
}
const _e = `
  inline-flex items-center justify-center rounded-md cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
`, Ee = I(_e, {
  variants: {
    uiSize: {
      xs: "px-2 py-1 text-xs",
      sm: "px-3 py-1.5 text-sm",
      base: "px-4 py-2 text-base",
      lg: "px-5 py-2.5 text-lg",
      xl: "px-6 py-3 text-xl"
    },
    variant: {
      primary: `
          bg-[var(--color-btn-bg)]
          border border-[var(--color-btn-border)]
          hover:bg-[var(--color-btn-bg-hover)]
          hover:border-[var(--color-btn-border-hover)]
          bg-gray-700 hover:bg-gray-600
          dark:bg-amber-700 dark:hover:bg-amber-600
        `
    }
  },
  defaultVariants: {
    uiSize: "base",
    variant: "primary"
  }
}), he = C.forwardRef(
  ({ uiSize: r, variant: a, className: t, children: o, ...s }, l) => {
    const f = V(Ee({ uiSize: r, variant: a }), t);
    return /* @__PURE__ */ p.jsx("button", { ref: l, className: f, ...s, children: o });
  }
);
he.displayName = "UIButton";
const ye = I("inline-block border border-gray-200 rounded-md", {
  variants: {
    uiSize: {
      xs: "px-1 py-1 text-xs",
      sm: "px-1 py-1.5 text-sm",
      base: "px-2 py-2 text-base",
      lg: "px-3 py-2.5 text-lg",
      xl: "px-3 py-3 text-xl"
    }
  },
  defaultVariants: {
    uiSize: "base"
  }
}), Re = C.forwardRef(
  ({ uiSize: r, className: a, size: t, ...o }, s) => {
    const l = V(ye({ uiSize: r }), a);
    return /* @__PURE__ */ p.jsx("input", { ref: s, size: t ?? 1, className: l, ...o });
  }
);
Re.displayName = "Input";
const Te = I(
  "cursor-pointer select-none border border-transparent hover:border-black rounded-full",
  {
    variants: {
      uiSize: {
        xs: "p-1",
        sm: "p-1.5",
        base: "p-2",
        lg: "p-2.5",
        xl: "p-3"
      }
    },
    defaultVariants: {
      uiSize: "base"
    }
  }
), ge = C.forwardRef(
  ({ uiSize: r, className: a, children: t, ...o }, s) => {
    const l = V(Te({ uiSize: r }), a);
    return /* @__PURE__ */ p.jsx("div", { ref: s, className: l, ...o, children: t });
  }
);
ge.displayName = "Icon";
const ke = (r) => /* @__PURE__ */ p.jsxs("li", { children: [
  /* @__PURE__ */ p.jsx("div", { children: r.to() }),
  r.items && r.items.map((a, t) => /* @__PURE__ */ p.jsx(Se, { ...a }, t))
] }), Se = B.forwardRef(
  ({ items: r, ...a }, t) => /* @__PURE__ */ p.jsx("menu", { ref: t, ...a, children: r.map((o) => /* @__PURE__ */ p.jsx(ke, { ...o })) })
), Pe = {
  "--color-btn-bg": "#1f2937",
  "--color-btn-text": "#ffffff",
  "--color-btn-border": "#374151",
  "--color-btn-bg-hover": "#4b5563",
  "--color-btn-border-hover": "#6b7280"
}, Ne = {
  "--color-btn-bg": "#ffffff",
  "--color-btn-text": "#000000",
  "--color-btn-border": "#d1d5db",
  "--color-btn-bg-hover": "#f3f4f6",
  "--color-btn-border-hover": "#cbd5e1"
};
export {
  Oe as ThemeSwitchProvider,
  he as UIButton,
  ge as UIIcon,
  Re as UIInput,
  Se as UIMenu,
  Ne as brightTheme,
  Ee as buttonVariants,
  Pe as darkTheme,
  Te as iconVariants,
  ye as inputVariants,
  Ae as useThemeSwitch
};
