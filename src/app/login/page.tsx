'use client';
import { useState } from 'react';
import { Mail, Lock, ArrowRight, Github } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulamos la entrada al sistema
        await new Promise(resolve => setTimeout(resolve, 1500));
        window.location.href = '/'; // Redirigimos a la Home
    };

    return (
        <main className="min-h-screen bg-[#0B111D] flex items-center justify-center p-6">
            <div className="max-w-md w-full animate-in fade-in zoom-in-95 duration-500">
                
                <header className="text-center mb-10">
                    <h1 className="text-white text-4xl font-bold mb-2">{"Welcome Back"}</h1>
                    <p className="text-[#9DAEC2]">{"Log in to your DevJobs account"}</p>
                </header>

                <div className="bg-[#121721] p-8 rounded-2xl border border-[#2D333F] shadow-xl">
                    <form onSubmit={handleLogin} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-white ml-1">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                                <input 
                                    required 
                                    type="email" 
                                    className="w-full bg-[#0B111D] border border-[#2D333F] p-4 pl-12 rounded-xl text-white outline-none focus:border-blue-500 transition-all" 
                                    placeholder="your@email.com" 
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-sm font-bold text-white">Password</label>
                                <a href="#" className="text-xs text-blue-500 hover:underline">{"Forgot password?"}</a>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                                <input 
                                    required 
                                    type="password" 
                                    className="w-full bg-[#0B111D] border border-[#2D333F] p-4 pl-12 rounded-xl text-white outline-none focus:border-blue-500 transition-all" 
                                    placeholder="••••••••" 
                                />
                            </div>
                        </div>

                        <button 
                            disabled={isLoading}
                            className="w-full bg-blue-500 text-white font-bold py-4 rounded-xl mt-2 shadow-lg shadow-blue-500/20 hover:bg-blue-400 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>{"Sign In"} <ArrowRight size={18} /></>
                            )}
                        </button>
                    </form>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-[#2D333F]"></span>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-[#121721] px-2 text-[#9DAEC2]">{"Or continue with"}</span>
                        </div>
                    </div>

                    <button className="w-full bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-200 transition-all">
                        <Github size={20} />
                        {"Login with GitHub"}
                    </button>
                </div>

                <p className="mt-8 text-center text-[#9DAEC2]">
                    {"Don't have an account?"} 
                    <Link href="/register" className="text-blue-500 font-bold hover:underline ml-1">{"Sign up free"}</Link>
                </p>
            </div>
        </main>
    );
}