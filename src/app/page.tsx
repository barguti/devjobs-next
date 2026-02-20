import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";
import { JOBS } from "../lib/placeholder-data";

export default function Home() {
    return (
        <>
            {/* 1. La barra de búsqueda flotante */}
            <SearchBar />

            {/* 2. El contenedor */}
            <section className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {JOBS.map((job) => (
                    <JobCard
                        key={job.id}
                        {...job} // Esto pasa todas las propiedades del objeto 'job' automáticamente
                    />
                ))}
            </section>

            {/* 3. Botón "Load More" */}
            <div className="flex justify-center mt-14 mb-14">
                <button className="bg-brand-blue hover:bg-brand-lightBlue text-white font-bold py-3 px-8 rounded-md transition-all">
                    Load More
                </button>
            </div>
        </>
    );
}
