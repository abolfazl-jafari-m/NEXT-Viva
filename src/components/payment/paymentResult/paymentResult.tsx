import React from 'react';
import {useTranslations} from "next-intl";
import {forbidden, useRouter} from "next/navigation";
import {useOrderStore} from "@/lib/providers/OrderStoreProvider";
import {FaCheck} from "react-icons/fa6";
import {IoMdClose} from "react-icons/io";

function PaymentResult() {
    const t = useTranslations("payment");
    const router = useRouter();
    const paymentResult = useOrderStore((state) => state.paymentStatus);
    const handlePaymentStatus = () => {
        router.push("/");
    }
    if (paymentResult === null) {
        forbidden();
    }
    return (
        <>
            {
                paymentResult ?
                    <>
                        <p className={"text-2xl font-bold"}>{t("successful-pay")}</p>
                        <div
                            className={"rounded-full p-4 bg-cyan-800 text-white text-7xl w-32 h-32 flex items-center justify-center"}>
                            <FaCheck/></div>
                    </>
                    : <>
                        <p className={"text-2xl font-bold"}>{t("unsuccessful-pay")}</p>
                        <div
                            className={"rounded-full p-4 bg-rose-800 text-white text-7xl w-32 h-32 flex items-center justify-center"}>
                            <IoMdClose/></div>
                    </>
            }
            <button type={"button"} onClick={handlePaymentStatus}
                    className={"px-10 py-2 text-white bg-primary rounded-lg shadow shadow-black cursor-pointer"}>{t("backToHome")}
            </button>
        </>
    );
}

export default PaymentResult;