import { JOBS } from "@/src/lib/placeholder-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Clock, Globe } from "lucide-react";

export default async function JobDetailPage({ params }: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    
    const job = JOBS.find((j) => j.id.toLowerCase().trim() === id.toLowerCase().trim());

    if (!job) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#F4F6F8] dark:bg-[#0B111D] pt-20 px-4 pb-16">
            <article className="max-w-3xl mx-auto -mt-10 relative z-20">
                <Link 
                    href="/" 
                    className="inline-flex items-center gap-2 text-[#6E8098] dark:text-[#9DAEC2] hover:text-[#5964E0] dark:hover:text-[#5964E0] mb-6 font-bold transition-colors"
                >
                    <ArrowLeft size={16} />
                    Back to jobs
                </Link>

                <header className="bg-white dark:bg-[#121721] rounded-lg p-8 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden shadow-sm dark:shadow-none">
                    <div
                        style={{ backgroundColor: job.logoBg }}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center"
                    >
                        <img src={job.logo} alt={job.company} className="w-10 md:w-12" />
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-[#19202D] dark:text-white text-xl md:text-2xl font-bold">{job.company}</h2>
                        <p className="text-[#6E8098] dark:text-[#9DAEC2] text-sm">{job.company.toLowerCase()}.com</p>
                    </div>

                    <a 
                        href="#" 
                        className="bg-[#5964E0] hover:bg-[#4A52D6] text-white font-bold py-3 px-6 rounded-md transition-all active:scale-95 w-full md:w-auto text-center"
                    >
                        Company Site
                    </a>
                </header>

                <div className="bg-white dark:bg-[#121721] mt-6 p-8 md:p-10 rounded-lg shadow-sm dark:shadow-none">
                    <div className="flex items-center gap-4 text-[#6E8098] dark:text-[#9DAEC2] mb-2">
                        <span className="flex items-center gap-1">
                            <Clock size={16} />
                            {job.postedAt}
                        </span>
                        <span>•</span>
                        <span>{job.contractType}</span>
                    </div>
                    
                    <h1 className="text-[#19202D] dark:text-white text-2xl md:text-3xl font-bold mt-2 mb-2">{job.position}</h1>
                    
                    <p className="text-[#5964E0] font-bold flex items-center gap-1 mb-8">
                        <MapPin size={16} />
                        {job.location}
                    </p>
                    
                    <div className="text-[#6E8098] dark:text-[#9DAEC2] leading-relaxed space-y-4">
                        <p>
                            We are looking for an experienced {job.position} to join our team at {job.company}. 
                            This is a great opportunity to work on challenging projects 
                            and grow your career in a collaborative environment.
                        </p>
                        <p>
                            <strong className="text-[#19202D] dark:text-white">Requirements:</strong>
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-2">
                            <li>5+ years of experience in software development</li>
                            <li>Strong problem-solving skills</li>
                            <li>Excellent communication abilities</li>
                            <li>Team player with passion for innovation</li>
                        </ul>
                        <p>
                            <strong className="text-[#19202D] dark:text-white">Benefits:</strong>
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-2">
                            <li>Competitive salary and equity</li>
                            <li>Remote-first culture</li>
                            <li>Health, dental, and vision insurance</li>
                            <li>Unlimited PTO</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-[#5964E0] dark:bg-[#121721] mt-6 p-8 rounded-lg">
                    <h3 className="text-white dark:text-white text-xl font-bold mb-4">Apply for this position</h3>
                    <p className="text-white/80 dark:text-[#9DAEC2] mb-6">
                        Ready to take the next step? Submit your application today.
                    </p>
                    <button className="bg-white text-[#5964E0] font-bold py-3 px-8 rounded-md hover:bg-[#F4F6F8] transition-colors active:scale-95 w-full md:w-auto">
                        Apply Now
                    </button>
                </div>
            </article>
        </main>
    );
}