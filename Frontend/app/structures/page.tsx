import prisma from "@/lib/prisma";
import ProjectCard from "@/components/ProjectCard";

// Server Component
export const revalidate = 60; // Revalidate data every 60 seconds

async function getStructures() {
    const structures = await prisma.structure.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });
    return structures;
}

export default async function StructuresPage() {
    const structures = await getStructures();

    return (
        <div className="min-h-screen bg-transparent py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-extrabold text-black sm:text-4xl drop-shadow-sm">
                        Structural Designs
                    </h1>
                    <p className="mt-4 text-xl text-black font-medium opacity-90">
                        Professional structural layouts and engineering blueprints.
                    </p>
                </div>

                {structures.length === 0 ? (
                    <div className="text-center py-10 bg-white/10 backdrop-blur-sm rounded-xl shadow-sm border border-white/20 glow-hover">
                        <p className="text-black font-medium">No structural plans uploaded yet.</p>
                    </div>
                ) : (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {structures.map((project) => (
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                pdfUrl={project.pdfUrl}
                                date={project.createdAt}
                                category="Structure"
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
