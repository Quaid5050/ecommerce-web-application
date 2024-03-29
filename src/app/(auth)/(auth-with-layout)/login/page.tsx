import NextAuth from "next-auth";
import { noSSR } from "next/dynamic";
import { NextResponse } from "next/server";
import { nextTick } from "process";
import React from "react";



const Login = () => {
    return (
        <div>
            <h1>Login</h1>
        </div>
    )
}

export default Login;