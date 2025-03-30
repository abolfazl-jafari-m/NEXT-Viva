import React from 'react';
import {CgHeart, CgSearch, CgShoppingCart} from "react-icons/cg";
import {FaUserCircle} from "react-icons/fa";

function HeaderAction() {
    return (
        <div className={"flex items-center gap-6 text-gold/70"}>
            <CgSearch  size={24}/>
            <CgShoppingCart  size={24}/>
            <CgHeart size={24} />
            <FaUserCircle  size={24} />
        </div>
    );
}

export default HeaderAction;