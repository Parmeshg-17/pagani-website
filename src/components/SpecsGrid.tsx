export default function SpecsGrid() {
    const specs = [
        { label: "Engine Code", value: "M120" },
        { label: "Displacement", value: "5987 cc" },
        { label: "Power Output", value: "750 hp @ 7500 rpm" },
        { label: "Torque", value: "710 Nm @ 5700 rpm" },
        { label: "Transmission", value: "6-speed sequential" },
        { label: "Dry Weight", value: "1070 kg" },
        { label: "Weight/Power", value: "1.43 kg/hp" },
        { label: "0-100 km/h", value: "2.7 sec" },
        { label: "Max Speed", value: "> 350 km/h" },
    ];

    return (
        <section className="py-24 px-6 md:px-12 bg-carbon-gray relative z-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold uppercase mb-12 text-white border-b border-pagani-gold pb-4 inline-block">
                    Technical Specifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
                    {specs.map((spec, i) => (
                        <div key={i} className="flex flex-col border-l border-white/20 pl-6 hover:border-pagani-gold transition-colors duration-300">
                            <span className="text-gray-400 text-sm uppercase tracking-wider mb-1">{spec.label}</span>
                            <span className="text-2xl font-bold text-white font-orbitron">{spec.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
