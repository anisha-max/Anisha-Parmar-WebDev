import React from 'react';

const ServicesSection = () => {
    const services = [
        {
            title: "Web Development",
            description: "Custom-built websites & applications designed for speed, scalability.",
            icon: (
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            title: "UI UX",
            description: "User-focused interface designs that balance visual clarity user experience.",
            icon: (
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
            ),
            active: true
        },
        {
            title: "Web Optimization",
            description: "Performance, SEO, & code optimization to ensure fast load times.",
            icon: (
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        }
    ];

    return (
        <section className="bg-zinc-950 py-24 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-4">
                    <div className="space-y-4">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-2xl transition-all duration-300 flex gap-6 ${service.active
                                        ? 'bg-zinc-900/80 border border-zinc-800 shadow-2xl'
                                        : 'bg-transparent border border-transparent'
                                    }`}
                            >
                                <div className="shrink-0 w-12 h-12 rounded-lg  border border-zinc-800 flex items-center justify-center">
                                    {service.icon}
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-white font-semibold text-xl">{service.title}</h3>
                                    <p className="text-gray-300 leading-relaxed text-sm">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-4">
                    <h2 className="text-5xl font-bold">
                        <span className="block text-transparent "
                            style={{
                                WebkitTextStroke: '2px #00f2ad',
                                color: 'transparent'
                            }}>
                            Core Services
                            Offered
                        </span>
                    </h2>
                    <div className="rounded-3xl overflow-hidden mt-16">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000"
                            alt="Team collaboration"
                            className="w-full h-110 object-cover"
                        />
                    </div>
                </div>

                <div className="lg:col-span-4">
                    <div className="rounded-3xl overflow-hidden ">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000"
                            alt="Team meeting"
                            className="w-full h-110 object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;