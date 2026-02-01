"use client";

import { MotionValue, useTransform, motion, AnimatePresence } from "framer-motion";
import { carData } from "@/data/carData";

interface HuayraExperienceProps {
    scrollYProgress: MotionValue<number>;
}

export default function HuayraExperience({ scrollYProgress }: HuayraExperienceProps) {
    // Phase visibility ranges
    // Phase 1: 0 - 0.25
    // Phase 2: 0.35 - 0.60
    // Phase 3: 0.70 - 1.0

    const opacityHero = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
    const yHero = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
    const pointerEventsHero = useTransform(scrollYProgress, (v) => (v < 0.3 ? "auto" : "none"));

    const opacityDesign = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
    const yDesign = useTransform(scrollYProgress, [0.3, 0.4], [50, 0]);

    const opacityEngine = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
    const yEngine = useTransform(scrollYProgress, [0.7, 0.8], [50, 0]);

    return (
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center text-white">
            {/* BACKGROUND ELEMENTS / HUD LINES could go here */}

            {/* PHASE 1: HERO */}
            <motion.div
                style={{ opacity: opacityHero, y: yHero, pointerEvents: pointerEventsHero }}
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center p-4"
            >
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
                    {carData.hero.title}
                </h1>
                <div className="flex flex-col items-center gap-4">
                    <p className="text-xl md:text-2xl text-pagani-gold tracking-[0.3em]">
                        {carData.hero.price}
                    </p>
                    <button className="px-8 py-3 border border-pagani-gold text-pagani-gold uppercase tracking-widest hover:bg-pagani-gold hover:text-black transition-colors pointer-events-auto">
                        {carData.hero.cta}
                    </button>
                </div>
            </motion.div>

            {/* PHASE 2: DESIGN */}
            <motion.div
                style={{ opacity: opacityDesign, y: yDesign }}
                className="absolute inset-0 flex items-center justify-start p-10 md:p-20"
            >
                <div className="max-w-xl border-l-2 border-pagani-gold pl-8 bg-black/40 backdrop-blur-sm p-8 rounded-r-lg">
                    <h2 className="text-4xl md:text-6xl font-bold uppercase mb-6 text-white">
                        {carData.design.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                        {carData.design.text}
                    </p>
                    <div className="mt-6 h-1 w-24 bg-pagani-gold"></div>
                </div>
            </motion.div>

            {/* PHASE 3: ENGINE */}
            <motion.div
                style={{ opacity: opacityEngine, y: yEngine }}
                className="absolute inset-0 flex items-center justify-end p-10 md:p-20"
            >
                <div className="max-w-md text-right">
                    <h2 className="text-4xl md:text-6xl font-bold uppercase mb-8 text-white">
                        {carData.engine.title}
                    </h2>
                    <div className="space-y-6">
                        {carData.engine.specs.map((spec, index) => (
                            <div key={index} className="flex justify-end items-center gap-4 border-b border-gray-700 pb-2">
                                <span className="text-gray-400 uppercase tracking-wider text-sm">{spec.label}</span>
                                <span className="text-2xl md:text-3xl font-bold text-pagani-gold font-orbitron">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
