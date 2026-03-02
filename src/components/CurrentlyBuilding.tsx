export default function CurrentlyBuilding() {
    return (
        <section className="py-24 px-4 md:px-12 lg:px-24 bg-[#050505] border-t border-white/5 relative z-10 w-full" id="currently-building">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

                <div className="md:w-1/2">
                    <h3 className="text-sm font-mono tracking-widest text-[#00ff88] uppercase mb-4">
                        Active R&D
                    </h3>
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
                        Currently Building
                    </h2>
                    <p className="text-lg text-neutral-400 leading-relaxed mb-8 text-balance">
                        I am actively researching and building autonomous agent orchestration patterns and cost-optimized Retrieval-Augmented Generation (RAG) pipelines for enterprise data.
                    </p>

                    <ul className="space-y-4 font-mono text-sm text-neutral-300">
                        <li className="flex items-center gap-3"><span className="text-[#00ff88]">▸</span> Vector DB Integration (Pinecone/Milvus)</li>
                        <li className="flex items-center gap-3"><span className="text-[#00ff88]">▸</span> LLM Streaming APIs for perceived zero-latency</li>
                        <li className="flex items-center gap-3"><span className="text-[#00ff88]">▸</span> Context caching and cost reduction metrics</li>
                    </ul>
                </div>

                <div className="md:w-1/2 flex items-center justify-center">
                    {/* Visual Abstract Box */}
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#121212] flex items-center justify-center group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/5 to-transparent pointer-events-none" />
                        <div className="w-16 h-16 rounded-full border border-dashed border-[#00ff88]/50 animate-[spin_10s_linear_infinite] group-hover:border-[#00ff88] transition-colors" />
                        <div className="absolute flex flex-col gap-2 items-center">
                            <span className="font-mono text-xs text-[#00ff88]/70">RAG_PIPELINE.EXEC()</span>
                            <div className="flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse delay-75"></div>
                                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-150"></div>
                                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-300"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
