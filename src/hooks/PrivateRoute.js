import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'



export default function PrivateRoutes() {
    let  authcheck = localStorage.getItem("token") == null ? false : true;
    return (
        <>
            {authcheck ? <Outlet  /> : <Navigate to="/" />};
        </>

    )

}