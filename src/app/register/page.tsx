"use client";
import { useState } from "react";
import {
    User,
    Briefcase,
    ArrowRight,
    ChevronLeft,
    Mail,
    Lock,
    Building2,
} from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
    const [role, setRole] = useState<"developer" | "employer" | null>(null);
    const [step, setStep] = useState<1 | 2>(1); // Step 1: Selección, Step 2: Formulario

    // Función para volver atrás
    const handleBack = () => {
        setStep(1);
    };

    return (
        <main className="min-h-screen bg-[#0B111D] flex items-center justify-center p-6 transition-all duration-500">
            <div className="max-w-4xl w-full">
                {step === 1 ? (
                    /* --- VISTA 1: SELECCIÓN DE ROL --- */
                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <header className="text-center mb-12">
                            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
                                Join{" "}
                                <span className="text-brand-blue">DevJobs</span>
                            </h1>
                            <p className="text-[#9DAEC2] text-lg">
                                {
                                    "Choose how you want to use the platform to get started."
                                }
                            </p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Tarjeta Developer */}
                            <div
                                onClick={() => setRole("developer")}
                                className={`group p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                                    role === "developer"
                                        ? "border-blue-500 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                                        : "border-[#121721] bg-[#121721] hover:border-gray-700"
                                }`}
                            >
                                <div
                                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                                        role === "developer"
                                            ? "bg-blue-500 text-white"
                                            : "bg-[#19202D] text-[#9DAEC2]"
                                    }`}
                                >
                                    <User size={32} />
                                </div>
                                <h3 className="text-white text-2xl font-bold mb-2">
                                    {"I'm a Developer"}
                                </h3>
                                <p className="text-[#9DAEC2] mb-6">
                                    {"Find jobs and manage applications."}
                                </p>
                            </div>

                            {/* Tarjeta Employer */}
                            <div
                                onClick={() => setRole("employer")}
                                className={`group p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                                    role === "employer"
                                        ? "border-blue-500 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                                        : "border-[#121721] bg-[#121721] hover:border-gray-700"
                                }`}
                            >
                                <div
                                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                                        role === "employer"
                                            ? "bg-blue-500 text-white"
                                            : "bg-[#19202D] text-[#9DAEC2]"
                                    }`}
                                >
                                    <Briefcase size={32} />
                                </div>
                                <h3 className="text-white text-2xl font-bold mb-2">
                                    {"I'm an Employer"}
                                </h3>
                                <p className="text-[#9DAEC2] mb-6">
                                    {"Post jobs and find top talent."}
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <button
                                onClick={() => setStep(2)}
                                disabled={!role}
                                className={`px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform ${
                                    role
                                        ? "bg-cyan-700 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:scale-105 border-b-4 border-blue-700"
                                        : "bg-[#19202D] text-gray-600 cursor-not-allowed border-b-4 border-[#0B111D]"
                                }`}
                            >
                                {role
                                    ? `Continue as ${role}`
                                    : "Select an option"}
                            </button>
                        </div>
                    </section>
                ) : (
                    /* --- VISTA 2: EL FORMULARIO --- */
                    <section className="max-w-md mx-auto animate-in fade-in zoom-in-95 duration-500">
                        <button
                            onClick={handleBack}
                            className="flex items-center gap-2 text-[#9DAEC2] hover:text-white mb-8 transition-colors group"
                        >
                            <ChevronLeft
                                size={20}
                                className="group-hover:-translate-x-1 transition-transform"
                            />
                            {"Go back"}
                        </button>

                        <h2 className="text-3xl font-bold text-white mb-2">
                            {role === "developer"
                                ? "Dev Account"
                                : "Company Account"}
                        </h2>
                        <p className="text-[#9DAEC2] mb-8">
                            {"Fill in the details to create your profile."}
                        </p>

                        <form className="space-y-5">
                            {role === "employer" && (
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-white ml-1">
                                        Company Name
                                    </label>
                                    <div className="relative">
                                        <Building2
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                                            size={20}
                                        />
                                        <input
                                            type="text"
                                            className="w-full bg-[#121721] border border-[#2D333F] p-4 pl-12 rounded-xl text-white outline-none focus:border-blue-500 transition-all"
                                            placeholder="Acme Inc."
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white ml-1">
                                    Email
                                </label>
                                <div className="relative">
                                    <Mail
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                                        size={20}
                                    />
                                    <input
                                        type="email"
                                        className="w-full bg-[#121721] border border-[#2D333F] p-4 pl-12 rounded-xl text-white outline-none focus:border-blue-500 transition-all"
                                        placeholder="dev@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white ml-1">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                                        size={20}
                                    />
                                    <input
                                        type="password"
                                        className="w-full bg-[#121721] border border-[#2D333F] p-4 pl-12 rounded-xl text-white outline-none focus:border-blue-500 transition-all"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            <button className="w-full bg-blue-500 text-white font-bold py-4 rounded-xl mt-4 shadow-lg shadow-blue-500/20 hover:bg-blue-400 transition-all">
                                {"Sign Up"}
                            </button>
                        </form>
                    </section>
                )}
            </div>
        </main>
    );
}
