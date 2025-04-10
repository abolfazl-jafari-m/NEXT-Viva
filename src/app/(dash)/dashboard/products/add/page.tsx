"use client"
import React from 'react';
import dynamic from "next/dynamic";
const ProductForm = dynamic(() => import('@/components/dash/products/productForm/productForm'), { ssr: false })

function AddProduct() {
    return (
        <div className={"mx-auto p-8 max-xl:p-4 max-md:h-dvh overflow-y-auto"}>
            <ProductForm/>
        </div>
    );
}

export default AddProduct;