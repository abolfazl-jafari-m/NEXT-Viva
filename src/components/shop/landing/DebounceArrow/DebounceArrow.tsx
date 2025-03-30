import React from 'react';
import {FaArrowDown} from "react-icons/fa6";

function DebounceArrow() {
    return (
        <div className={"absolute left-1/2 -translate-x-1/2 bottom-3 text-white text-xl animate-bounce"}>
            <FaArrowDown/>
        </div>
    );
}

export default DebounceArrow;