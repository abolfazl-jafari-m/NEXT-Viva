import React from 'react';
import {Product} from "@/interfaces/interfaces";
import {getProductById} from "@/services/products";
import {notFound} from "next/navigation";
import ProductForm from "@/components/dash/products/productForm/productForm";

async function EditProduct({params}: { params: Promise<{ id: string }> }) {
    const {id} = await params;
    const product: Product = await getProductById(id);
    if (!product) {
        notFound();
    }
    return (
        <div className={"mx-auto p-8 max-xl:p-4 h-full max-md:h-dvh overflow-y-auto"}>
            <ProductForm product={product}/>
        </div>
    );
}

export default EditProduct;