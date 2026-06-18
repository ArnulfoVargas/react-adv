import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";
import type { ObjectRoute } from "../../routes/routes";

const subroutes: ObjectRoute[] = [
  {
    Element: LazyPage1,
    name: "Lazy Page 1",
    path: "lazy-page-1",
    to: "lazy-page-1",
  },
  {
    Element: LazyPage2,
    name: "Lazy Page 2",
    path: "lazy-page-2",
    to: "lazy-page-2",
  },
  {
    Element: LazyPage3,
    name: "Lazy Page 3",
    path: "lazy-page-3",
    to: "lazy-page-3",
  },
];

const LazyLayout = () => {
  return (
    <div>
      <h1>Lazy Layout</h1>
      <ul>
        {subroutes.map((route) => (
          <li key={route.path}>
            <NavLink to={"/lazy/" + route.to}>{route.name}</NavLink>
          </li>
        ))}
      </ul>

      <Routes>
        {subroutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.Element />}
          />
        ))}
        <Route path="*" element={<Navigate replace to="/lazy/lazy-page-1" />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
