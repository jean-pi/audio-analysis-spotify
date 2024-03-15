"use client";
import { Navigate, Outlet } from "react-router-dom";
import React from 'react';
import { publicRoutes} from "@/constants";


export type AuthGuardrops = {
    
}

const AuthGuard: React.FC<AuthGuardrops> = () => { 

    const urlParams = new URLSearchParams(window.location.search);
    const accessRespondUrl = urlParams.get("error");    
    const dataLocalStorage = localStorage.getItem('code_verifier');


    return dataLocalStorage && !accessRespondUrl? <Outlet/> : <Navigate replace to={publicRoutes.LANDING} />;   
}

export default AuthGuard;
