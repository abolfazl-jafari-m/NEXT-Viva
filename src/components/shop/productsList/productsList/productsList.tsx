import React from 'react';
import ProductsCard from "@/components/shop/productsList/ProductCard/ProductsCard";
import {Product} from "@/interfaces/interfaces";
import {getProductsByFilters} from "@/services/products";
import Paginate from "@/components/shop/productsList/pagination/paginate";


async function ProductsList({volume, page, fragrance, gender}: {
    volume?: string[] | string,
    page?: string | string[],
    gender?: string[] | string,
    fragrance?: string[] | string
}) {
    const pageNumber = page ?? "1";
    const data = await getProductsByFilters(8, pageNumber as string, fragrance, volume, gender);
    const products: Product[] = data.records;
    return (
        <div className={"flex flex-col gap-10 items-center col-span-9"}>
            <div className={`grid grid-cols-4 gap-7  w-full`}>
                {products.map((product: Product) => (
                    <ProductsCard key={product.id} product={product}/>
                ))
                }
            </div>
            <Paginate page={data.currentPage} total={data.totalPages}/>
        </div>
    );
}

export default ProductsList;