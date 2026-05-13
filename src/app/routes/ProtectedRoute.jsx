import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ redirectTo = "/" }) => {
  let isAuthenticated = localStorage.getItem("login");
  console.log("isAuthenticated", isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;
