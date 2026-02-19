import "./globals.css";
import Navbar from "@/src/components/Navbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            {/* El fondo oscuro de tus capturas */}
            <body className="bg-[#0B111D] text-white min-h-screen">
                <Navbar />
                <main className="max-w-6xl mx-auto px-4 pb-12">{children}</main>
            </body>
        </html>
    );
}
