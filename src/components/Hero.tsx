"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { ArrowRight, Code2, Database, Github, Cpu } from "lucide-react";

interface HeroProps {
    progress: MotionValue<number>;
}

export default function Hero({ progress }: HeroProps) {
    // Section 1: Intro (0% to 20%)
    const opacity1 = useTransform(progress, [0, 0.1, 0.2], [1, 1, 0]);
    const y1 = useTransform(progress, [0, 0.2], [0, -50]);

    // Section 2: Technical Value (30% to 50%)
    const opacity2 = useTransform(progress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
    const y2 = useTransform(progress, [0.2, 0.3, 0.5], [50, 0, -50]);

    // Section 3: Engineering Architecture (60% to 80%)
    const opacity3 = useTransform(progress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
    const y3 = useTransform(progress, [0.5, 0.6, 0.8], [50, 0, -50]);

    return (
        <div className="relative md:absolute md:inset-0 pointer-events-none">

            {/* Intro Section - Always centered initially */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="min-h-[90vh] md:min-h-0 md:absolute md:inset-0 flex flex-col items-center justify-center p-6 md:p-8 text-center"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-mono text-neutral-300">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Shipping Production AI Systems
                </div>
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl mb-6">
                    Purvesh Patidar
                </h1>
                <p className="text-lg md:text-2xl text-neutral-400 font-light max-w-2xl text-balance px-4 md:px-0">
                    Senior Full Stack Engineer specializing in <strong className="text-white font-medium">Applied ML</strong>, <strong className="text-white font-medium">LLM Orchestration</strong>, and high-performance <strong className="text-white font-medium">Node.js Backends</strong>.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 pointer-events-auto w-full max-w-xs sm:max-w-none">
                    <a href="#case-studies" className="w-full sm:w-auto group flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition-colors">
                        View Case Studies
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="https://github.com/ptdr1516" target="_blank" className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10">
                        <Github className="w-4 h-4" />
                        GitHub
                    </a>
                </div>
            </motion.div>

            {/* Middle Left Section: Capabilities - Relative on mobile, Absolute on desktop */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="relative md:absolute inset-y-0 left-0 w-full md:w-1/2 flex flex-col justify-center p-6 sm:p-12 md:pl-24 py-24 md:py-0"
            >
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-2xl leading-tight mb-8">
                    Architecting for <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">Scale & Reliability.</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    <div className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-md">
                        <Database className="w-6 h-6 text-blue-400 mb-3" />
                        <h3 className="text-lg font-semibold text-white mb-1 tracking-tight">State & Infra</h3>
                        <p className="text-sm text-neutral-400 leading-relaxed">MongoDB, Redis, Docker, WebSocket tuning handling 1k+ daily peak CCUs.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-md">
                        <Code2 className="w-6 h-6 text-purple-400 mb-3" />
                        <h3 className="text-lg font-semibold text-white mb-1 tracking-tight">Architecture</h3>
                        <p className="text-sm text-neutral-400 leading-relaxed">Node.js/FastAPI hybrid services for optimized ML inference & reliable data delivery.</p>
                    </div>
                </div>
            </motion.div>

            {/* End Right Section: ML/AI - Relative on mobile, Absolute on desktop */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="relative md:absolute inset-y-0 right-0 w-full md:w-1/2 flex flex-col justify-center items-start md:items-end p-6 sm:p-12 md:pr-24 py-24 md:py-0 md:text-right"
            >
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-2xl leading-tight mb-8">
                    Product-focused <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">Generative AI.</span>
                </h2>

                <div className="w-full max-w-md p-6 rounded-xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-md text-left ml-0 md:ml-auto">
                    <Cpu className="w-6 h-6 text-green-400 mb-4" />
                    <ul className="space-y-4">
                        <li className="flex justify-between items-center pb-4 border-b border-white/5">
                            <span className="text-neutral-300">Predictive Forecasting</span>
                            <span className="font-mono text-sm text-green-400">94% Accuracy</span>
                        </li>
                        <li className="flex justify-between items-center pb-4 border-b border-white/5">
                            <span className="text-neutral-300">Course Recommendation</span>
                            <span className="font-mono text-sm text-green-400">+22% Engagement</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="text-neutral-300">Sentiment Classifier</span>
                            <span className="font-mono text-sm text-emerald-400">Streamlit UI</span>
                        </li>
                    </ul>
                </div>
            </motion.div>

        </div>
    );
}
