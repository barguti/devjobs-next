"use client";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";
import { JOBS } from "../lib/placeholder-data";

export default function HomePage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [locationFilter, setLocationFilter] = useState("");
    const [isFullTimeOnly, setIsFullTimeOnly] = useState(false);

    // Lógica de filtrado combinada 🧠
    const filteredJobs = JOBS.filter((job) => {
        // 1. Buscamos en el título o la empresa (case insensitive)
        const matchesSearch =
            job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.company.toLowerCase().includes(searchTerm.toLowerCase());

        // 2. Buscamos en la localización
        const matchesLocation = job.location
            .toLowerCase()
            .includes(locationFilter.toLowerCase());

        // 3. Si el checkbox está marcado, solo mostramos Full Time
        const matchesType = isFullTimeOnly
            ? job.contractType === "Full Time"
            : true;

        return matchesSearch && matchesLocation && matchesType;
    });

    return (
        <main className="min-h-screen bg-[#0B111D] pb-20 pt-20 rounded-lg">
            <SearchBar
                setSearchTerm={setSearchTerm}
                setLocationFilter={setLocationFilter}
                setIsFullTimeOnly={setIsFullTimeOnly}
            />

            <section className="max-w-7xl mx-auto px-6 mt-16">
                {filteredJobs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {filteredJobs.map((job) => (
                            <JobCard key={job.id} job={job} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <span className="text-6xl mb-4">🕵️‍♂️</span>
                        <h2 className="text-white text-2xl font-bold">
                            No jobs found
                        </h2>
                        <p className="text-[#9DAEC2] mt-2"> {"Try adjusting your filters to find what you're looking for."} </p>
                    </div>
                )}
            </section>
        </main>
    );
}
