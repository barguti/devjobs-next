'use client';
import { useState } from 'react';
import { 
    User, 
    Briefcase, 
    ChevronLeft, 
    Mail, 
    Lock, 
    Building2,
    CheckCircle2,
    Eye,
    EyeOff,
    AlertCircle 
} from 'lucide-react';
import Link from 'next/link';

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
    if (!/(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)) {
        return { valid: false, error: "Password must contain letters and numbers" };
    }
    return { valid: true, error: "" };
}

function validateCompanyName(name: string): { valid: boolean; error: string } {
    if (!name) {
        return { valid: false, error: "Company name is required" };
    }
    if (name.length < 2) {
        return { valid: false, error: "Company name is too short" };
    }
    if (name.length > 100) {
        return { valid: false, error: "Company name is too long" };
    }
    return { valid: true, error: "" };
}

export default function RegisterPage() {
    const [role, setRole] = useState<'developer' | 'employer' | null>(null);
    const [step, setStep] = useState<1 | 2>(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        companyName: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    const sanitizedData = {
        companyName: sanitizeInput(formData.companyName),
        email: sanitizeInput(formData.email),
        password: sanitizeInput(formData.password)
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (touched[field]) {
            setErrors(prev => ({ ...prev, [field]: "" }));
        }
    };

    const handleBlur = (field: string) => {
        setTouched(prev => ({ ...prev, [field]: true }));
        validateField(field);
    };

    const validateField = (field: string): boolean => {
        let validation;
        const value = sanitizedData[field as keyof typeof sanitizedData];
        
        if (field === 'companyName' && role === 'employer') {
            validation = validateCompanyName(value);
        } else if (field === 'email') {
            validation = validateEmail(value);
        } else if (field === 'password') {
            validation = validatePassword(value);
        } else {
            return true;
        }

        if (!validation.valid && touched[field]) {
            setErrors(prev => ({ ...prev, [field]: validation.error }));
        }
        return validation.valid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});
        setTouched({ companyName: true, email: true, password: true });

        let isValid = true;

        if (role === 'employer') {
            const companyValidation = validateCompanyName(sanitizedData.companyName);
            if (!companyValidation.valid) {
                setErrors(prev => ({ ...prev, companyName: companyValidation.error }));
                isValid = false;
            }
        }

        const emailValidation = validateEmail(sanitizedData.email);
        if (!emailValidation.valid) {
            setErrors(prev => ({ ...prev, email: emailValidation.error }));
            isValid = false;
        }

        const passwordValidation = validatePassword(sanitizedData.password);
        if (!passwordValidation.valid) {
            setErrors(prev => ({ ...prev, password: passwordValidation.error }));
            isValid = false;
        }

        if (!isValid) return;

        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
        setIsSuccess(true);
    };

    const handleBack = () => {
        setStep(1);
        setIsSuccess(false);
        setErrors({});
        setTouched({});
    };

    return (
        <main className="min-h-screen bg-[#F4F6F8] dark:bg-[#0B111D] flex items-center justify-center p-6 selection:bg-[#5964E0]/30">
            <div className="max-w-4xl w-full">
                {step === 1 && (
                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <header className="text-center mb-12">
                            <h1 className="text-[#19202D] dark:text-white text-4xl md:text-5xl font-bold mb-4">
                                Join <span className="text-[#5964E0]">DevJobs</span>
                            </h1>
                            <p className="text-[#6E8098] dark:text-[#9DAEC2] text-lg">
                                {"Choose how you want to use the platform to get started."}
                            </p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div 
                                onClick={() => setRole('developer')}
                                className={`group p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                                    role === 'developer' 
                                    ? 'border-[#5964E0] bg-[#5964E0]/5 shadow-[0_0_20px_rgba(89,100,224,0.1)]' 
                                    : 'border-[#E2E8F0] dark:border-[#121721] bg-white dark:bg-[#121721] hover:border-[#5964E0] dark:hover:border-[#5964E0]'
                                }`}
                            >
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                                    role === 'developer' ? 'bg-[#5964E0] text-white' : 'bg-[#F4F6F8] dark:bg-[#19202D] text-[#6E8098] dark:text-[#9DAEC2]'
                                }`}>
                                    <User size={32} />
                                </div>
                                <h3 className="text-[#19202D] dark:text-white text-2xl font-bold mb-2">{"I'm a Developer"}</h3>
                                <p className="text-[#6E8098] dark:text-[#9DAEC2]">{"Find jobs and manage applications."}</p>
                            </div>

                            <div 
                                onClick={() => setRole('employer')}
                                className={`group p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                                    role === 'employer' 
                                    ? 'border-[#5964E0] bg-[#5964E0]/5 shadow-[0_0_20px_rgba(89,100,224,0.1)]' 
                                    : 'border-[#E2E8F0] dark:border-[#121721] bg-white dark:bg-[#121721] hover:border-[#5964E0] dark:hover:border-[#5964E0]'
                                }`}
                            >
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                                    role === 'employer' ? 'bg-[#5964E0] text-white' : 'bg-[#F4F6F8] dark:bg-[#19202D] text-[#6E8098] dark:text-[#9DAEC2]'
                                }`}>
                                    <Briefcase size={32} />
                                </div>
                                <h3 className="text-[#19202D] dark:text-white text-2xl font-bold mb-2">{"I'm an Employer"}</h3>
                                <p className="text-[#6E8098] dark:text-[#9DAEC2]">{"Post jobs and find top talent."}</p>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <button 
                                onClick={() => setStep(2)}
                                disabled={!role}
                                className={`px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform ${
                                    role 
                                    ? 'bg-[#5964E0] text-white shadow-[0_10px_20px_rgba(89,100,224,0.3)] hover:scale-105 active:scale-95 border-b-4 border-[#4A52D6]' 
                                    : 'bg-[#F4F6F8] dark:bg-[#19202D] text-[#6E8098] dark:text-[#6E8098] cursor-not-allowed border-b-4 border-[#E2E8F0] dark:border-[#0B111D]'
                                }`}
                            >
                                {role ? `Continue as ${role === 'developer' ? 'Dev' : 'Company'}` : "Select an option"}
                            </button>
                            <p className="mt-6 text-[#6E8098] dark:text-[#9DAEC2]">
                                {"Already have an account?"} <Link href="/login" className="text-[#5964E0] hover:underline ml-1">{"Log in"}</Link>
                            </p>
                        </div>
                    </section>
                )}

                {step === 2 && (
                    <div className="max-w-md mx-auto">
                        {!isSuccess ? (
                            <section className="animate-in fade-in zoom-in-95 duration-500">
                                <button 
                                    onClick={handleBack}
                                    className="flex items-center gap-2 text-[#6E8098] dark:text-[#9DAEC2] hover:text-[#19202D] dark:hover:text-white mb-8 transition-colors group"
                                >
                                    <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                                    {"Go back"}
                                </button>

                                <h2 className="text-3xl font-bold text-[#19202D] dark:text-white mb-2">
                                    {role === 'developer' ? "Dev Account" : "Company Account"}
                                </h2>
                                <p className="text-[#6E8098] dark:text-[#9DAEC2] mb-8">{"Please fill in your details."}</p>

                                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                                    {role === 'employer' && (
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-[#19202D] dark:text-white ml-1">Company Name</label>
                                            <div className="relative">
                                                <Building2 
                                                    className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                                                        errors.companyName ? "text-red-500" : "text-[#6E8098]"
                                                    }`} 
                                                    size={20} 
                                                />
                                                <input 
                                                    required 
                                                    type="text" 
                                                    value={formData.companyName}
                                                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                                                    onBlur={() => handleBlur('companyName')}
                                                    className={`w-full bg-white dark:bg-[#121721] border p-4 pl-12 rounded-xl text-[#19202D] dark:text-white outline-none transition-all ${
                                                        errors.companyName
                                                            ? "border-red-500 focus:border-red-500"
                                                            : "border-[#E2E8F0] dark:border-[#2D333F] focus:border-[#5964E0]"
                                                    }`} 
                                                    placeholder="Acme Corp" 
                                                />
                                            </div>
                                            {errors.companyName && (
                                                <p className="text-red-500 text-xs ml-1 flex items-center gap-1">
                                                    <AlertCircle size={12} />{errors.companyName}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[#19202D] dark:text-white ml-1">Email Address</label>
                                        <div className="relative">
                                            <Mail 
                                                className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                                                    errors.email ? "text-red-500" : "text-[#6E8098]"
                                                }`} 
                                                size={20} 
                                            />
                                            <input 
                                                required 
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => handleInputChange('email', e.target.value)}
                                                onBlur={() => handleBlur('email')}
                                                className={`w-full bg-white dark:bg-[#121721] border p-4 pl-12 rounded-xl text-[#19202D] dark:text-white outline-none transition-all ${
                                                    errors.email
                                                        ? "border-red-500 focus:border-red-500"
                                                        : "border-[#E2E8F0] dark:border-[#2D333F] focus:border-[#5964E0]"
                                                }`} 
                                                placeholder="name@domain.com" 
                                                autoComplete="email"
                                            />
                                        </div>
                                        {errors.email && (
                                            <p className="text-red-500 text-xs ml-1 flex items-center gap-1">
                                                <AlertCircle size={12} />{errors.email}
                                            </p>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[#19202D] dark:text-white ml-1">Password</label>
                                        <div className="relative">
                                            <Lock 
                                                className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                                                    errors.password ? "text-red-500" : "text-[#6E8098]"
                                                }`} 
                                                size={20} 
                                            />
                                            <input 
                                                required 
                                                type={showPassword ? "text" : "password"}
                                                value={formData.password}
                                                onChange={(e) => handleInputChange('password', e.target.value)}
                                                onBlur={() => handleBlur('password')}
                                                className={`w-full bg-white dark:bg-[#121721] border p-4 pl-12 pr-12 rounded-xl text-[#19202D] dark:text-white outline-none transition-all ${
                                                    errors.password
                                                        ? "border-red-500 focus:border-red-500"
                                                        : "border-[#E2E8F0] dark:border-[#2D333F] focus:border-[#5964E0]"
                                                }`} 
                                                placeholder="••••••••" 
                                                autoComplete="new-password"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6E8098] hover:text-[#19202D] dark:hover:text-white transition-colors"
                                            >
                                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                            </button>
                                        </div>
                                        {errors.password && (
                                            <p className="text-red-500 text-xs ml-1 flex items-center gap-1">
                                                <AlertCircle size={12} />{errors.password}
                                            </p>
                                        )}
                                    </div>

                                    <button 
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-[#5964E0] hover:bg-[#4A52D6] text-white font-bold py-4 rounded-xl mt-4 shadow-lg shadow-[#5964E0]/20 hover:shadow-[#5964E0]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
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
                            <section className="text-center animate-in fade-in zoom-in-95 duration-500">
                                <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 size={48} />
                                </div>
                                <h2 className="text-3xl font-bold text-[#19202D] dark:text-white mb-4">{"Welcome aboard!"}</h2>
                                <p className="text-[#6E8098] dark:text-[#9DAEC2] mb-8">
                                    {role === 'developer' 
                                        ? "Your dev profile is ready. Let's find some cool projects!" 
                                        : "Your company is now part of DevJobs. Start posting today!"}
                                </p>
                                <Link 
                                    href="/" 
                                    className="inline-block bg-[#5964E0] hover:bg-[#4A52D6] text-white font-bold px-10 py-4 rounded-xl hover:shadow-xl shadow-[#5964E0]/20 active:scale-95 transition-all"
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