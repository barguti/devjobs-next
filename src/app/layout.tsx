import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google"; // Fuente oficial del reto de Frontend Mentor
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider"; // Importamos tu nuevo Provider
import Header from "../components/Header"; // Importamos el Header

const kumbh = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "DevJobs Web App",
    description: "Buscador de trabajos para desarrolladores",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${kumbh.className} bg-lightGray dark:bg-[#090D17] text-darkGray dark:text-gray transition-colors duration-300`}
            >
                <ThemeProvider>
                    <Header />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
