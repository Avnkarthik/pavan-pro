
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative text-black py-20 lg:py-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-black drop-shadow-sm">
            Building the Future with <span className="text-black">Precision</span>
          </h1>
          <p className="text-xl md:text-2xl text-black mb-10 max-w-3xl mx-auto font-medium">
            Professional Civil Engineering Services & Structural Planning.
            Delivering excellence in every blueprint and foundation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/plans"
              className="px-8 py-4 bg-black hover:bg-gray-800 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-[#fd04fd]/40 glow-hover"
            >
              View Our Plans
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white/30 backdrop-blur-sm border-2 border-white hover:border-black text-black hover:text-black rounded-lg font-semibold transition-all hover:bg-white/50"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black drop-shadow-sm">Our Expertise</h2>
            <div className="w-20 h-1 bg-black mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Structural Design",
                desc: "Comprehensive structural analysis and design for residential and commercial buildings.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )
              },
              {
                title: "3D Planning",
                desc: "Visualize your dream project with high-quality 3D elevations and walkthroughs.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                )
              },
              {
                title: "Civil Consultation",
                desc: "Expert advice on construction materials, site management, and cost estimation.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                )
              }
            ].map((service, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-xl hover:shadow-2xl transition-all border border-white/20 glow-hover">
                <div className="w-14 h-14 bg-white/20 text-black rounded-lg flex items-center justify-center mb-6 shadow-md">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                <p className="text-black leading-relaxed font-medium">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
