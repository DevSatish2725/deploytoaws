import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from "./mainlayout.module.css";
const MainLayout = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem("login", true);
    navigate("/products");
  };
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      <header className={styles.header}>
        <nav>
          <ul className={styles.nav_list}>
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? styles.active_link : ""
                }
              >
                Miscellaneous
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? styles.active_link : ""
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/posts"
                className={({ isActive }) =>
                  isActive ? styles.active_link : ""
                }
              >
                Posts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/practice"
                className={({ isActive }) =>
                  isActive ? styles.active_link : ""
                }
              >
                Practice
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/funzone"
                className={({ isActive }) =>
                  isActive ? styles.active_link : ""
                }
              >
                Fun Zone
              </NavLink>
            </li>
            <li>
              <button onClick={handleLogin}>Login</button>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default MainLayout;
