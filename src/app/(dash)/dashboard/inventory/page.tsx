import React from 'react';
import InventoryTable from "@/components/dash/inventory/inventoryTable/inventoryTable";
import {API_KEY, API_URL} from "@/constants/configs";
import {getTranslations} from "next-intl/server";
import UpdateButton from "@/components/dash/inventory/updateButton/updateButton";
import InventoryStoreProvider from "@/lib/providers/InventoryStoreProvider";

export const dynamic = 'force-dynamic';

async function Inventory() {
    const t = await getTranslations("dashInventory");
    const data = await fetch(`${API_URL}/api/records/products`, {
        headers: {
            api_key: API_KEY
        },
    });
    if (!data.ok) {
        throw new Error(t("fetch-error"));
    }
    const products = await data.json();
    return (
        <InventoryStoreProvider>
            <div className={"flex flex-col gap-5 p-10 max-md:p-4"}>
                <div className={"flex items-center justify-between"}>
                    <h1 className={"font-bold text-3xl max-md:text-2xl text-black"}>{t("title")}</h1>
                    <UpdateButton/>
                </div>
                <InventoryTable inventoryList={products.records}/>
            </div>
        </InventoryStoreProvider>
    );
}

export default Inventory;