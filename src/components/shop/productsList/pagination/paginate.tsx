"use client";
import React, {useEffect, useState} from 'react';
import {Pagination} from "@heroui/react";
import {useRouter, useSearchParams} from "next/navigation";

function Paginate({page, total}: { page: number, total: number }) {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const [currentPage, setCurrentPage] = useState(page);
    const router = useRouter();
    useEffect(() => {
        setCurrentPage(page);
    }, [page]);
    const handleChangePage = (data: number) => {
        setCurrentPage(data);
        params.set("page", data.toString());
        router.push(`/products?${params.toString()}`);
    }
    return (
        <div dir={"ltr"}>
            <Pagination color={"warning"} variant={"flat"} className={"text-white"} showShadow initialPage={1}
                        page={currentPage} onChange={handleChangePage} classNames={{base: "cursor-pointer"}}
                        total={total}/>
        </div>
    );
}

export default Paginate;