
import prisma from "@/lib/prisma";

export const revalidate = 60;

async function getAboutContent() {
    const about = await prisma.about.findFirst();
    return about;
}

export default async function AboutPage() {
    const about = await getAboutContent();

    return (
        <div className="min-h-screen bg-transparent py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-transparent backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 glow-hover">
                    <h1 className="text-3xl font-extrabold text-black sm:text-4xl mb-8 border-b-2 border-[#fd04fd] pb-2 inline-block font-mono tracking-tight glow-text drop-shadow-sm">
                        About Us
                    </h1>

                    <div className="prose prose-lg max-w-none text-black font-medium font-sans leading-relaxed italic">
                        {about ? (
                            <div className="whitespace-pre-wrap">{about.content}</div>
                        ) : (
                            <p>
                                Welcome to our Civil Engineering portfolio. We are dedicated to providing
                                top-tier structural analysis and design services.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
