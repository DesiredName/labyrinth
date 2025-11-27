import { jsx as u } from "react/jsx-runtime";
import { createContext as z, useContext as S, forwardRef as v } from "react";
import { twMerge as j } from "tailwind-merge";
const h = z({}), W = () => S(h), $ = ({ theme: t = {}, children: e }) => /* @__PURE__ */ u(h.Provider, { value: t, children: /* @__PURE__ */ u("div", { style: t, children: e }) });
function V(t) {
  var e, r, o = "";
  if (typeof t == "string" || typeof t == "number") o += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var n = t.length;
    for (e = 0; e < n; e++) t[e] && (r = V(t[e])) && (o && (o += " "), o += r);
  } else for (r in t) t[r] && (o && (o += " "), o += r);
  return o;
}
function N() {
  for (var t, e, r = 0, o = "", n = arguments.length; r < n; r++) (t = arguments[r]) && (e = V(t)) && (o && (o += " "), o += e);
  return o;
}
const p = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, g = N, f = (t, e) => (r) => {
  var o;
  if (e?.variants == null) return g(t, r?.class, r?.className);
  const { variants: n, defaultVariants: a } = e, c = Object.keys(n).map((s) => {
    const l = r?.[s], d = a?.[s];
    if (l === null) return null;
    const i = p(l) || p(d);
    return n[s][i];
  }), m = r && Object.entries(r).reduce((s, l) => {
    let [d, i] = l;
    return i === void 0 || (s[d] = i), s;
  }, {}), C = e == null || (o = e.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((s, l) => {
    let { class: d, className: i, ...I } = l;
    return Object.entries(I).every((w) => {
      let [y, b] = w;
      return Array.isArray(b) ? b.includes({
        ...a,
        ...m
      }[y]) : {
        ...a,
        ...m
      }[y] === b;
    }) ? [
      ...s,
      d,
      i
    ] : s;
  }, []);
  return g(t, c, C, r?.class, r?.className);
};
function x(...t) {
  return j(N(t));
}
const k = `
  inline-flex items-center justify-center rounded-md cursor-pointer transition-all
  focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
  wui-shadow-border
  hover:shadow-none
  hover:bg-[var(--color-btn-bg-hover)]
  hover:border-[var(--color-btn-border-hover)]
`, T = f(k, {
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
          text-[var(--color-btn-text)]
        `,
      rounded: `
        rounded-full
      `
    }
  },
  defaultVariants: {
    uiSize: "base",
    variant: "primary"
  }
}), U = v(
  ({ uiSize: t, variant: e, className: r, children: o, ...n }, a) => {
    const c = x(T({ uiSize: t, variant: e }), r);
    return /* @__PURE__ */ u("button", { ref: a, className: c, ...n, children: o });
  }
);
U.displayName = "UIButton";
const A = "inline-block border border-gray-200 rounded-md", B = f(A, {
  variants: {
    uiSize: {
      xs: "px-1 py-1 text-xs",
      sm: "px-1 py-1.5 text-sm",
      base: "px-2 py-2 text-base",
      lg: "px-3 py-2.5 text-lg",
      xl: "px-3 py-3 text-xl"
    },
    variant: {
      primary: `
          bg-[var(--color-btn-bg)]
          text-[var(--color-btn-text)]
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
}), O = v(
  ({ uiSize: t, variant: e, className: r, size: o, ...n }, a) => {
    const c = x(B({ uiSize: t, variant: e }), r);
    return /* @__PURE__ */ u("input", { ref: a, size: o ?? 1, className: c, ...n });
  }
);
O.displayName = "Input";
const P = f(
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
), _ = v(
  ({ uiSize: t, className: e, children: r, ...o }, n) => {
    const a = x(P({ uiSize: t }), e);
    return /* @__PURE__ */ u("div", { ref: n, className: a, ...o, children: r });
  }
);
_.displayName = "Icon";
const q = {
  "--color-primary": "#333",
  "--color-secondary": "#eee",
  "--color-accent": "#fb5f5f",
  "--color-toolbar-bg": "#828282",
  "--color-btn-bg": "#444",
  "--color-btn-text": "#ffffff",
  "--color-btn-border": "#374151",
  "--color-btn-bg-hover": "#4b5563",
  "--color-btn-border-hover": "#6b7280"
}, D = {
  "--color-primary": "#fefefe",
  "--color-secondary": "#7a7a7a",
  "--color-accent": "#c83131",
  "--color-toolbar-bg": "#373737",
  "--color-btn-bg": "#ffffff",
  "--color-btn-text": "#000000",
  "--color-btn-border": "#d1d5db",
  "--color-btn-bg-hover": "#f3f4f6",
  "--color-btn-border-hover": "#cbd5e1"
};
export {
  $ as ThemeProvider,
  U as UIButton,
  _ as UIIcon,
  O as UIInput,
  D as brightTheme,
  T as buttonVariants,
  q as darkTheme,
  P as iconVariants,
  B as inputVariants,
  W as useTheme
};
