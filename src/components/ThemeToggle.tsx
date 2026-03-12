"use client";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    return (
        <div className="flex items-center gap-4" suppressHydrationWarning>
            <Sun size={20} className="text-white" />

            <button
                aria-label="Toggle Dark Mode"
                onClick={() => {
                    const newTheme = theme === "dark" ? "light" : "dark";
                    console.log("Cambiando a:", newTheme); // 👈 Pon este console.log para debuguear
                    setTheme(newTheme);
                }}
                className="w-12 h-6 bg-white rounded-full p-1 relative flex items-center"
            >
                <div
                    className={`bg-[#5964E0] w-4 h-4 rounded-full transition-all duration-300 transform ${
                        mounted && theme === "dark"
                            ? "translate-x-6"
                            : "translate-x-0"
                    }`}
                />
            </button>

            <Moon size={20} className="text-white" />
        </div>
    );
}
