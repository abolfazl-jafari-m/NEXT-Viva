import React from 'react';
import {PuffLoader} from "react-spinners";

function Loading() {
    return (
        <div className={"flex items-center justify-center w-full h-screen"}>
            <PuffLoader color={"gold"} size={60} />
        </div>
    );
}

export default Loading;