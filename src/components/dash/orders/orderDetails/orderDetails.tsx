import React from 'react';
import Button from "@/components/dash/base/button/button";

function OrderDetails({order}: any) {
    return (
        <div className={"grid grid-cols-12 gap-10 grid-rows-2"}>
            <div
                className={"col-span-8 row-span-full  flex flex-col gap-4 text-white bg-primary rounded-lg shadow shadow-black p-5"}>
                <h3 className={"text-2xl font-bold mb-4"}>جزییات سفارش</h3>
                <table>
                    <thead>
                    <tr className={"bg-darkChocolate text-white font-bold text-lg"}>
                            <th className={"p-2"}>نام محصول</th>
                            <th>قیمت محصول</th>
                            <th>تعداد</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        order.items.map((item: any) => (
                            <tr className={"odd:bg-secondary even:bg-white text-black text-center"} key={item.title}>
                                <td className={"p-2 min-w-fit"}>{item.title} - {item.volume} ml</td>
                                <td>{item.price}</td>
                                <td className={"w-1/3"}>{item.quantity}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            <div className={"col-span-4  flex flex-col gap-4 text-white bg-primary rounded-lg shadow shadow-black p-5"}>
                <h3 className={"font-semibold text-2xl mb-3"}>مشخصات مشتری</h3>
                <div className={"flex items-center gap-5"}>
                    <span className={"font-semibold"}>نام مشتری</span>
                    <p>{order.customer_name}</p>
                </div>
                <div className={"flex items-center gap-5"}>
                    <span className={"font-semibold"}>آدرس</span>
                    <p>{order.customer_address}</p>
                </div>
                <div className={"flex items-center gap-5"}>
                    <span className={"font-semibold"}>تلفن</span>
                    <p>{order.customer_phone}</p>
                </div>
            </div>
            <div className={"col-span-4 flex flex-col gap-4 rounded-lg text-white bg-primary shadow shadow-black p-5"}>
                <h3 className={"font-semibold text-2xl mb-3"}>وضعیت سفارش</h3>
                <div className={"flex items-center gap-5"}>
                    <span className={"font-semibold"}>وضعیت سفارش</span>
                    <p>{order.status === "pending" ? "درحال پردازش" : "تحویل شده"}</p>
                </div>
                <div className={"flex items-center gap-5"}>
                    <span className={"font-semibold"}>زمان سفارش</span>
                    <p>{new Date(order.createdAt).toLocaleDateString("fa", {
                        year: "2-digit",
                        month: "long",
                        day: "numeric"
                    })}</p>
                </div>
                <div className={"flex items-center gap-5"}>
                    <span className={"font-semibold"}>زمان تحویل</span>
                    <p>{new Date(order.deliver_time).toLocaleDateString("fa", {
                        year: "2-digit",
                        month: "long",
                        day: "numeric"
                    })}</p>
                </div>
                {order.status === "pending" &&
                    <Button className={"px-8 py-2 rounded-md bg-darkChocolate text-white self-end cursor-pointer"}
                            type={"button"}>تغییر
                        وضعیت به تحویل شده</Button>}
            </div>
        </div>
    );
}

export default OrderDetails;