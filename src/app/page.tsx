import React from "react";
import Link from "next/link"
export default function Home() {
  return (
      <div>
        <Link href={"/front"} >
            Ecommerce
        </Link>
   <br/>
          <Link href={"/admin"}>
              Dashboard
          </Link>
      </div>


  )
}
