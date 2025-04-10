"use client";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
import {Line} from "react-chartjs-2";
import {YearlyChart} from "@/constants/charts";

function SalesChart() {
    return (
        <div className={"bg-primary text-white p-10 rounded-md shadow shadow-black h-[400px] max-md:h-[305px] flex items-center justify-center max-md:p-4"}>
            <Line data={YearlyChart.data} options={YearlyChart.options} className={"!w-full"}/>
        </div>
    );
}

export default SalesChart;