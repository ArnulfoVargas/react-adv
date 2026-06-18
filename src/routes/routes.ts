import { lazy, LazyExoticComponent } from "react";
import { JSX } from "react/jsx-dev-runtime";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

// const lazy1 = lazy(
//   () =>
//     import(
//       /* webpackChunkName: "LazyPage1" */ "../01-lazyload/pages/LazyPage1"
//     ),
// );
// const lazy2 = lazy(
//   () =>
//     import(
//       /* webpackChunkName: "LazyPage2" */ "../01-lazyload/pages/LazyPage2"
//     ),
// );
// const lazy3 = lazy(
//   () =>
//     import(
//       /* webpackChunkName: "LazyPage3" */ "../01-lazyload/pages/LazyPage3"
//     ),
// );
const lazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
    ),
);

export const routes: ObjectRoute[] = [
  {
    Element: lazyLayout,
    name: "Lazy home",
    path: "/lazy/*",
    to: "/lazy/",
  },
  {
    Element: NoLazy,
    name: "No Lazy",
    path: "/",
    to: "/",
  },
];

type JSXElement = () => JSX.Element;
type Element = JSXElement | LazyExoticComponent<JSXElement>;

export interface ObjectRoute {
  to: string;
  path: string;
  name: string;
  Element: Element;
}
