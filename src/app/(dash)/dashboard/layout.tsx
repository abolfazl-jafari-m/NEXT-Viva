import React, {ReactNode} from 'react';

function DashLayout({children} : {children : ReactNode}) {
    return (
        <div className={"bg-white w-full h-full grid grid-cols-12 grid-rows-12"}>
           <aside className={"col-span-2 row-span-full bg-primary"}>

           </aside>
            <header className={"col-span-10 bg-darkerGold row-span-1"}>


            </header>
            <main className={"col-span-10  row-span-11"}>
                {children}
            </main>
        </div>
    );
}

export default DashLayout;