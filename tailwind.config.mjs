// 1. Creamos la variable (la etiqueta)
const config = {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    blue: '#135BEC',
                    lightBlue: '#939BF4',
                    darkBlue: '#19202D',
                    gray: '#9DAEC2',
                    lightGray: "#F4F6F8",
                    darkGray: "#6E8098",
                    midnight: "#121721"
                }
            },
        },
    },
    plugins: [],
};

// 2. Exportamos esa variable
export default config;