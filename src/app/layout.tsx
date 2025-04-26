import type {Metadata} from "next";
import "./globals.css";
import localFont from 'next/font/local'
import {Toaster} from "react-hot-toast";
import ReactQueryProvider from "@/lib/providers/reactQueryProvider";
import {getLocale} from "next-intl/server";
import {NextIntlClientProvider} from "next-intl";
import {OrderStoreProvider} from "@/lib/providers/OrderStoreProvider";

const vazir = localFont({
    src: [
        {
            path: "../assets/fonts/vazir/Vazirmatn-UI-FD-thin.woff2",
            weight: "100",
        }, {
            path: "../assets/fonts/vazir/Vazirmatn-UI-FD-ExtraLight.woff2",
            weight: "200",
        }, {
            path: "../assets/fonts/vazir/Vazirmatn-UI-FD-Light.woff2",
            weight: "300",
        }, {
            path: "../assets/fonts/vazir/Vazirmatn-UI-FD-Regular.woff2",
            weight: "400",
        }, {
            path: "../assets/fonts/vazir/Vazirmatn-UI-FD-Medium.woff2",
            weight: "500",
        }, {
            path: "../assets/fonts/vazir/Vazirmatn-UI-FD-SemiBold.woff2",
            weight: "600",
        }, {
            path: "../assets/fonts/vazir/Vazirmatn-UI-FD-Bold.woff2",
            weight: "700",
        }, {
            path: "../assets/fonts/vazir/Vazirmatn-UI-FD-ExtraBold.woff2",
            weight: "800",
        }, {
            path: "../assets/fonts/vazir/Vazirmatn-UI-FD-Black.woff2",
            weight: "900",
        },
    ],
    variable: "--font-vazir"
})

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
                    {children}
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
