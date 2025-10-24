import re from "react";
import te, { css as p } from "styled-components";
var R = { exports: {} }, b = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $;
function ne() {
  if ($) return b;
  $ = 1;
  var s = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function i(u, o, l) {
    var d = null;
    if (l !== void 0 && (d = "" + l), o.key !== void 0 && (d = "" + o.key), "key" in o) {
      l = {};
      for (var m in o)
        m !== "key" && (l[m] = o[m]);
    } else l = o;
    return o = l.ref, {
      $$typeof: s,
      type: u,
      key: d,
      ref: o !== void 0 ? o : null,
      props: l
    };
  }
  return b.Fragment = c, b.jsx = i, b.jsxs = i, b;
}
var _ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var z;
function ae() {
  return z || (z = 1, process.env.NODE_ENV !== "production" && (function() {
    function s(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case T:
          return "Fragment";
        case q:
          return "Profiler";
        case W:
          return "StrictMode";
        case B:
          return "Suspense";
        case X:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case M:
            return "Portal";
          case V:
            return e.displayName || "Context";
          case J:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return r = e.displayName || null, r !== null ? r : s(e.type) || "Memo";
          case x:
            r = e._payload, e = e._init;
            try {
              return s(e(r));
            } catch {
            }
        }
      return null;
    }
    function c(e) {
      return "" + e;
    }
    function i(e) {
      try {
        c(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), c(e);
      }
    }
    function u(e) {
      if (e === T) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === x)
        return "<...>";
      try {
        var r = s(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = g.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (P.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, r) {
      function t() {
        j || (j = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function U() {
      var e = s(this.type);
      return N[e] || (N[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function L(e, r, t, n, v, k) {
      var a = t.ref;
      return e = {
        $$typeof: A,
        type: e,
        key: r,
        props: t,
        _owner: n
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: U
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
        value: v
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: k
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function O(e, r, t, n, v, k) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (K(a)) {
            for (n = 0; n < a.length; n++)
              S(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else S(a);
      if (P.call(r, "key")) {
        a = s(e);
        var f = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        n = 0 < f.length ? "{key: someKey, " + f.join(": ..., ") + ": ...}" : "{key: someKey}", I[a + n] || (f = 0 < f.length ? "{" + f.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          f,
          a
        ), I[a + n] = !0);
      }
      if (a = null, t !== void 0 && (i(t), a = "" + t), d(r) && (i(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var w in r)
          w !== "key" && (t[w] = r[w]);
      } else t = r;
      return a && m(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), L(
        e,
        a,
        t,
        o(),
        v,
        k
      );
    }
    function S(e) {
      y(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === x && (e._payload.status === "fulfilled" ? y(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function y(e) {
      return typeof e == "object" && e !== null && e.$$typeof === A;
    }
    var E = re, A = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), J = Symbol.for("react.consumer"), V = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), g = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = Object.prototype.hasOwnProperty, K = Array.isArray, h = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var j, N = {}, C = E.react_stack_bottom_frame.bind(
      E,
      l
    )(), Y = h(u(l)), I = {};
    _.Fragment = T, _.jsx = function(e, r, t) {
      var n = 1e4 > g.recentlyCreatedOwnerStacks++;
      return O(
        e,
        r,
        t,
        !1,
        n ? Error("react-stack-top-frame") : C,
        n ? h(u(e)) : Y
      );
    }, _.jsxs = function(e, r, t) {
      var n = 1e4 > g.recentlyCreatedOwnerStacks++;
      return O(
        e,
        r,
        t,
        !0,
        n ? Error("react-stack-top-frame") : C,
        n ? h(u(e)) : Y
      );
    };
  })()), _;
}
var F;
function oe() {
  return F || (F = 1, process.env.NODE_ENV === "production" ? R.exports = ne() : R.exports = ae()), R.exports;
}
var D = oe();
const se = {
  xs: p`
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    line-height: 1rem;
  `,
  sm: p`
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  `,
  base: p`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    line-height: 1.5rem;
  `,
  lg: p`
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
  `,
  xl: p`
    padding: 1rem 2rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
  `
}, le = te.button`
  background: #646cff;
  color: white;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  font-weight: 500;
  font-family: inherit;
  transition: all 0.2s ease;

  /* Size variant */
  ${(s) => se[s.$size]}

  /* Interactive states */
  &:hover {
    background: #535bf2;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: 2px solid #646cff;
    outline-offset: 2px;
  }

  &:disabled {
    background: #a0a0a0;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;
function ce(s) {
  const {
    children: c,
    size: i = "base",
    as: u,
    ...o
  } = s;
  return /* @__PURE__ */ D.jsx(le, { as: u, $size: i, ...o, children: c });
}
function fe() {
  return /* @__PURE__ */ D.jsx("input", { placeholder: "input text" });
}
export {
  ce as UIButton,
  fe as UIInput
};
