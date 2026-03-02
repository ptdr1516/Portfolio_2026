import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function BlogRoot() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#00ff88]/30">
            <nav className="fixed top-0 w-full p-6 z-50 mix-blend-difference">
                <Link href="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                    Back to Portfolio
                </Link>
            </nav>

            <div className="max-w-4xl mx-auto px-6 pt-32 pb-24 flex flex-col items-center justify-center min-h-[70vh] text-center">
                <div className="w-16 h-16 bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-2xl flex items-center justify-center mb-8">
                    <BookOpen className="w-8 h-8 text-[#00ff88]" />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
                    Technical Insights
                </h1>
                <p className="text-xl text-neutral-400 font-light text-balance leading-relaxed max-w-2xl mb-12">
                    Deep-dives into LLM orchestration, vector databases, and scalable Node.js architectures coming soon.
                </p>

                <div className="px-6 py-4 rounded-xl border border-dashed border-white/20 bg-white/[0.02]">
                    <span className="font-mono text-sm text-neutral-500">Route: /blog/* initialized for future CMS integration.</span>
                </div>
            </div>
        </main>
    );
}
