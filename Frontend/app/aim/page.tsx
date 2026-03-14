
import prisma from "@/lib/prisma";

export const revalidate = 60;

async function getAimContent() {
    const aim = await prisma.aim.findFirst();
    return aim;
}

export default async function AimPage() {
    const aim = await getAimContent();

    return (
        <div className="min-h-screen bg-transparent py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-transparent backdrop-blur-sm shadow-2xl rounded-2xl p-8 md:p-12 border-l-8 border-[#fd04fd] glow-hover border border-white/20">
                    <h1 className="text-3xl font-extrabold text-black sm:text-4xl mb-6 font-mono drop-shadow-sm">
                        Our Aim & Vision
                    </h1>

                    <div className="prose prose-lg max-w-none text-black font-medium font-sans leading-relaxed italic">
                        {aim ? (
                            <div className="whitespace-pre-wrap">{aim.content}</div>
                        ) : (
                            <p>
                                To deliver sustainable, safe, and innovative civil engineering solutions
                                that stand the test of time.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
