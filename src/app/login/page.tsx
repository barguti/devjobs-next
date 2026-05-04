"use client";
import { useState } from "react";
import { Mail, Lock, ArrowRight, Github, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

function sanitizeInput(input: string): string {
    return input
        .replace(/[<>]/g, "")
        .replace(/['";&]/g, "")
        .trim();
}

function validateEmail(email: string): { valid: boolean; error: string } {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        return { valid: false, error: "Email is required" };
    }
    if (!emailRegex.test(email)) {
        return { valid: false, error: "Please enter a valid email address" };
    }
    if (email.length > 254) {
        return { valid: false, error: "Email is too long" };
    }
    return { valid: true, error: "" };
}

function validatePassword(password: string): { valid: boolean; error: string } {
    if (!password) {
        return { valid: false, error: "Password is required" };
    }
    if (password.length < 8) {
        return { valid: false, error: "Password must be at least 8 characters" };
    }
    if (password.length > 128) {
        return { valid: false, error: "Password is too long" };
    }
    return { valid: true, error: "" };
}

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [touched, setTouched] = useState({ email: false, password: false });

    const sanitizedEmail = sanitizeInput(email);
    const sanitizedPassword = sanitizeInput(password);

    const emailValidation = validateEmail(sanitizedEmail);
    const passwordValidation = validatePassword(sanitizedPassword);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setTouched({ email: true, password: true });

        if (!emailValidation.valid) {
            setError(emailValidation.error);
            return;
        }
        if (!passwordValidation.valid) {
            setError(passwordValidation.error);
            return;
        }

        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        window.location.href = "/";
    };

    const showEmailError = touched.email && !emailValidation.valid;
    const showPasswordError = touched.password && !passwordValidation.valid;

    return (
        <main className="min-h-screen bg-[#F4F6F8] dark:bg-[#0B111D] flex items-center justify-center p-6">
            <div className="max-w-md w-full animate-in fade-in zoom-in-95 duration-500">
                <header className="text-center mb-10">
                    <h1 className="text-[#19202D] dark:text-white text-4xl font-bold mb-2">
                        {"Welcome Back"}
                    </h1>
                    <p className="text-[#6E8098] dark:text-[#9DAEC2]">
                        {"Log in to your DevJobs account"}
                    </p>
                </header>

                <div className="bg-white dark:bg-[#121721] p-8 rounded-2xl border border-[#E2E8F0] dark:border-[#2D333F] shadow-lg dark:shadow-xl">
                    <form onSubmit={handleLogin} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#19202D] dark:text-white ml-1">
                                Email
                            </label>
                            <div className="relative">
                                <Mail
                                    className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                                        showEmailError ? "text-red-500" : "text-[#6E8098]"
                                    }`}
                                    size={20}
                                />
                                <input
                                    required
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onBlur={() => setTouched({ ...touched, email: true })}
                                    className={`w-full bg-[#F4F6F8] dark:bg-[#0B111D] border p-4 pl-12 rounded-xl text-[#19202D] dark:text-white outline-none transition-all ${
                                        showEmailError
                                            ? "border-red-500 focus:border-red-500"
                                            : "border-[#E2E8F0] dark:border-[#2D333F] focus:border-[#5964E0]"
                                    }`}
                                    placeholder="your@email.com"
                                    autoComplete="email"
                                />
                            </div>
                            {showEmailError && (
                                <p className="text-red-500 text-xs ml-1">{emailValidation.error}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-sm font-bold text-[#19202D] dark:text-white">
                                    Password
                                </label>
                                <Link
                                    href="/forgot-password"
                                    className="text-xs text-[#5964E0] hover:underline"
                                >
                                    {"Forgot password?"}
                                </Link>
                            </div>
                            <div className="relative">
                                <Lock
                                    className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                                        showPasswordError ? "text-red-500" : "text-[#6E8098]"
                                    }`}
                                    size={20}
                                />
                                <input
                                    required
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onBlur={() => setTouched({ ...touched, password: true })}
                                    className={`w-full bg-[#F4F6F8] dark:bg-[#0B111D] border p-4 pl-12 pr-12 rounded-xl text-[#19202D] dark:text-white outline-none transition-all ${
                                        showPasswordError
                                            ? "border-red-500 focus:border-red-500"
                                            : "border-[#E2E8F0] dark:border-[#2D333F] focus:border-[#5964E0]"
                                    }`}
                                    placeholder="••••••••"
                                    autoComplete="current-password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6E8098] hover:text-[#19202D] dark:hover:text-white transition-colors"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                            {showPasswordError && (
                                <p className="text-red-500 text-xs ml-1">{passwordValidation.error}</p>
                            )}
                        </div>

                        {error && (
                            <p className="text-red-500 text-sm font-medium">{error}</p>
                        )}

                        <button
                            disabled={isLoading}
                            className="w-full bg-[#5964E0] hover:bg-[#4A52D6] text-white font-bold py-4 rounded-xl mt-2 shadow-lg shadow-[#5964E0]/20 hover:shadow-[#5964E0]/30 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    {"Sign In"} <ArrowRight size={18} />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-[#E2E8F0] dark:border-[#2D333F]"></span>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white dark:bg-[#121721] px-2 text-[#6E8098] dark:text-[#9DAEC2]">
                                {"Or continue with"}
                            </span>
                        </div>
                    </div>

                    <button className="w-full bg-[#19202D] dark:bg-white text-white dark:text-[#19202D] font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:brightness-110 transition-all">
                        <Github size={20} />
                        {"Login with GitHub"}
                    </button>
                </div>

                <p className="mt-8 text-center text-[#6E8098] dark:text-[#9DAEC2]">
                    {"Don't have an account?"}
                    <Link
                        href="/register"
                        className="text-[#5964E0] font-bold hover:underline ml-1"
                    >
                        {"Sign up free"}
                    </Link>
                </p>
            </div>
        </main>
    );
}