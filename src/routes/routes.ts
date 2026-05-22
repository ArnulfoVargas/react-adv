import { lazy, LazyExoticComponent } from "react";
import { JSX } from "react/jsx-dev-runtime";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

const lazy1 = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyPage1" */ "../01-lazyload/pages/LazyPage1"
    ),
);
const lazy2 = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyPage2" */ "../01-lazyload/pages/LazyPage2"
    ),
);
const lazy3 = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyPage3" */ "../01-lazyload/pages/LazyPage3"
    ),
);

export const routes: Route[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    name: "Lazy 1",
    Element: lazy1,
    // Element: LazyPage1,
  },
  {
    to: "/lazy2",
    path: "lazy2",
    name: "Lazy 2",
    Element: lazy2,
    // Element: LazyPage2,
  },
  {
    to: "/lazy3",
    path: "lazy3",
    name: "Lazy 3",
    Element: lazy3,
    // Element: LazyPage3,
  },
];

type JSXElement = () => JSX.Element;
type Element = JSXElement | LazyExoticComponent<JSXElement>;

interface Route {
  to: string;
  path: string;
  name: string;
  Element: Element;
}
