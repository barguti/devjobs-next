"use client";
import { useState } from "react";
import { User, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
    const [role, setRole] = useState<"developer" | "employer" | null>(null);

    return (
        <main className="min-h-screen bg-[#0B111D] flex items-center justify-center p-6">
            <div className="max-w-4xl w-full">
                <header className="text-center mb-12">
                    <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
                        Join <span className="text-brand-blue">DevJobs</span>
                    </h1>
                    <p className="text-[#9DAEC2] text-lg">
                        Choose how you want to use the platform to get started.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Opción Developer */}
                    <div
                        onClick={() => setRole("developer")}
                        className={`group p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                            role === "developer"
                                ? "border-brand-blue bg-brand-blue/5"
                                : "border-[#121721] bg-[#121721] hover:border-gray-700"
                        }`}
                    >
                        <div
                            className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                                role === "developer"
                                    ? "bg-brand-blue text-white"
                                    : "bg-[#19202D] text-[#9DAEC2]"
                            }`}
                        >
                            <User size={32} />
                        </div>
                        <h3 className="text-white text-2xl font-bold mb-2">
                            {"I'm a Developer"}
                        </h3>
                        <p className="text-[#9DAEC2] mb-6">
                            I want to find my next dream job and manage my
                            applications.
                        </p>
                        <span
                            className={`flex items-center gap-2 font-bold transition-all ${
                                role === "developer"
                                    ? "text-brand-blue"
                                    : "text-gray-500 group-hover:text-gray-300"
                            }`}
                        >
                            Select this option <ArrowRight size={18} />
                        </span>
                    </div>

                    {/* Opción Employer */}
                    <div
                        onClick={() => setRole("employer")}
                        className={`group p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                            role === "employer"
                                ? "border-brand-blue bg-brand-blue/5"
                                : "border-[#121721] bg-[#121721] hover:border-gray-700"
                        }`}
                    >
                        <div
                            className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                                role === "employer"
                                    ? "bg-brand-blue text-white"
                                    : "bg-[#19202D] text-[#9DAEC2]"
                            }`}
                        >
                            <Briefcase size={32} />
                        </div>
                        <h3 className="text-white text-2xl font-bold mb-2">
                            {"I'm an Employer"}
                        </h3>
                        <p className="text-[#9DAEC2] mb-6">
                            I want to post jobs and find the best talent for my
                            company.
                        </p>
                        <span
                            className={`flex items-center gap-2 font-bold transition-all ${
                                role === "employer"
                                    ? "text-brand-blue"
                                    : "text-gray-500 group-hover:text-gray-300"
                            }`}
                        >
                            Select this option <ArrowRight size={18} />
                        </span>
                    </div>
                </div>

                {/* Botón de Continuar */}
                <div className="mt-12 text-center transition-all duration-500">
                    <button
                        disabled={!role}
                        className={`px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform ${
                            role
                                ? "bg-cyan-700 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:bg-blue-400 hover:scale-105 active:scale-95 border-b-4 border-blue-700"
                                : "bg-[#19202D] text-gray-600 cursor-not-allowed border-b-4 border-[#0B111D]"
                        }`}
                    >
                        {role
                            ? `Create my ${role === "employer" ? "Company" : "Developer"} Account`
                            : "Select an option to continue"}
                    </button>

                    <p className="mt-6 text-[#9DAEC2]">
                        {"Already have an account?"}{" "}
                        <Link
                            href="/login"
                            className="text-brand-blue hover:underline ml-1"
                        >
                            {"Log in"}
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
