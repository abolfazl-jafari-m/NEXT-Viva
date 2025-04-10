import React from 'react';
import ProductForm from "@/components/dash/products/productForm/productForm";

function AddProductModal() {
    return (
        <div
            className={" fixed z-20 top-0 right-0 left-0  w-full  bg-black/70 backdrop-blur-lg  p-5 xl:p-10  overflow-y-auto h-screen "}>
            <div className={"p-10 rounded-md shadow shadow-black bg-white max-xl:p-4 max-xl:w-4/5 max-lg:w-5/6 xl:w-3/5 mx-auto"}>
                <ProductForm/>
            </div>
        </div>
    );
}

export default AddProductModal;