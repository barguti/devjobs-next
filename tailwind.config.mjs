// 1. Creamos la variable (la etiqueta)
const config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    blue: '#5964E0',
                    lightBlue: '#939BF4',
                    darkBlue: '#19202D',
                    gray: '#9DAEC2'
                }
            },
        },
    },
    plugins: [],
};

// 2. Exportamos esa variable
export default config;