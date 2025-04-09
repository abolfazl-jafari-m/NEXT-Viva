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


const options = {
    maintainAspectRatio: false,
    responsive: true,
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
            ticks: {
                color: "#b5b3b3",
            }
        }
    },
    plugins: {
        legend: {
            display: false,
            position: "top" as const,
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
            text: "فروش ماه جاری ",
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

export const data = {
    labels: ['هفته اول', 'هفته دوم', 'هفته سوم', 'هفته آخر'],
    datasets: [
        {
            label: 'میزان فروش',
            data: [22, 19, 16, 26],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 2,
        },
    ],
};

function MonthlySales() {
    return (
        <div className={"h-[400px] p-5  rounded-md bg-primary text-white shadow shadow-black"}>
            <Bar data={data} options={options}/>
        </div>
    );
}

export default MonthlySales;