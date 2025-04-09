import React from 'react';
import OrderDetails from "@/components/dash/orders/orderDetails/orderDetails";
import {getOrderById} from "@/services/orders";
import {notFound} from "next/navigation";
import BackBtn from "@/components/dash/base/backBtn/backBtn";
import {CgClose} from "react-icons/cg";

async function OrderModalPage({params} :{params :Promise<{id : string}>}) {
    const {id} = await params;
    const order = await getOrderById(id);

    if (!order){
        notFound();
    }
    return (
        <div
            className={"fixed z-20 w-full h-screen bg-black/70 backdrop-blur-lg flex items-center justify-center top-0 left-0"}>
            <div className={"p-14 rounded-lg bg-white shadow shadow-black relative"}>
                <BackBtn className={"absolute top-2 left-3 rounded-full p-1 bg-primary text-white cursor-pointer"}>
                    <CgClose/>
                </BackBtn>
                <OrderDetails order={order}/>
            </div>
        </div>
    );
}

export default OrderModalPage;