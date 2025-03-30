import React from 'react';

function Navbar() {
    return (
        <nav>
            <ul className={"flex items-center  gap-12 text-white text-xl"}>
                <li>خانه</li>
                <li>محصولات</li>
                <li>درباره ما</li>
                <li>تماس با ما</li>
            </ul>
        </nav>
    );
}

export default Navbar;