import prisma from "@/lib/prisma";
import ProjectCard from "@/components/ProjectCard"; // Server Component

export const revalidate = 60; // Revalidate data every 60 seconds

async function getPlans() {
    const plans = await prisma.plan.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });
    return plans;
}

export default async function PlansPage() {
    const plans = await getPlans();

    return (
        <div className="min-h-screen bg-transparent py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-20">

                {/* PDF Plans Section */}
                <section>
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-extrabold text-black sm:text-4xl drop-shadow-sm">
                            Project Plans & Drawings
                        </h1>
                        <p className="mt-4 text-xl text-black font-medium opacity-90">
                            Detailed civil engineering layouts, foundations, and elevation drawings.
                        </p>
                    </div>

                    {plans.length === 0 ? (
                        <div className="text-center py-10 bg-white/10 backdrop-blur-sm rounded-xl shadow-sm border border-white/20 glow-hover">
                            <p className="text-black font-medium">No plans uploaded yet.</p>
                        </div>
                    ) : (
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {plans.map((plan) => (
                                <ProjectCard
                                    key={plan.id}
                                    title={plan.title}
                                    description={plan.description}
                                    pdfUrl={plan.pdfUrl}
                                    date={plan.createdAt}
                                    category={plan.category || "General Plan"}
                                />
                            ))}
                        </div>
                    )}
                </section>

            </div>
        </div>
    );
}
