import React, {ReactNode} from 'react';

function AuthLayout({children} : { children : ReactNode}) {
    return (
        <main className={"flex items-center justify-center w-full min-h-screen max-md:p-5 bg-[url('/images/background-auth.jpeg')] bg-cover bg-no-repeat bg-center"}>
            {children}
        </main>
    );
}

export default AuthLayout;