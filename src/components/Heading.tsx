"use client";

import React, { useEffect } from "react"

const Heading = () => {
    useEffect(() => {
        console.log("Hello, World!");
    }, []);
    return (
        <div>
            <h1>Heading</h1>
        </div>
    )
}

export default Heading;