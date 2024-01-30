"use client";

import React from "react"
import Link from "next/link";
import { useRouter } from "next/navigation";
const Products = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/products/2/reviews/1");
    }

    return (
        <div>
            <h1>Products</h1>
            <Link
                onClick={handleClick}
                href="/products/1" style={{
                color: "blue"
            }}>
                Product 1
            </Link>
            <br/>
            <Link href="/products/2" style={{
                color: "blue"
            }}>
                Product 2
            </Link>

        </div>
    )
}

export  default Products;