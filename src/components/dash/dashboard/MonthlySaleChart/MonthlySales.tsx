"use client"
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
import {Bar} from 'react-chartjs-2';
import {MonthlyChart} from "@/constants/charts";


function MonthlySales() {
    return (
        <div className={"h-[400px] p-5  rounded-md bg-primary text-white shadow shadow-black"}>
            <Bar data={MonthlyChart.data} options={MonthlyChart.options}/>
        </div>
    );
}

export default MonthlySales;