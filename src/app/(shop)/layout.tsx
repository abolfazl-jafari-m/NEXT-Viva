import React, {ReactNode} from 'react';

function ShopLayout({children}: { children: ReactNode }) {
    return (
        <div>{children}</div>
    );
}

export default ShopLayout;