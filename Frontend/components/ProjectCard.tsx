
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    pdfUrl?: string | null;
    date?: Date;
    category?: string;
}

const ProjectCard = ({ title, description, pdfUrl, date, category }: ProjectCardProps) => {
    return (
        <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border border-white/20 flex flex-col h-full group glow-hover">
            <div className="p-6 flex-1 flex flex-col">
                {category && (
                    <span className="text-xs font-semibold text-black uppercase tracking-wide mb-2">
                        {category}
                    </span>
                )}
                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors drop-shadow-sm">{title}</h3>
                <p className="text-black text-sm mb-4 flex-1 font-medium">{description}</p>

                {date && (
                    <p className="text-xs text-black mb-4 font-semibold">
                        {new Date(date).toLocaleDateString()}
                    </p>
                )}

                {pdfUrl ? (
                    <Link
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 bg-white/40 text-black border border-white/40 rounded-lg hover:bg-white/60 hover:text-gray-800 transition-colors font-bold text-sm w-full mt-auto shadow-sm"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View Project
                    </Link>
                ) : (
                    <button disabled className="inline-flex items-center justify-center px-4 py-2 bg-gray-200/20 text-black/50 border border-white/20 rounded-lg font-bold text-sm w-full mt-auto cursor-not-allowed">
                        Link Unavailable
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
