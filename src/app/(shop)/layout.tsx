import React, {ReactNode} from 'react';
import Header from "@/components/shop/shared/header/header";
import Footer from "@/components/shop/shared/footer/footer";
import {WishlistStoreProvider} from "@/lib/providers/WishListStoreProvider";
import {ThemeProvider} from "next-themes";



function ShopLayout({children}: { children: ReactNode }) {
    return (
        <>
            <ThemeProvider attribute="class" defaultTheme={"light"}>
                <WishlistStoreProvider>
                    <div
                        className={"relative bg-linear-140 from-5% from-zinc-700 via-40% via-black to-stone-900 to-90% light:from-light-secondary light:via-secondary light:to-light-secondary"}>
                        <Header/>
                        <main>
                            {children}
                        </main>
                        <Footer/>
                    </div>
                </WishlistStoreProvider>
            </ThemeProvider>
        </>
    )
        ;
}

export default ShopLayout;