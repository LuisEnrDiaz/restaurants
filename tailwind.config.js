/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                bgGreenPrimary: {
                    50: "#FAFEF6",
                    100: "#F7FEF1",
                    200: "#EFFCE3",
                    300: "#E7FBD5",
                    400: "#DFFAC7",
                    500: "#D6F8B8",
                    600: "#96ED4A",
                    700: "#6FD615",
                    800: "#5CB011",
                    900: "#43820D",
                    950: "#2E5809",
                },
                bgGreenSecondary: {
                    50: "#F8FCF8",
                    100: "#F1F9F0",
                    200: "#E2F4E2",
                    300: "#D0ECCF",
                    400: "#BEE5BD",
                    500: "#ACDEAA",
                    600: "#85CF82",
                    700: "#52BB4F",
                    800: "#419E3D",
                    900: "#2F722C",
                    950: "#204D1E",
                },
                bgBluePrimary: {
                    50: "#F5F9F8",
                    100: "#ECF3F1",
                    200: "#D9E8E4",
                    300: "#C3DAD4",
                    400: "#ADCDC4",
                    500: "#8FBBAF",
                    600: "#77AC9E",
                    700: "#5D9888",
                    800: "#4D7F72",
                    900: "#385C52",
                    950: "#253C36",
                },
                bgBlueSecondary: {
                    50: "#F6F7F8",
                    100: "#EBEDF0",
                    200: "#D3D8DE",
                    300: "#B9C1CA",
                    400: "#96A2B0",
                    500: "#6B7B8E",
                    600: "#606F80",
                    700: "#556271",
                    800: "#46505D",
                    900: "#323A43",
                    950: "#23282F",
                },
            },

            // boxShadow: {
            //     bottom: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            //     borders:
            //         "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;",
            //     inputs: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;",
            // },

            fontFamily: {
                concert: '"Archivo Black", sans-serif;',
            },

            backgroundImage: {
                decorationFamily:
                    "url('../public/assets/decoration/family.jpg')",
                decorationCouple:
                    "url('../public/assets/decoration/couple.jpg')",
            },

            keyframes: {
                fadeOut: {
                    from: { opacity: "1" },
                    to: { opacity: "0" },
                },
            },
        },
    },
    plugins: [],
});
