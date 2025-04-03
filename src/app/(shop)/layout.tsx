import React, {ReactNode} from 'react';
import Header from "@/components/shop/shared/header/header";
import SocialLink from "@/components/shop/landing/socialLink/socialLink";


function ShopLayout({children}: { children: ReactNode }) {
    return (
        <>
            <div
                className={"relative bg-linear-to-l from-5% from-zinc-800 via-50% via-black to-primary to-85% "}>
                <Header/>
                <main>
                    {children}
                </main>
            </div>
        </>
    )
        ;
}

export default ShopLayout;