import React from 'react'
import { Navigate } from 'react-router-dom';

const PublicRoute = () => {
    let isAuthenticated = true;
    return isAuthenticated ? <Navigate to={"/products"} /> : <Tabs />
}

export default PublicRoute