import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
            {/* El número 404 con estilo de código */}
            <h2 className="text-9xl font-mono font-bold text-brand-blue opacity-50">
                {`{ 404 }`}
            </h2>

            <div className="mt-8 space-y-4">
                <h3 className="text-3xl font-bold text-white italic">
                    Unexpected Runtime Error
                </h3>
                <p className="text-[#9DAEC2] max-w-md mx-auto">
                    The requested component was pushed to production prematurely
                    or has been deprecated. Let’s get you back to a stable
                    build.
                </p>
            </div>

            {/* Inputs decorativos simulando terminal */}
            <div className="mt-10 w-full max-w-md bg-[#121721] p-1 rounded-lg border border-[#2D333F]">
                <div className="flex items-center gap-3 px-4 py-3 text-[#9DAEC2] font-mono text-sm">
                    <span>$</span>
                    <span className="text-white">
                        grep software engineer jobs...
                    </span>
                </div>
            </div>

            <div className="mt-8 flex gap-4">
                <Link
                    href="/"
                    className="bg-brand-blue text-white font-bold py-3 px-8 rounded-md hover:bg-brand-lightBlue transition-all flex items-center gap-2"
                >
                    <span>💻</span> git checkout home
                </Link>
                <button className="bg-[#121721] text-white border border-[#2D333F] font-bold py-3 px-8 rounded-md hover:bg-[#19202D] transition-all">
                    View Open Roles
                </button>
            </div>
        </div>
    );
}
