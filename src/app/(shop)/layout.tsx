import React, {ReactNode} from 'react';
import Header from "@/components/shop/shared/header/header";
import SocialLink from "@/components/shop/landing/socialLink/socialLink";


function ShopLayout({children}: { children: ReactNode }) {
    return (
        <>
            <div
                className={"relative w-full h-full "}>
                <Header/>
                <SocialLink/>
                <main className={"w-full h-full"}>
                    {children}
                </main>
            </div>

        </>
    )
        ;
}

export default ShopLayout;