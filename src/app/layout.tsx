import type {Metadata} from "next";
import "./globals.css";
import vazir from "@/styles/fonts";
import {Toaster} from "react-hot-toast";
import ReactQueryProvider from "@/lib/providers/reactQueryProvider";
import {getLocale} from "next-intl/server";
import {NextIntlClientProvider} from "next-intl";
import {OrderStoreProvider} from "@/lib/providers/OrderStoreProvider";
import {CartStoreProvider} from "@/lib/providers/CartStoreProivder";


export const metadata: Metadata = {
    title: "ویوا عطر",
    description: "مرجع تخصصی عطر و ادکلن",
};

export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getLocale()
    return (
        <html lang={locale} dir={"rtl"} className={"no-scrollbar"}>
        <body
            className={`${vazir.className} no-scrollbar overflow-x-hidden`}
            cz-shortcut-listen="true"
        >
        <NextIntlClientProvider>
            <ReactQueryProvider>
                <OrderStoreProvider>
                    <CartStoreProvider>
                        {children}
                    </CartStoreProvider>
                </OrderStoreProvider>
            </ReactQueryProvider>
        </NextIntlClientProvider>
        <Toaster position={"top-left"} toastOptions={{
            style: {
                backgroundColor: "#1A1A1A",
                color: "#E0E0E0",
                direction: "ltr",
                padding: "10px 32px",
                borderRadius: 14,
                textWrap: "nowrap",
                textAlign: "center"
            },
            error: {
                style: {
                    border: "solid 2px red",
                }
            }, success: {
                style: {
                    border: "solid 2px green",

                }
            }
        }
        }/>
        </body>
        </html>
    );
}
