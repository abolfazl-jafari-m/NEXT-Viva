"use client";
import React from 'react';
import {useRouter, useSearchParams} from "next/navigation";
import {CgClose} from "react-icons/cg";


function SelectedFilter() {
    const searchParams = useSearchParams();
    const filters = searchParams.entries().toArray();
    const params = new URLSearchParams(searchParams);
    const router = useRouter();

    const updateUrlSearchParams = (filter: [string, string]) => {
        const filterValues = params.getAll(filter[0]);
        params.delete(filter[0]);
        filterValues.filter(item => item !== filter[1]).map((item) => {
            params.append(filter[0], item);
        });
        router.push(`/products?${params.toString()}`);
    }

    if (filters.length <= 0) return null;
    return (
        <div className={"flex items-center  gap-5 "}>
            <h5 className={"text-white/60"}>فیلتر های اعمال شده :</h5>
            <div className={"flex items-center gap-3"}>
                {
                    filters.map((filter) => (
                        <div
                            className={"px-2 py-0.5 text-sm rounded-md bg-gold text-white flex items-center justify-between gap-2"}
                            key={filter[1]}>
                            <span>{filter[1]}</span>
                            <CgClose className={"cursor-pointer"} onClick={() => updateUrlSearchParams(filter)}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default SelectedFilter;