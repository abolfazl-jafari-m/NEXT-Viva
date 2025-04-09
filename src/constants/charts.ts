export const MonthlyChart = {
    options: {
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
    },
    data: {
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
    }
}

const data1403: number[] = [200, 130, 190, 175, 240, 140]
const data1404: number[] = [175, 195, 130, 160, 162, 110]
const YearlyLabels: string[] = ["فرودین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور"];
export const YearlyChart = {
    options: {
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
    },
    data: {
        labels: YearlyLabels,
        datasets:
            [
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
}