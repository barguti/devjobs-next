import Link from "next/link";

// 1. Definimos la "forma" de los datos (Interface)
interface JobProps {
    job: {
        id: string;
        logo: string;
        logoBg: string;
        postedAt: string;
        contractType: string;
        position: string;
        company: string;
        location: string;
    }
}

export default function JobCard({ job }: JobProps) { // Recibimos el objeto 'job'
    return (
        // 2. EL CONTENEDOR: Usamos 'relative' para que el logo sepa dónde flotar
        <div className="bg-white dark:bg-[#121721] p-8 rounded-lg relative mt-8 shadow-sm dark:shadow-none transition-colors duration-300 flex flex-col h-full">
            {/* 3. EL LOGO FLOTANTE: 'absolute' lo saca del flujo y lo mueve arriba */}
            <div
                style={{ backgroundColor: job.logoBg }}
                className="w-12 h-12 rounded-2xl flex items-center justify-center absolute -top-6 left-8"
            >
                <img
                    src={job.logo}
                    alt={job.company}
                    className="w-6 h-6 object-contain"
                />
            </div>

            {/* 4. INFORMACIÓN: Usamos clases de Tailwind para el diseño Dark */}
            <div className="flex gap-2 text-[#6E8098] dark:text-[#9DAEC2] text-sm mb-3">
                <span>{job.postedAt}</span>
                <span>•</span>
                <span>{job.contractType}</span>
            </div>

            <Link href={`/jobs/${job.id}`}>
                <h3 className="text-[#19202D] dark:text-white text-xl font-bold mb-2 hover:text-[#6E8098] dark:hover:text-[#9DAEC2] cursor-pointer transition-colors">
                    {job.position}
                </h3>
            </Link>

            <p className="text-[#6E8098] dark:text-[#9DAEC2] mb-10">{job.company}</p>

            <span className="text-[#5964E0] font-bold text-sm mt-auto">
                {job.location}
            </span>
        </div>
    );
}
