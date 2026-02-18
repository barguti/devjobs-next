import JobCard from "@/components/jobs/JobCard";

export default function Home() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-12">
            <JobCard
                logo="/logos/scoot.svg"
                logoBg="#E99210"
                postedAt="5h ago"
                contractType="Full Time"
                position="Senior Software Engineer"
                company="Scoot"
                location="United Kingdom"
            />
            {/* Aquí pondrías más tarjetas... */}
        </div>
    );
}
