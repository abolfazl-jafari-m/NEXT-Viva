import React, {ReactNode} from 'react';

function ProductsLayout({children, modal}: { children: ReactNode, modal: ReactNode }) {
    return (
        <>
            {modal}
            {children}
        </>
    );
}

export default ProductsLayout;