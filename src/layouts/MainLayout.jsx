import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./mainlayout.module.css";
const MainLayout = () => {
  return (
    <div>
      <header className={styles.header}>
        <nav>
          <ul className={styles.nav_list}>
            <li>
              <NavLink to={"/"} className={({isActive}) => isActive ? styles.active_link : ""}>Miscellaneous</NavLink>
            </li>
            <li>
              <NavLink to="/products" className={({isActive}) => isActive ? styles.active_link : ""}>Products</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default MainLayout;
