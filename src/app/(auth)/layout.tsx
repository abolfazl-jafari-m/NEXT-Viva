import React, {ReactNode} from 'react';

function AuthLayout({children} : { children : ReactNode}) {
    return (
        <main className={"flex items-center justify-center w-full h-full bg-[url('/images/background-auth.jpeg')] bg-cover bg-no-repeat bg-center"}>
            {children}
        </main>
    );
}

export default AuthLayout;