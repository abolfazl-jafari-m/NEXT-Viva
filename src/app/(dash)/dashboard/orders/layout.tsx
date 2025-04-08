import React, {ReactNode} from 'react';

function OrdersLayout({children , modal} : {children : ReactNode, modal : ReactNode}) {
    return (
        <>
            {modal}
            {children}
        </>
    );
}

export default OrdersLayout;