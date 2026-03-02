import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ArchitectureGraph from "@/components/ui/ArchitectureGraph";
import { ArrowLeft, Github, Terminal, Database, Activity, Cpu } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#00ff88]/30">

            {/* Navigation */}
            <nav className="fixed top-0 w-full p-4 md:p-6 z-50 mix-blend-difference">
                <Link href="/" className="inline-flex items-center gap-2 p-2 -m-2 text-neutral-400 hover:text-white transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                    <span className="text-sm md:text-base">Back to Portfolio</span>
                </Link>
            </nav>

            <div className="max-w-4xl mx-auto px-6 pt-32 pb-24">

                {/* Header Section */}
                <header className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 text-xs font-mono text-[#00ff88] bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-full">
                            {project.role}
                        </span>
                        <span className="px-3 py-1 text-xs font-mono text-neutral-400 bg-white/5 border border-white/10 rounded-full">
                            {project.duration}
                        </span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
                        {project.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-400 font-light text-balance leading-relaxed">
                        {project.shortDescription}
                    </p>

                    {project.links.github && (
                        <a href={project.links.github} target="_blank" className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors">
                            <Github className="w-5 h-5" />
                            View Source Repository
                        </a>
                    )}
                </header>

                {/* Metrics Bar */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5">
                    {project.metrics.map((metric, i) => (
                        <div key={i} className="flex flex-col border-b sm:border-b-0 sm:border-r border-white/5 last:border-0 pb-4 sm:pb-0 sm:pr-4">
                            <span className="text-xs font-mono text-neutral-500 mb-1 uppercase tracking-wider">{metric.label}</span>
                            <span className="text-2xl md:text-3xl font-bold text-[#00ff88]">{metric.value}</span>
                        </div>
                    ))}
                </section>

                {/* Narrative Flow */}
                <div className="space-y-20">

                    <section>
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <Activity className="text-rose-400" />
                            The Problem
                        </h2>
                        <p className="text-lg text-neutral-300 leading-relaxed bg-white/[0.02] p-6 text-balance border-l-2 border-rose-500 rounded-r-lg">
                            {project.problem}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <Cpu className="text-[#00ff88]" />
                            Engineering Solution
                        </h2>
                        <p className="text-lg text-neutral-300 leading-relaxed mb-10">
                            {project.solution}
                        </p>

                        <div className="p-8 bg-[#121212] rounded-2xl border border-white/10">
                            <h3 className="text-xl font-bold mb-4 text-center">System Architecture Graph</h3>
                            <p className="text-center text-sm text-neutral-500 mb-8 max-w-lg mx-auto">{project.architecture.description}</p>
                            <ArchitectureGraph nodes={project.architecture.flow} />
                        </div>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Terminal className="text-purple-400" />
                                Technical Challenges
                            </h2>
                            <ul className="space-y-4">
                                {project.challenges.map((c, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-purple-400 mt-1">▹</span>
                                        <span className="text-neutral-300 leading-relaxed">{c}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Database className="text-blue-400" />
                                Lessons Learned
                            </h2>
                            <ul className="space-y-4">
                                {project.lessons.map((l, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">▹</span>
                                        <span className="text-neutral-300 leading-relaxed">{l}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                </div>
            </div>
        </main>
    );
}
