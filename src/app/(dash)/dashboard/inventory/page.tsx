import React from 'react';
import Button from "@/components/dash/base/button/button";
import InventoryTable from "@/components/dash/inventory/inventoryTable/inventoryTable";

function Inventory() {
    const inventory = [
        {
            "createdAt": "2025-04-05T06:16:31.517Z",
            "name": "Lydia Jacobi",
            "price": "336.39",
            "count": 2,
            "id": "15"
        },
        {
            "createdAt": "2025-04-05T07:14:07.694Z",
            "name": "Joel Monahan",
            "price": "537.79",
            "count": 33,
            "id": "30"
        },
        {
            "createdAt": "2025-04-05T00:22:00.206Z",
            "name": "Alison O'Keefe",
            "price": "562.75",
            "count": 23,
            "id": "31"
        },
        {
            "createdAt": "2025-04-05T08:24:23.692Z",
            "name": "Forrest O'Conner-Streich",
            "price": "413.14",
            "count": 51,
            "id": "32"
        },
        {
            "createdAt": "2025-04-05T12:09:03.236Z",
            "name": "Miranda Paucek",
            "price": "528.55",
            "count": 81,
            "id": "33"
        },
        {
            "createdAt": "2025-04-05T07:01:16.273Z",
            "name": "Marjorie Schuster",
            "price": "844.20",
            "count": 35,
            "id": "34"
        },
        {
            "createdAt": "2025-04-04T17:32:26.691Z",
            "name": "Erica Ondricka DDS",
            "price": "936.99",
            "count": 66,
            "id": "35"
        }
    ]
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
            <InventoryTable inventoryList={inventory}/>
        </div>
    );
}

export default Inventory;