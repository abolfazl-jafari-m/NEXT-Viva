import React, {ReactNode} from 'react';
import Header from "@/components/shop/shared/header/header";
import Footer from "@/components/shop/shared/footer/footer";
import {WishlistStoreProvider} from "@/lib/providers/WishListStoreProvider";


function ShopLayout({children}: { children: ReactNode }) {
    return (
        <>
            <WishlistStoreProvider>
                <div
                    className={"relative bg-linear-140 from-5% from-zinc-700 via-40% via-black to-stone-900 to-90% "}>
                    <Header/>
                    <main>
                        {children}
                    </main>
                    <Footer/>
                </div>
            </WishlistStoreProvider>
        </>
    )
        ;
}

export default ShopLayout;