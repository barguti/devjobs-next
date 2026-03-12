"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="light" // 👈 Forcemos que parta en light para probar
            enableSystem={false} // 👈 Desactiva que le pregunte al Windows/Mac por ahora
        >
            {children}
        </NextThemesProvider>
    );
}
