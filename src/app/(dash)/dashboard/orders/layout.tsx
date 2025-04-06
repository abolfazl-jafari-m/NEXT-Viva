import React, {ReactNode} from 'react';

function OrdersLayout({children , modal} : {children : ReactNode, modal : ReactNode}) {
    return (
        <>
            {children}
        </>
    );
}

export default OrdersLayout;