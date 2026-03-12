"use client";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";
import { JOBS } from "../lib/placeholder-data";
import { Loader2 } from "lucide-react";

export default function HomePage() {
    const JOBS_PER_PAGE = 6; // Cantidad inicial (2 filas de 3)
    
    const [searchTerm, setSearchTerm] = useState('');
    const [locationFilter, setLocationFilter] = useState('');
    const [isFullTimeOnly, setIsFullTimeOnly] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    
    // 1. Estado para controlar cuántos trabajos mostramos
    const [visibleCount, setVisibleCount] = useState(JOBS_PER_PAGE);

    const filteredJobs = JOBS.filter((job) => {
        // ... tu lógica de filtrado que ya funciona ...
        const matchesSearch = job.position.toLowerCase().includes(searchTerm.toLowerCase()) || 
            job.company.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesLocation = job.location.toLowerCase().includes(locationFilter.toLowerCase());
        const matchesType = isFullTimeOnly ? job.contractType === 'Full Time' : true;

        return matchesSearch && matchesLocation && matchesType;
    });

    // 2. Cortamos el array filtrado para mostrar solo los "visibles"
    const jobsToShow = filteredJobs.slice(0, visibleCount);

    // 3. Función para cargar más
    const handleLoadMore = async () => {
        setIsLoading(true);
        
        // Simulamos una pequeña carga de 800ms para que se luzca el spinner
        // ESi fuera en producción, podrías estar llamando a una API
        await new Promise(resolve => setTimeout(resolve, 800));
        
        setVisibleCount(prev => prev + JOBS_PER_PAGE);
        setIsLoading(false);
    };

    return (
        <main className="min-h-screen bg-[#0B111D] pb-20 pt-20 rounded-lg">
            <SearchBar 
                setSearchTerm={setSearchTerm} 
                setLocationFilter={setLocationFilter} 
                setIsFullTimeOnly={setIsFullTimeOnly} 
            />

            <section className="max-w-7xl mx-auto px-6 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {jobsToShow.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>

                {/* 4. Botón Condicional: Solo aparece si hay más para mostrar */}
                {visibleCount < filteredJobs.length && (
                    <div className="flex justify-center mt-14">
                        <button 
                            onClick={handleLoadMore}
                            disabled={isLoading}
                            className={`
                                relative flex items-center justify-center gap-3
                                bg-[#135BEC] hover:bg-[#5964E0] 
                                text-white px-8 py-3 rounded-md font-bold 
                                transition-all duration-300 ease-in-out
                                active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed
                                cursor-pointer
                            `}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} />
                                    <span>Loading...</span>
                                </>
                            ) : (
                                "Load More"
                            )}
                        </button>
                    </div>
                )}
            </section>
        </main>
    );
}