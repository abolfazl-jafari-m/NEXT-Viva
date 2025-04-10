import React from 'react';
import dynamic from "next/dynamic";

const SalesChart = dynamic(() => import("@/components/dash/dashboard/salesChart/salesChart"))
const MonthlySale = dynamic(() => import("@/components/dash/dashboard/MonthlySaleChart/MonthlySales"))


function Dashboard() {

    return (
        <div className={"grid grid-cols-2 p-10 gap-20 max-md:grid-cols-1 p-6 max-md:gap-10 max-sm:gap-5 max-xl:gap-5 max-xl:p-7 max-md:px-4 max-md:py-6"}>
            <SalesChart/>
            <MonthlySale/>
        </div>
    );
}

export default Dashboard;