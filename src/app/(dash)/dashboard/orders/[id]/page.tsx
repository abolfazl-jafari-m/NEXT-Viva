import React from 'react';
import OrderDetails from "@/components/dash/orders/orderDetails/orderDetails";
import {getOrderById} from "@/services/orders";
import {notFound} from "next/navigation";

async function Order({params}: { params: Promise<{ id: string }> }) {
    const {id} = await params;
    const order = await getOrderById(id);

    if (!order) {
        notFound();
    }

    return (
        <div className={"p-10 max-xl:p-5 "}>
            <OrderDetails order={order}/>
        </div>
    );
}

export default Order;