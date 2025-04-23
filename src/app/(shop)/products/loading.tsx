import React from 'react';
import {PuffLoader} from "react-spinners";

function Loading() {
    return (
        <div className={"w-full h-screen flex items-center justify-center"}>
            <PuffLoader color={"gold"} size={55}/>
        </div>
    );
}

export default Loading;