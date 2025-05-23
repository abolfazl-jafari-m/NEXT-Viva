import React from 'react';
import ProductForm from "@/components/dash/products/productForm/productForm";


function AddProduct() {
    return (
        <div className={"mx-auto p-8 max-xl:p-4 h-full max-md:h-dvh overflow-y-auto"}>
            <ProductForm/>
        </div>
    );
}

export default AddProduct;