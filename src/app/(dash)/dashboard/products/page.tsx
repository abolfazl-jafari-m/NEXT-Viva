import React from 'react';
import ProductsList from "@/components/shop/productsList/productsList/productsList";

function Products() {
    return (
        <div className={"flex flex-col gap-4 p-10"}>
            <h1 className={"font-bold text-4xl"}>محصولات</h1>
            <ProductsList/>
        </div>
    );
}

export default Products;