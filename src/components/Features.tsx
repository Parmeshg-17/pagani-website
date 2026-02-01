export default function Features() {
    return (
        <section className="py-24 px-6 md:px-12 bg-pagani-black z-20 relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold uppercase mb-6 text-white leading-tight">
                        The Shape of <span className="text-pagani-gold">Speed</span>
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        Everything on the Huayra R Evo is designed for maximum efficiency. The complex aerodynamics are the result of endless hours of wind tunnel testing.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        From the adjustable rear wing to the front splitter, every component serves a purpose: keeping the car glued to the track at extreme speeds.
                    </p>
                </div>
                <div className="relative h-96 w-full bg-white/5 rounded-lg overflow-hidden flex items-center justify-center border border-white/10">
                    <p className="text-gray-500 uppercase tracking-widest text-sm">[ Additional Feature Imagery ]</p>
                </div>
            </div>
        </section>
    );
}
