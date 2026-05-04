"use client";
import { useState, useMemo } from "react";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";
import { JOBS } from "../lib/placeholder-data";
import { Loader2, Filter } from "lucide-react";

export default function HomePage() {
    const JOBS_PER_PAGE = 6;
    
    const [searchTerm, setSearchTerm] = useState('');
    const [locationFilter, setLocationFilter] = useState('');
    const [isFullTimeOnly, setIsFullTimeOnly] = useState(false);
    const [contractFilter, setContractFilter] = useState('all');

    const [isLoading, setIsLoading] = useState(false);
    const [visibleCount, setVisibleCount] = useState(JOBS_PER_PAGE);

    const contractTypes = useMemo(() => {
        const types = new Set(JOBS.map(job => job.contractType));
        return ['all', ...Array.from(types)];
    }, []);

    const filteredJobs = useMemo(() => {
        return JOBS.filter((job) => {
            const matchesSearch = job.position.toLowerCase().includes(searchTerm.toLowerCase()) || 
                job.company.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesLocation = job.location.toLowerCase().includes(locationFilter.toLowerCase());
            const matchesType = isFullTimeOnly ? job.contractType === 'Full Time' : true;
            const matchesContract = contractFilter === 'all' || job.contractType === contractFilter;

            return matchesSearch && matchesLocation && matchesType && matchesContract;
        });
    }, [searchTerm, locationFilter, isFullTimeOnly, contractFilter]);

    const jobsToShow = filteredJobs.slice(0, visibleCount);

    const handleLoadMore = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 800));
        setVisibleCount(prev => prev + JOBS_PER_PAGE);
        setIsLoading(false);
    };

    const handleSearch = (term: string, location: string, fullTime: boolean) => {
        setSearchTerm(term);
        setLocationFilter(location);
        setIsFullTimeOnly(fullTime);
        setVisibleCount(JOBS_PER_PAGE);
    };

    return (
        <main className="min-h-screen bg-[#F4F6F8] dark:bg-[#0B111D] pt-20 rounded-lg">
            <SearchBar 
                setSearchTerm={setSearchTerm} 
                setLocationFilter={setLocationFilter} 
                setIsFullTimeOnly={setIsFullTimeOnly}
                contractTypes={contractTypes}
                contractFilter={contractFilter}
                setContractFilter={setContractFilter}
            />

            <section className="max-w-7xl mx-auto px-6 pt-16 pb-16">
                <div className="flex items-center justify-between mb-8">
                    <p className="text-[#19202D] dark:text-[#BAC9DA] font-bold">
                        {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'} found
                    </p>
                    <div className="flex items-center gap-2">
                        <Filter size={16} className="text-[#6E8098] dark:text-[#9DAEC2]" />
                        <select
                            value={contractFilter}
                            onChange={(e) => {
                                setContractFilter(e.target.value);
                                setVisibleCount(JOBS_PER_PAGE);
                            }}
                            className="bg-white dark:bg-[#121721] text-[#19202D] dark:text-[#BAC9DA] border border-[#E2E8F0] dark:border-[#2D333F] rounded-lg px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#5964E0]"
                        >
                            {contractTypes.map(type => (
                                <option key={type} value={type}>
                                    {type === 'all' ? 'All Types' : type}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {jobsToShow.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>

                {filteredJobs.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-[#6E8098] dark:text-[#9DAEC2] text-xl">
                            No jobs found matching your criteria
                        </p>
                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setLocationFilter('');
                                setIsFullTimeOnly(false);
                                setContractFilter('all');
                                setVisibleCount(JOBS_PER_PAGE);
                            }}
                            className="mt-4 text-[#5964E0] hover:text-[#4A52D6] font-bold"
                        >
                            Clear filters
                        </button>
                    </div>
                )}

                {visibleCount < filteredJobs.length && filteredJobs.length > 0 && (
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