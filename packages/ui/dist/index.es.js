import { jsx as i, jsxs as z } from "react/jsx-runtime";
import { createContext as S, useContext as k, forwardRef as d } from "react";
import { twMerge as T } from "tailwind-merge";
const h = S({}), $ = () => k(h), q = ({ theme: t = {}, children: r }) => /* @__PURE__ */ i(h.Provider, { value: t, children: /* @__PURE__ */ i("div", { style: t, children: r }) });
function V(t) {
  var r, e, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (r = 0; r < o; r++) t[r] && (e = V(t[r])) && (n && (n += " "), n += e);
  } else for (e in t) t[e] && (n && (n += " "), n += e);
  return n;
}
function N() {
  for (var t, r, e = 0, n = "", o = arguments.length; e < o; e++) (t = arguments[e]) && (r = V(t)) && (n && (n += " "), n += r);
  return n;
}
const p = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, g = N, f = (t, r) => (e) => {
  var n;
  if (r?.variants == null) return g(t, e?.class, e?.className);
  const { variants: o, defaultVariants: s } = r, b = Object.keys(o).map((a) => {
    const l = e?.[a], u = s?.[a];
    if (l === null) return null;
    const c = p(l) || p(u);
    return o[a][c];
  }), x = e && Object.entries(e).reduce((a, l) => {
    let [u, c] = l;
    return c === void 0 || (a[u] = c), a;
  }, {}), I = r == null || (n = r.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((a, l) => {
    let { class: u, className: c, ...C } = l;
    return Object.entries(C).every((j) => {
      let [y, v] = j;
      return Array.isArray(v) ? v.includes({
        ...s,
        ...x
      }[y]) : {
        ...s,
        ...x
      }[y] === v;
    }) ? [
      ...a,
      u,
      c
    ] : a;
  }, []);
  return g(t, b, I, e?.class, e?.className);
};
function m(...t) {
  return T(N(t));
}
const U = `
  inline-flex items-center justify-center rounded-md cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
`, w = f(U, {
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
        `
    }
  },
  defaultVariants: {
    uiSize: "base",
    variant: "primary"
  }
}), A = d(
  ({ uiSize: t, variant: r, className: e, children: n, ...o }, s) => {
    const b = m(w({ uiSize: t, variant: r }), e);
    return /* @__PURE__ */ i("button", { ref: s, className: b, ...o, children: n });
  }
);
A.displayName = "UIButton";
const O = f("inline-block border border-gray-200 rounded-md", {
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
}), P = d(
  ({ uiSize: t, className: r, size: e, ...n }, o) => {
    const s = m(O({ uiSize: t }), r);
    return /* @__PURE__ */ i("input", { ref: o, size: e ?? 1, className: s, ...n });
  }
);
P.displayName = "Input";
const B = f(
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
), M = d(
  ({ uiSize: t, className: r, children: e, ...n }, o) => {
    const s = m(B({ uiSize: t }), r);
    return /* @__PURE__ */ i("div", { ref: o, className: s, ...n, children: e });
  }
);
M.displayName = "Icon";
const _ = (t) => /* @__PURE__ */ z("li", { children: [
  /* @__PURE__ */ i("div", { children: t.to() }),
  t.items && t.items.map((r, e) => /* @__PURE__ */ i(E, { ...r }, e))
] }), E = d(
  ({ items: t, ...r }, e) => /* @__PURE__ */ i("menu", { ref: e, ...r, children: t.map((n) => /* @__PURE__ */ i(_, { ...n })) })
), D = {
  "--color-btn-bg": "#1f2937",
  "--color-btn-text": "#ffffff",
  "--color-btn-border": "#374151",
  "--color-btn-bg-hover": "#4b5563",
  "--color-btn-border-hover": "#6b7280"
}, F = {
  "--color-btn-bg": "#ffffff",
  "--color-btn-text": "#000000",
  "--color-btn-border": "#d1d5db",
  "--color-btn-bg-hover": "#f3f4f6",
  "--color-btn-border-hover": "#cbd5e1"
};
export {
  q as ThemeProvider,
  A as UIButton,
  M as UIIcon,
  P as UIInput,
  E as UIMenu,
  F as brightTheme,
  w as buttonVariants,
  D as darkTheme,
  B as iconVariants,
  O as inputVariants,
  $ as useTheme
};
