import React from 'react';
import dynamic from "next/dynamic";

const SalesChart = dynamic(() => import("@/components/dash/dashboard/salesChart/salesChart"))
const MonthlySale = dynamic(() => import("@/components/dash/dashboard/MonthlySaleChart/MonthlySales"))


function Dashboard() {

    return (
        <div className={"grid grid-cols-2 p-10 gap-20"}>
            <SalesChart/>
            <MonthlySale/>
        </div>
    );
}

export default Dashboard;