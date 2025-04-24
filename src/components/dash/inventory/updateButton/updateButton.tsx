"use client"
import React, {useState} from 'react';
import Button from "@/components/dash/base/button/button";
import {useTranslations} from "next-intl";
import {updateProductInventory} from "@/services/products";
import toast from "react-hot-toast";
import {BeatLoader} from "react-spinners";
import {useInventoryStore} from "@/lib/providers/InventoryStoreProvider";


function UpdateButton() {
    const t = useTranslations("dashInventory");
    const productsInventories = useInventoryStore(state => state.productsInventory);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleUpdateInventory = () => {
        setIsLoading(true);
        const updateInventories = productsInventories.map((item) => updateProductInventory(item.id, item.price, item.inventory))
        Promise.all(updateInventories).then(() => {
            toast.success(t("success-message"));
        }).catch(() => {
            toast.error(t("error-message"));
        })
            .finally(() => setIsLoading(false));
    }

     if (productsInventories.length === 0) {
         return null
     }
    return (
        <>
            {
                isLoading ? <BeatLoader color={"purple"}/>
                    :
                    <Button onClick={handleUpdateInventory}
                            className={"bg-darkChocolate py-2 px-8 rounded-lg shadow shadow text-white text-sm cursor-pointer max-md:px-6 py-1.5"}
                            type={"button"}>
                        {t("save")}
                    </Button>
            }


        </>
    );
}

export default UpdateButton;