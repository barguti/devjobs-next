"use client"; // React 19: Necesario porque usaremos interactividad (formularios/estados)

export default function SearchBar() {
    return (
        <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-10">
            <form className="bg-[#121721] rounded-lg h-20 flex items-center divide-x divide-[#2D333F] overflow-hidden">
                {/* 1. Búsqueda por cargo */}
                <div className="flex-1 flex items-center px-6 gap-4">
                    <span className="text-brand-blue text-xl">🔍</span>
                    <input
                        type="text"
                        placeholder="Filter by title, companies..."
                        className="bg-transparent border-none outline-none text-white w-full placeholder:text-[#9DAEC2]"
                    />
                </div>

                {/* 2. Búsqueda por ubicación (Oculto en móvil) */}
                <div className="hidden md:flex flex-1 items-center px-6 gap-4">
                    <span className="text-brand-blue text-xl">📍</span>
                    <input
                        type="text"
                        placeholder="Filter by location..."
                        className="bg-transparent border-none outline-none text-white w-full placeholder:text-[#9DAEC2]"
                    />
                </div>

                {/* 3. Checkbox y Botón */}
                <div className="flex items-center px-6 gap-4">
                    <div className="hidden lg:flex items-center gap-3">
                        <input
                            type="checkbox"
                            className="w-5 h-5 accent-brand-blue"
                        />
                        <span className="text-white font-bold whitespace-nowrap">
                            Full Time Only
                        </span>
                    </div>
                    <button className="bg-brand-blue hover:bg-brand-lightBlue text-white font-bold py-3 px-8 rounded-md transition-colors">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}
