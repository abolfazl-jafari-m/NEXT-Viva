"use client"
import React, {ChangeEvent, useState} from 'react';
import Input from "@/components/dash/base/input/input";
import {useInventoryStore} from "@/lib/providers/InventoryStoreProvider";
import {priceFormatter} from "@/lib/utils/helpers";



function TableCell({id, flag, value, className}: { id: string, flag: string, value: string, className?: string }) {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [item, setItem] = useState<string>(value);
    const {updateInventory, updatePrice} = useInventoryStore((state)=>state);
    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setEditMode(false);
            if (flag === "price") {
                updatePrice(id, item);
            } else if (flag === "inventory") {
                updateInventory(id, item);
            }
        }
        if (!e.key.match(/^\d+$/) && !(e.key === "Backspace")) {
            e.preventDefault();
        }
    }
    return (
        <td onDoubleClick={() => setEditMode(true)} className={className}
        >
            {
                !editMode ?
                    <p className={"p-1"}>{flag === "price" ?priceFormatter(+item) : item}</p>
                    :
                    (<Input
                        dir={"ltr"}
                        className={"h-full border rounded-sm border-blue-500 outline-none bg-secondary text-black w-fit mx-auto text-center"}
                        name={item} value={item}
                        onKeyDown={handleEnter}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setItem(e.target.value)}/>)
            }
        </td>
    );
}

export default TableCell;