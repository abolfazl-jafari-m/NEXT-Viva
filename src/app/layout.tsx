import type {Metadata} from "next";
import "./globals.css";
import localFont from 'next/font/local'
import {Toaster} from "react-hot-toast";
import ReactQueryProvider from "@/lib/providers/reactQueryProvider";

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

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir={"rtl"} className={"no-scrollbar"}>
        <body
            className={`${vazir.className} no-scrollbar`}
            cz-shortcut-listen="true"
        >
        <ReactQueryProvider>
            {children}
        </ReactQueryProvider>
        <Toaster/>
        </body>
        </html>
    );
}
