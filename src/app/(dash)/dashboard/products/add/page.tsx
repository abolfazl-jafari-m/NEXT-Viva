"use client"
import React from 'react';
import dynamic from "next/dynamic";
const ProductForm = dynamic(() => import('@/components/dash/products/productForm/productForm'), { ssr: false })

function AddProduct() {
    return (
        <div className={"flex items-center justify-center p-8 "}>
            <ProductForm/>
        </div>
    );
}

export default AddProduct;