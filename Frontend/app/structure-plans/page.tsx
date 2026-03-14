
import prisma from "@/lib/prisma";
import ProjectCard from "@/components/ProjectCard";

export const revalidate = 60;

async function getProjects() {
    const projects = await prisma.project.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });
    return projects;
}

export default async function StructurePlansPage() {
    const projects = await getProjects();

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                        Structure & 3D Developed Plans
                    </h1>
                    <p className="mt-4 text-xl text-slate-600">
                        Showcasing our precision-engineered structural designs and 3D visualizations.
                    </p>
                </div>

                {projects.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-slate-500 text-lg">No projects added yet.</p>
                    </div>
                ) : (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) => (
                            <ProjectCard
                                key={"1234567"}
                                title={project.title}
                                description={project.description}
                                pdfUrl={project.pdfUrl}
                                date={project.createdAt}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
