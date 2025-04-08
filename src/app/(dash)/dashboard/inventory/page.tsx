import React, {Suspense} from 'react';
import Button from "@/components/dash/base/button/button";
import InventoryTable from "@/components/dash/inventory/inventoryTable/inventoryTable";
import TableLoader from "@/components/dash/base/tableLoader/tableLoader";

async function Inventory() {
    const data = await fetch("http://api.alikooshesh.ir:3000/api/records/products", {
        headers: {
            api_key: 'next-ecoomerce-ajm-L3dvJVrLEmQ9DzF8VM9JaC5dHbvu8ULKsZFo9Jab78uWxenM6PYJlwaW2G2QmvJKNqei37hNVsuxj7hcc56jzvAqL3vXuzFIxTj5GW0oKp8POWfPD'
        }
    });
    const products = await data.json();
    return (
        <div className={"flex flex-col gap-5 p-10"}>
            <div className={"flex items-center justify-between"}>
                <h1 className={"font-bold text-3xl"}>لیست موجودی</h1>
                <Button
                    className={"bg-darkChocolate py-2 px-8 rounded-lg shadow shadow text-white text-sm cursor-pointer"}
                    type={"button"}>
                    ذخیره
                </Button>
            </div>
            <Suspense fallback={<div className={"flex items-center justify-center w-full h-full"}><TableLoader/></div>}>
                <InventoryTable inventoryList={products.records}/>
            </Suspense>
        </div>
    );
}

export default Inventory;