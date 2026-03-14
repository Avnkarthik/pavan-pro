
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // Clear existing data
    await prisma.about.deleteMany()
    await prisma.aim.deleteMany()
    await prisma.structure.deleteMany()
    await prisma.threeDPlan.deleteMany()
    await prisma.plan.deleteMany()

    // About Content
    await prisma.about.create({
        data: {
            content: `Established on 01 January 2026, our construction company was founded with a clear mission: to deliver high-quality, reliable, and modern construction solutions built on integrity and precision.

Though newly established, our company is driven by a team of skilled professionals with hands-on industry experience and a strong commitment to excellence. We specialize in delivering well-planned, durable, and cost-effective construction projects, from concept to completion.

We believe successful construction is built on strong foundations—clear communication, quality workmanship, safety, and client trust. By combining modern techniques, quality materials, and disciplined project management, we aim to exceed expectations on every project we undertake.

As we grow, our focus remains simple: to build lasting structures, long-term relationships, and a reputation for construction you can depend on.`,
        },
    })

    // Aim Content
    await prisma.aim.create({
        data: {
            content: `1. Deliver High-Quality Projects
Ensure every project meets or exceeds client specifications, safety standards, and regulatory requirements — building trust and long-term relationships.

2. Achieve Customer Satisfaction
Focus on understanding client needs, clear communication, timely updates, and responsiveness throughout project delivery.

3. Complete Projects On Time
Efficient planning, scheduling, and execution help ensure project milestones and final delivery dates are met.

4. Stay Within Budget
Effective cost planning, monitoring, and control to avoid overruns and maximize profitability.

5. Prioritize Safety
Zero accidents and strict adherence to health & safety protocols protects workers and reduces liabilities.

6. Use Sustainable & Green Practices
Incorporate eco-friendly materials and energy-efficient construction methods to reduce environmental impact.

7. Innovate Through Technology
Implement modern tools like BIM (Building Information Modeling), project management software, drones, and automation for precision and efficiency.

8. Develop Skilled Workforce
Invest in training and certifications to improve staff competency, morale, and performance.

9. Strengthen Supplier & Partner Relations
Build reliable networks with subcontractors, vendors, and consultants to ensure quality materials and strong collaboration.

10. Expand Market Presence
Grow the business by entering new regions, sectors (commercial, residential, infrastructure), or service offerings.

11. Enhance Financial Stability
Maintain healthy cash flow, strong financial planning, and risk management.

12. Uphold Ethical Standards
Promote transparency, fairness, and compliance with legal and ethical standards in all operations.`,
        },
    })

    // Structures (PDFs)
    await prisma.structure.create({
        data: {
            title: 'Residential Layout A',
            description: 'Structural layout for G+2 residential building.',
            pdfUrl: 'https://example.com/structure-a.pdf', // Placeholder
        },
    })

    // 3D Plans (Videos)
    await prisma.threeDPlan.create({
        data: {
            title: 'Modern Villa Walkthrough',
            description: '3D visualization of a luxury villa project.',
            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder
        },
    })

    // Plans (PDFs)
    await prisma.plan.create({
        data: {
            title: 'Foundation Details',
            description: 'Detailed foundation plan for Commercial Complex.',
            pdfUrl: 'https://example.com/foundation.pdf', // Placeholder
            category: 'Foundation',
        },
    })

    console.log('Seeding completed.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
