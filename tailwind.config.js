/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontSize: {
                sm: '0.75rem', //12px
                base: '.875rem', //14px
                md: '1rem', //16px
                lg: '1.25rem', //20px
                xl: '1.5rem', //24px
                '2xl': '1.75rem', //28px
                '3xl': '2.25rem', //36px
                '4xl': '3rem', //48px
                '5xl': '4rem', //64px

            },
            colors: {
                blue: {
                    dark: "#0A72AD",
                },

                gray: {
                    dark: "#C4C4C4",
                    light: "#E5E5E5",
                },
                black: {
                    light: "#242527",
                    dark: "#2B2B2B",
                },
            },
        },
    },
    plugins: [],
};