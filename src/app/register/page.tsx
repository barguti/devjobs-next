'use client';
import { useState } from 'react';
import { 
    User, 
    Briefcase, 
    ArrowRight, 
    ChevronLeft, 
    Mail, 
    Lock, 
    Building2,
    CheckCircle2 
} from 'lucide-react';
import Link from 'next/link';

export default function RegisterPage() {
    // 1. ESTADOS
    const [role, setRole] = useState<'developer' | 'employer' | null>(null);
    const [step, setStep] = useState<1 | 2>(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // 2. FUNCIONES
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        
        // Simulamos la espera de la base de datos (2 segundos de suspenso)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setIsLoading(false);
        setIsSuccess(true);
    };

    const handleBack = () => {
        setStep(1);
        setIsSuccess(false);
    };

    return (
        <main className="min-h-screen bg-[#0B111D] flex items-center justify-center p-6 selection:bg-blue-500/30">
            <div className="max-w-4xl w-full">
                
                {/* --- PASO 1: SELECCIÓN DE ROL --- */}
                {step === 1 && (
                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <header className="text-center mb-12">
                            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
                                Join <span className="text-blue-500">DevJobs</span>
                            </h1>
                            <p className="text-[#9DAEC2] text-lg">
                                {"Choose how you want to use the platform to get started."}
                            </p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Card Developer */}
                            <div 
                                onClick={() => setRole('developer')}
                                className={`group p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                                    role === 'developer' 
                                    ? 'border-blue-500 bg-blue-500/5 shadow-[0_0_20px_rgba(59,130,246,0.1)]' 
                                    : 'border-[#121721] bg-[#121721] hover:border-gray-700'
                                }`}
                            >
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                                    role === 'developer' ? 'bg-blue-500 text-white' : 'bg-[#19202D] text-[#9DAEC2]'
                                }`}>
                                    <User size={32} />
                                </div>
                                <h3 className="text-white text-2xl font-bold mb-2">{"I'm a Developer"}</h3>
                                <p className="text-[#9DAEC2]">{"Find jobs and manage applications."}</p>
                            </div>

                            {/* Card Employer */}
                            <div 
                                onClick={() => setRole('employer')}
                                className={`group p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                                    role === 'employer' 
                                    ? 'border-blue-500 bg-blue-500/5 shadow-[0_0_20px_rgba(59,130,246,0.1)]' 
                                    : 'border-[#121721] bg-[#121721] hover:border-gray-700'
                                }`}
                            >
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                                    role === 'employer' ? 'bg-blue-500 text-white' : 'bg-[#19202D] text-[#9DAEC2]'
                                }`}>
                                    <Briefcase size={32} />
                                </div>
                                <h3 className="text-white text-2xl font-bold mb-2">{"I'm an Employer"}</h3>
                                <p className="text-[#9DAEC2]">{"Post jobs and find top talent."}</p>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <button 
                                onClick={() => setStep(2)}
                                disabled={!role}
                                className={`px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform ${
                                    role 
                                    ? 'bg-cyan-700 text-white shadow-[0_10px_20px_rgba(59,130,246,0.3)] hover:scale-105 active:scale-95 border-b-4 border-blue-700' 
                                    : 'bg-[#19202D] text-gray-600 cursor-not-allowed border-b-4 border-[#0B111D]'
                                }`}
                            >
                                {role ? `Continue as ${role === 'developer' ? 'Dev' : 'Company'}` : "Select an option"}
                            </button>
                            <p className="mt-6 text-[#9DAEC2]">
                                {"Already have an account?"} <Link href="/login" className="text-blue-500 hover:underline ml-1">{"Log in"}</Link>
                            </p>
                        </div>
                    </section>
                )}

                {/* --- PASO 2: FORMULARIO O ÉXITO --- */}
                {step === 2 && (
                    <div className="max-w-md mx-auto">
                        {!isSuccess ? (
                            <section className="animate-in fade-in zoom-in-95 duration-500">
                                <button 
                                    onClick={handleBack}
                                    className="flex items-center gap-2 text-[#9DAEC2] hover:text-white mb-8 transition-colors group"
                                >
                                    <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                                    {"Go back"}
                                </button>

                                <h2 className="text-3xl font-bold text-white mb-2">
                                    {role === 'developer' ? "Dev Account" : "Company Account"}
                                </h2>
                                <p className="text-[#9DAEC2] mb-8">{"Please fill in your details."}</p>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {role === 'employer' && (
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-white ml-1">Company Name</label>
                                            <div className="relative">
                                                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                                                <input required type="text" className="w-full bg-[#121721] border border-[#2D333F] p-4 pl-12 rounded-xl text-white outline-none focus:border-blue-500 transition-all" placeholder="Acme Corp" />
                                            </div>
                                        </div>
                                    )}
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-white ml-1">Email Address</label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                                            <input required type="email" className="w-full bg-[#121721] border border-[#2D333F] p-4 pl-12 rounded-xl text-white outline-none focus:border-blue-500 transition-all" placeholder="name@domain.com" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-white ml-1">Password</label>
                                        <div className="relative">
                                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                                            <input required type="password" className="w-full bg-[#121721] border border-[#2D333F] p-4 pl-12 rounded-xl text-white outline-none focus:border-blue-500 transition-all" placeholder="••••••••" />
                                        </div>
                                    </div>

                                    <button 
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-blue-500 text-white font-bold py-4 rounded-xl mt-4 shadow-lg shadow-blue-500/20 hover:bg-blue-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                    >
                                        {isLoading ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                {"Creating account..."}
                                            </>
                                        ) : (
                                            "Sign Up"
                                        )}
                                    </button>
                                </form>
                            </section>
                        ) : (
                            /* --- VISTA DE ÉXITO --- */
                            <section className="text-center animate-in fade-in zoom-in-95 duration-500">
                                <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 size={48} />
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-4">{"¡Welcome aboard!"}</h2>
                                <p className="text-[#9DAEC2] mb-8">
                                    {role === 'developer' 
                                        ? "Your dev profile is ready. Let's find some cool projects!" 
                                        : "Your company is now part of DevJobs. Start posting today!"}
                                </p>
                                <Link 
                                    href="/" 
                                    className="inline-block bg-blue-500 text-white font-bold px-10 py-4 rounded-xl hover:bg-blue-400 transition-all shadow-xl shadow-blue-500/20 active:scale-95"
                                >
                                    {"Go to Dashboard"}
                                </Link>
                            </section>
                        )}
                    </div>
                )}

            </div>
        </main>
    );
}