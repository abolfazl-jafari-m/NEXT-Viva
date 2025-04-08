import React from 'react';
import ProductForm from "@/components/dash/products/productForm/productForm";

function Default() {
    return (
        <div
            className={"fixed z-20 top-0 left-0 w-full h-screen bg-black/70 backdrop-blur-lg flex items-center justify-center"}>
            <div className={"p-10 rounded-md shadow shadow-black bg-white"}>
                <ProductForm/>
            </div>
        </div>
    );
}

export default Default;