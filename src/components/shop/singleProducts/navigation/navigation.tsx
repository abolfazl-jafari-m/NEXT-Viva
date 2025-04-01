import React from 'react';
import {TbListDetails} from "react-icons/tb";
import {MdInsertComment} from "react-icons/md";
import {FaCartArrowDown, FaDesktop} from "react-icons/fa6";

function Navigation() {
    return (
        <ul className={"fixed right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-5 z-20 text-white/60"}>
            <li>
                <FaDesktop size={18}/>
            </li><li>
                <TbListDetails size={18}/>
            </li>
            <li>
                <FaCartArrowDown size={18}/>
            </li>
            <li>
                <MdInsertComment size={18}/>
            </li>
</ul>
)
    ;
}

export default Navigation;