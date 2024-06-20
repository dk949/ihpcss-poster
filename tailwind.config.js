/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
export default {
    content: [
        "./index.html",
        "./public/*.svg",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    'Noto Sans',
                    // ...defaultTheme.fontFamily.sans,
                ]
            }
        },
    },
    plugins: [
        plugin(({ addVariant }) => {
            addVariant("screen", "@media screen");
        })
    ],
}
