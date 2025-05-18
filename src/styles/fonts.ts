import localFont from "next/font/local";

const vazir = localFont({
    src: [
        {
            path: "../assets/fonts/vazir/vazirmatn-thin.woff2",
            weight: "100",
        }, {
            path: "../assets/fonts/vazir/vazirmatn-extralight.woff2",
            weight: "200",
        }, {
            path: "../assets/fonts/vazir/vazirmatn-light.woff2",
            weight: "300",
        }, {
            path: "../assets/fonts/vazir/vazirmatn-regular.woff2",
            weight: "400",
        }, {
            path: "../assets/fonts/vazir/vazirmatn-medium.woff2",
            weight: "500",
        }, {
            path: "../assets/fonts/vazir/vazirmatn-semibold.woff2",
            weight: "600",
        }, {
            path: "../assets/fonts/vazir/vazirmatn-bold.woff2",
            weight: "700",
        }, {
            path: "../assets/fonts/vazir/vazirmatn-extrabold.woff2",
            weight: "800",
        }, {
            path: "../assets/fonts/vazir/vazirmatn-black.woff2",
            weight: "900",
        },
    ],
    variable: "--font-vazir"
})

export default vazir;