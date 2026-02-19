// 1. Definimos la "forma" de los datos (Interface)
interface JobProps {
    logo: string;
    logoBg: string;
    postedAt: string;
    contractType: string;
    position: string;
    company: string;
    location: string;
}

export default function JobCard({
    logo,
    logoBg,
    postedAt,
    contractType,
    position,
    company,
    location,
}: JobProps) {
    return (
        // 2. EL CONTENEDOR: Usamos 'relative' para que el logo sepa dónde flotar
        <div className="bg-[#121721] p-8 rounded-lg relative mt-8">
            {/* 3. EL LOGO FLOTANTE: 'absolute' lo saca del flujo y lo mueve arriba */}
            <div
                style={{ backgroundColor: logoBg }}
                className="w-12 h-12 rounded-2xl flex items-center justify-center absolute -top-6 left-8"
            >
                <img
                    src={logo}
                    alt={company}
                    className="w-6 h-6 object-contain"
                />
            </div>

            {/* 4. INFORMACIÓN: Usamos clases de Tailwind para el diseño Dark */}
            <div className="flex gap-2 text-[#9DAEC2] text-sm mb-3">
                <span>{postedAt}</span>
                <span>•</span>
                <span>{contractType}</span>
            </div>

            <h3 className="text-white text-xl font-bold mb-2 hover:text-[#9DAEC2] cursor-pointer transition-colors">
                {position}
            </h3>

            <p className="text-[#9DAEC2] mb-6">{company}</p>

            <span className="text-brand-blue font-bold text-sm">
                {location}
            </span>
        </div>
    );
}
