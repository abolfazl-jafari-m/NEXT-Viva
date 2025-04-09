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

function SalesChart() {
    const labels: string[] = ["فرودین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور"];
    const data1403: number[] = [200, 130, 190, 175, 240, 140]
    const data1404: number[] = [175, 195, 130, 160, 162, 110]
    const data = {
        labels: labels,
        datasets: [
            {
                label: "1403",
                data: data1403,
                backgroundColor: "rgba(255,111,142,0.8)",
                borderColor: "white",
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 7,
                pointHoverRadius: 4,
            },
            {
                label: "1404",
                data: data1404,
                backgroundColor: "rgba(104,223,223,0.8)",
                borderColor: "blue",
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 7,
                pointHoverRadius: 4,
            },
        ],
    }
    const options = {
        maintainAspectRatio: false,
        scale: {
            x: {
                ticks: {
                    font: {
                        family: "vazir",
                        size: 14
                    },
                }
            }, y: {
                ticks: {
                    font: {
                        family: "vazir",
                        size: 14
                    },
                }
            },
        },
        scales: {
            x: {
                grid: {
                    color: "#333333"
                },
                border: {
                    color: "#616161",
                },
                ticks: {
                    color: "#bdbcbc",

                }
            },
            y: {
                border: {
                    color: "#4e4e4e",
                },
                grid: {
                    color: "#333333"
                },
                ticks: {
                    color: "#b5b3b3",
                }
            }
        },
        responsive: true,
        plugins: {
            legend: {
                position: "right" as const,
                labels: {
                    color: "#fff",
                    font: {
                        family: "vazir"
                    }
                }
            },
            title: {
                display: true,
                color: "#c1bfbf",
                text: "فروش شش ماه اول ",
                font: {
                    family: "vazir",
                    size: 22
                }
            },
            tooltip: {
                titleFont: {
                    size: 20,
                    family: "vazir"
                },
                bodyFont: {
                    family: "vazir",
                    size: 14
                }
            },

        },
    }
    return (
        <div className={"bg-primary text-white p-10 rounded-md shadow shadow-black h-[400px]"}>
            <Line data={data} options={options}/>
        </div>
    );
}

export default SalesChart;