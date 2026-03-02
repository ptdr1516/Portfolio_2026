import { Code2, Cpu, Activity, LayoutTemplate, Cable } from "lucide-react";

export default function TechStack() {
    const categories = [
        {
            title: "Backend Core",
            icon: <Code2 className="w-5 h-5" />,
            skills: ["Node.js", "Express", "REST APIs", "WebSockets / Socket.io", "C", "SQL"],
        },
        {
            title: "Data & ML Space",
            icon: <Cpu className="w-5 h-5" />,
            skills: ["Python", "scikit-learn", "Pandas", "NumPy", "NLP"],
        },
        {
            title: "LLM Orchestration",
            icon: <Activity className="w-5 h-5" />,
            skills: ["OpenAI APIs", "Prompt Engineering", "Context & Session Tracking", "RAG Systems"],
        },
        {
            title: "Infrastructure",
            icon: <Cable className="w-5 h-5" />,
            skills: ["MongoDB", "Docker", "Redis", "Linux", "Git", "CI/CD (AWS/GCP)"],
        },
        {
            title: "Frontend",
            icon: <LayoutTemplate className="w-5 h-5" />,
            skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
        },
    ];

    return (
        <section className="py-24 px-4 md:px-12 lg:px-24 bg-[#0a0a0a] border-t border-white/5 relative z-10 w-full" id="capabilities">
            <div className="max-w-7xl mx-auto">

                <div className="mb-16">
                    <h3 className="text-sm font-mono tracking-widest text-[#00ff88] uppercase mb-4">
                        Technical Capabilities
                    </h3>
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        The Stack I Build With
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat, idx) => (
                        <div key={idx} className="p-8 rounded-2xl bg-[#121212] border border-white/5 hover:border-white/10 transition-colors">
                            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white">
                                    {cat.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white">{cat.title}</h3>
                            </div>
                            <ul className="space-y-3">
                                {cat.skills.map((skill, sIdx) => (
                                    <li key={sIdx} className="flex items-center gap-3 text-neutral-400">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88]/50"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
