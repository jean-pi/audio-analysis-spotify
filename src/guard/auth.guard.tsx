"use client";
import { Navigate, Outlet } from "react-router-dom";
import React from 'react';
import { publicRoutes,restrictedRoutes } from "@/constants";


export type AuthGuardrops = {
    
}

const AuthGuard: React.FC<AuthGuardrops> = () => { 

    let nextUrl:string = "";

    const urlParams = new URLSearchParams(window.location.search);
    const accessRespondUrl = urlParams.get("error");
    const dataLocalStorage = localStorage.getItem('code_verifier');

    if(accessRespondUrl || !dataLocalStorage) nextUrl = publicRoutes.LANDING;
    if(dataLocalStorage && !accessRespondUrl) nextUrl = restrictedRoutes.APP; 

    console.log(nextUrl)
    console.log("a")


    return <Navigate replace to={nextUrl} />;   
}

//cases
// 1. no esta logueado: todas la paginas deben llevar a landing
// 2. si esta logueado: todas las paginas debem llevar a app
// 3. error de auth: debe llevar a landing

export default AuthGuard;
