"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    return (
        <header className="bg-white/80 dark:bg-[#101622]/80 h-20 w-full px-6 content-center transition-all">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-dark dark:text-white text-3xl font-bold tracking-tighter">
                        devjobs
                    </h1>
                </Link>

                {/* Contenedor del Toggle */}
                <div className="flex items-center gap-4">
                    <Sun size={20} className="text-dark dark:text-white" />

                    <button
                        aria-label="Toggle Dark Mode"
                        onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                        }
                        className="w-12 h-6 bg-white rounded-full p-1 relative flex items-center group"
                    >
                        <div
                            className={`bg-[#5964E0] hover:bg-[#939BF4] w-4 h-4 rounded-full transition-all duration-300 transform ${
                                mounted && theme === "dark"
                                    ? "translate-x-6"
                                    : "translate-x-0"
                            }`}
                        />
                    </button>

                    <Moon size={20} className="text-dark dark:text-white" />
                </div>
            </div>
        </header>
    );
}
