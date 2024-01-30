import React from "react"
import Heading from "@/components/Heading";
import {Metadata} from "next";

type Props =  {
   params: {
       productId: string
   }
}

export const generateMetadata = ({params}: Props):Metadata => {
    return {
        title: `Product ${params.productId}`,
        description: `Product ${params.productId} description`,
    }

}


const Product = ({params}:Props) => {
    return (
        <div>
            <Heading/>
            <h1>Product Detail {params.productId}  </h1>
        </div>
    )
}

export default Product;