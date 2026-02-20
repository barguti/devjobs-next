import { JOBS } from "@/src/lib/placeholder-data"; // Quitamos el /src/ del alias
import { notFound } from "next/navigation";

export default async function JobDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    // 1. Esperamos los parámetros
    const { id } = await params;
    
    // 2. BUSQUEDA ROBUSTA
    // Usamos lowercase y trim para evitar errores de tipeo invisibles
    const job = JOBS.find((j) => j.id.toLowerCase().trim() === id.toLowerCase().trim());

    if (!job) {
        notFound();
    }

    return (
        <article className="max-w-3xl mx-auto -mt-10 relative z-20 px-4">
            <header className="bg-[#121721] rounded-lg p-8 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">
                <div
                    style={{ backgroundColor: job.logoBg }}
                    className="w-20 h-20 md:w-32 md:h-32 rounded-3xl flex items-center justify-center md:absolute md:-left-10"
                >
                    <img src={job.logo} alt={job.company} className="w-12 md:w-16" />
                </div>

                <div className="flex-1 md:ml-24 text-center md:text-left">
                    <h2 className="text-white text-2xl font-bold">{job.company}</h2>
                    <p className="text-[#9DAEC2]">{job.company.toLowerCase()}.com</p>
                </div>

                <button className="bg-[#5964E0]/10 text-brand-blue font-bold py-3 px-6 rounded-md hover:bg-brand-blue/20 transition-all">
                    Company Site
                </button>
            </header>

            <div className="bg-[#121721] mt-8 p-8 md:p-12 rounded-lg text-white">
                <p className="text-[#9DAEC2]">{job.postedAt} • {job.contractType}</p>
                <h1 className="text-3xl font-bold mt-2">{job.position}</h1>
                <p className="text-brand-blue font-bold mt-2">{job.location}</p>
                
                <div className="mt-10 text-[#9DAEC2] leading-relaxed">
                    {/* Placeholder para la descripción */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aliquam at porttitor sem. Aliquam erat volutpat.
                </div>
            </div>
        </article>
    );
}