import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import logo from "../logo.svg";
import { routes } from "./routes";
import { Suspense } from "react";

export const Navigation = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map((e) => (
                <li key={e.path}>
                  <NavLink
                    to={e.to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {e.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map((e) => (
              <Route path={e.path} element={<e.Element />} key={e.to}></Route>
            ))}
            <Route
              path="/*"
              element={<Navigate to={routes[0].to} replace={true} />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
};
