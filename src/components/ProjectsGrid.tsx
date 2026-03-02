import Link from "next/link";
import { ArrowUpRight, BarChart3, LayoutTemplate } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectsGrid() {
    return (
        <section className="relative z-10 w-full min-h-screen bg-[#121212] py-24 md:py-32 px-4 md:px-12 lg:px-24" id="case-studies">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h3 className="text-sm font-medium tracking-widest text-[#00ff88] uppercase mb-4">
                        Production Experience
                    </h3>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        Engineering Case Studies
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <Link
                            href={`/projects/${project.slug}`}
                            key={project.slug}
                            className="group relative flex flex-col justify-between p-6 md:p-8 min-h-[350px] md:min-h-[400px] rounded-3xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.06] transition-all duration-500 overflow-hidden backdrop-blur-md"
                        >
                            {/* Subtle hover gradient glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="relative z-10 flex justify-between items-start mb-8">
                                <span className="text-[#00ff88] font-mono text-sm tracking-wider">0{idx + 1}</span>
                                <div className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center group-hover:bg-[#00ff88] text-white group-hover:text-black transition-colors duration-300">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>

                            <div className="relative z-10 flex-grow">
                                <h4 className="text-3xl font-bold text-white mb-4">
                                    {project.title}
                                </h4>
                                <p className="text-neutral-400 mb-8 text-lg leading-relaxed line-clamp-3">
                                    {project.shortDescription}
                                </p>

                                <div className="flex gap-4 mb-8">
                                    <div className="flex items-center gap-2 text-sm text-neutral-300">
                                        <BarChart3 className="w-4 h-4 text-purple-400" />
                                        <span>{project.metrics[0].value} {project.metrics[0].label}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-neutral-300">
                                        <LayoutTemplate className="w-4 h-4 text-blue-400" />
                                        <span>{project.techStack.backend[0]}</span>
                                    </div>
                                </div>

                            </div>

                            <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                                {project.techStack.ai.slice(0, 2).map(skill => (
                                    <span key={skill} className="px-3 py-1 text-xs font-mono rounded-md bg-rose-500/10 text-rose-300 border border-rose-500/20">{skill}</span>
                                ))}
                                {project.techStack.backend.slice(0, 1).map(skill => (
                                    <span key={skill} className="px-3 py-1 text-xs font-mono rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">{skill}</span>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
