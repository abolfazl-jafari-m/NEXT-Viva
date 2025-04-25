import React, {ReactNode} from 'react';
import Header from "@/components/shop/shared/header/header";
import {CartStoreProvider} from "@/lib/providers/CartStoreProivder";


function ShopLayout({children}: { children: ReactNode }) {
    return (
        <>
            <CartStoreProvider>
                <div
                    className={"relative bg-linear-140 from-5% from-zinc-700 via-40% via-black to-stone-900 to-90% "}>
                    <Header/>
                    <main>
                        {children}
                    </main>
                </div>
            </CartStoreProvider>
        </>
    )
        ;
}

export default ShopLayout;