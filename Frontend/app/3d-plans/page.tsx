import prisma from "@/lib/prisma";
import ProjectCard from "@/components/ProjectCard"; // Server Component
export const revalidate = 60; // Revalidate data every 60 seconds

async function get3DImages() {
    const images = await prisma.threeDImage.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });
    return images;
}

export default async function ThreeDPlans() {
    const images = await get3DImages();

    return (
        <div className="min-h-screen bg-transparent py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-extrabold text-black sm:text-4xl drop-shadow-sm">
                        3D Developed Plans
                    </h1>
                    <p className="mt-4 text-xl text-black font-medium opacity-90">
                        Immersive 3D visualizations and renders of our projects.
                    </p>
                </div>

                {images.length === 0 ? (
                    <div className="text-center py-10 bg-white/10 backdrop-blur-sm rounded-xl shadow-sm border border-white/20 glow-hover">
                        <p className="text-black font-medium">No 3D plans uploaded yet.</p>
                    </div>
                ) : (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {images.map((image) => (
                            <ProjectCard
                                key={image.id}
                                title={image.title}
                                description={image.description}
                                pdfUrl={image.driveLink} // Using ProjectCard for Drive Links
                                date={image.createdAt}
                                category="3D Render"
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
