"use client";
import React, {ReactNode} from 'react';
import {motion} from "motion/react"

function SlideIn({children, className, x}: { children: ReactNode, className?: string, x: number }) {
    return (
        <motion.div className={className} initial={{opacity: 0, translateX: x}}
                    whileInView={{opacity: 1, translateX: 0}} transition={{duration: 1.5}}>
            {children}
        </motion.div>
    );
}

export default SlideIn;