'use client';
import { useState } from 'react';
import { Mail, ArrowLeft, Send, CheckCircle2, Lock } from 'lucide-react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
    // 1. Estado para el valor del email
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);

    // 2. Función para manejar el envío
    const handleReset = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return; // Seguridad extra

        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
        setIsSent(true);
    };

    // 3. Variable booleana para habilitar el botón
    // Podríamos ser más estrictos con un regex, pero por ahora, que tenga algo escrito basta
    const isButtonDisabled = email.trim().length === 0 || isLoading;

    return (
        <main className="min-h-screen bg-[#0B111D] flex items-center justify-center p-6">
            <div className="max-w-md w-full animate-in fade-in zoom-in-95 duration-500">
                
                <Link 
                    href="/login" 
                    className="flex items-center gap-2 text-[#9DAEC2] hover:text-white mb-8 transition-colors group w-fit"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    {"Back to Login"}
                </Link>

                <div className="bg-[#121721] p-8 rounded-2xl border border-[#2D333F] shadow-xl text-center">
                    {!isSent ? (
                        <section className="animate-in fade-in duration-500">
                            <div className="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Lock size={30} className="opacity-80" />
                            </div>
                            
                            <h1 className="text-white text-3xl font-bold mb-3">{"Forgot password?"}</h1>
                            <p className="text-[#9DAEC2] mb-8">
                                {"No worries! Enter your email and we'll send you reset instructions."}
                            </p>

                            <form onSubmit={handleReset} className="space-y-5 text-left">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-white ml-1">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                                        <input 
                                            required 
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} // <--- Capturamos el texto
                                            className="w-full bg-[#0B111D] border border-[#2D333F] p-4 pl-12 rounded-xl text-white outline-none focus:border-blue-500 transition-all placeholder:text-gray-700" 
                                            placeholder="your@email.com" 
                                        />
                                    </div>
                                </div>

                                <button 
                                    disabled={isButtonDisabled} // <--- Aquí ocurre la magia
                                    className={`w-full font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 ${
                                        isButtonDisabled 
                                        ? 'bg-[#19202D] text-gray-600 cursor-not-allowed border-b-4 border-[#0B111D]' 
                                        : 'bg-blue-500 text-white shadow-blue-500/20 hover:bg-blue-400 border-b-4 border-blue-700 active:translate-y-1 active:border-b-0'
                                    }`}
                                >
                                    {isLoading ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>{"Send Reset Link"} <Send size={18} /></>
                                    )}
                                </button>
                            </form>
                        </section>
                    ) : (
                        <section className="animate-in zoom-in-95 duration-500">
                            <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 size={32} />
                            </div>
                            <h2 className="text-white text-3xl font-bold mb-3">{"Check your email"}</h2>
                            <p className="text-[#9DAEC2] mb-8">
                                {"We've sent a password reset link to your email address."}
                            </p>
                            
                            <button 
                                onClick={() => {
                                    setIsSent(false);
                                    setEmail(''); // Limpiamos para que empiece de cero si reintenta
                                }}
                                className="text-blue-500 font-bold hover:underline"
                            >
                                {"Didn't receive the email? Try again"}
                            </button>
                        </section>
                    )}
                </div>
            </div>
        </main>
    );
}