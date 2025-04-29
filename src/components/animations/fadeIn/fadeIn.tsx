"use client";
import React, {ReactNode} from 'react';
import {motion} from "motion/react"

function FadeIn({children, className}: { children: ReactNode, className?: string }) {
    return (
        <motion.div className={className} initial={{opacity: 0}}
                    whileInView={{opacity: 1}} transition={{duration: 0.7 ,ease: "anticipate"}}>
            {children}
        </motion.div>
    );
}

export default FadeIn;