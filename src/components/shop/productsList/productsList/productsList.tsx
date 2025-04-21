import React from 'react';
import ProductsCard from "@/components/shop/productsList/ProductCard/ProductsCard";
import {API_KEY, API_URL} from "@/constants/configs";
import {Product} from "@/interfaces/interfaces";

async function ProductsList() {
    const response = await fetch(`${API_URL}/api/records/products`, {
        method: "GET",
        headers: {
            api_key: API_KEY,
        }
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.json();
    const products: Product[] = data.records;
    return (
        <div className={"flex flex-col gap-10 items-center col-span-9"}>
            <div className={`grid grid-cols-4 gap-10  w-full`}>
                {products.slice(0, 10).map((product: Product) => (
                    <ProductsCard key={product.id} product={product}/>
                ))
                }
            </div>
        </div>
    );
}

export default ProductsList;