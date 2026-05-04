"use client";
import { Search, MapPin } from "lucide-react";

interface SearchBarProps {
    setSearchTerm: (val: string) => void;
    setLocationFilter: (val: string) => void;
    setIsFullTimeOnly: (val: boolean) => void;
    contractTypes?: string[];
    contractFilter?: string;
    setContractFilter?: (val: string) => void;
}

export default function SearchBar({
    setSearchTerm,
    setLocationFilter,
    setIsFullTimeOnly,
}: SearchBarProps) {
    return (
        <div className="relative -mt-10 max-w-7xl mx-auto px-6">
            <div className="bg-white dark:bg-[#121721] rounded-xl p-4 flex flex-col md:flex-row items-center gap-4 border border-[#E2E8F0] dark:border-[#2D333F] shadow-2xl">
                {/* 1. Filtro por Texto (Cargo o Empresa) */}
                <div className="flex-1 flex items-center gap-3 w-full group">
                    <Search
                        className="text-[#5964E0] dark:text-[#5964E0] group-focus-within:scale-110 transition-transform"
                        size={24}
                    />
                    <input
                        type="text"
                        placeholder="Filter by title, companies..."
                        className="bg-transparent w-full text-[#19202D] dark:text-[#BAC9DA] outline-none placeholder:text-[#94A3B8]"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* 2. Filtro por Ubicación */}
                <div className="flex-1 flex items-center gap-3 w-full md:border-l border-[#E2E8F0] dark:border-[#2D333F] md:pl-4 group">
                    <MapPin
                        className="text-[#5964E0] dark:text-[#5964E0] group-focus-within:scale-110 transition-transform"
                        size={24}
                    />
                    <input
                        type="text"
                        placeholder="Filter by location..."
                        className="bg-transparent w-full text-[#19202D] dark:text-[#BAC9DA] outline-none placeholder:text-[#94A3B8]"
                        onChange={(e) => setLocationFilter(e.target.value)}
                    />
                </div>

                {/* 3. Full Time Checkbox & Botón */}
                <div className="flex items-center justify-between w-full md:w-auto gap-4 md:border-l border-[#E2E8F0] dark:border-[#2D333F] md:pl-4">
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                            type="checkbox"
                            className="w-5 h-5 rounded border-[#E2E8F0] dark:border-[#2D333F] bg-white dark:bg-[#19202D] accent-[#5964E0] cursor-pointer"
                            onChange={(e) =>
                                setIsFullTimeOnly(e.target.checked)
                            }
                        />
                        <span className="text-[#19202D] dark:text-[#BAC9DA] font-bold text-sm min-w-max">
                            Full Time
                        </span>
                    </label>

                    <button className="bg-[#5964E0] hover:bg-[#4A52D6] text-white px-8 py-3 rounded-lg font-bold hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-[#5964E0]/20">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}
