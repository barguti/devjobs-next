"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        const newTheme = resolvedTheme === "dark" ? "light" : "dark";
        setTheme(newTheme);
    };

    if (!mounted) {
        return (
            <button
                aria-label="Toggle Dark Mode"
                className="w-12 h-6 bg-[#F4F6F8] dark:bg-[#121721] rounded-full p-1 relative flex items-center transition-colors duration-300"
            >
                <div className="w-4 h-4 rounded-full bg-[#5964E0] translate-x-0" />
            </button>
        );
    }

    const isDark = resolvedTheme === "dark";

    return (
        <button
            aria-label="Toggle Dark Mode"
            onClick={toggleTheme}
            className={`w-12 h-6 rounded-full p-1 relative flex items-center transition-colors duration-300 ${
                isDark ? "bg-[#121721]" : "bg-[#F4F6F8]"
            }`}
        >
            <div
                className={`w-4 h-4 rounded-full transition-all duration-300 flex items-center justify-center ${
                    isDark ? "translate-x-6 bg-white" : "translate-x-0 bg-[#5964E0]"
                }`}
            >
                {isDark ? (
                    <Moon size={10} className="text-[#5964E0]" />
                ) : (
                    <Sun size={10} className="text-white" />
                )}
            </div>
        </button>
    );
}