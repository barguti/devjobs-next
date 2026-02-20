// src/components/Navbar.tsx
export default function Navbar() {
    return (
        <nav className="bg-brand-blue h-40 rounded-bl-[80px] pt-12 px-8">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <span className="text-3xl font-bold lowercase tracking-tighter">
                    devjobs
                </span>
                <div className="flex items-center gap-4">
                    {/* El switch de sol/luna que vi en tu foto */}
                    <span>☀️</span>
                    <div className="w-12 h-6 bg-white rounded-full"></div>
                    <span>🌙</span>
                </div>
            </div>
        </nav>
    );
}
