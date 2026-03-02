"use client";

import { ArchitectureNode } from "@/types";
import { Server, Database, Brain, Globe, Layers } from "lucide-react";

const ICONS = {
    frontend: Globe,
    backend: Server,
    database: Database,
    ai: Brain,
    infrastructure: Layers,
};

const COLORS = {
    frontend: "bg-blue-500/10 border-blue-500/30 text-blue-400",
    backend: "bg-purple-500/10 border-purple-500/30 text-purple-400",
    database: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    ai: "bg-rose-500/10 border-rose-500/30 text-rose-400",
    infrastructure: "bg-orange-500/10 border-orange-500/30 text-orange-400",
};

export default function ArchitectureGraph({ nodes }: { nodes: ArchitectureNode[] }) {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full py-12">
            {nodes.map((node, i) => {
                const Icon = ICONS[node.type];
                return (
                    <div key={node.id} className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">

                        <div className={`flex flex-col items-center justify-center p-4 md:p-6 w-full max-w-[280px] md:w-48 h-28 md:h-32 rounded-2xl border backdrop-blur-md ${COLORS[node.type]}`}>
                            <Icon className="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-3 opacity-80" />
                            <span className="text-xs md:text-sm font-bold text-center leading-tight text-white">{node.label}</span>
                            <span className="text-[10px] uppercase mt-1 tracking-widest opacity-60 font-mono">{node.type}</span>
                        </div>

                        {i < nodes.length - 1 && (
                            <div className="hidden md:flex flex-col items-center opacity-40">
                                <div className="w-8 h-[2px] bg-white rounded-full"></div>
                                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-white border-b-[4px] border-b-transparent mt-[-5px] ml-7"></div>
                            </div>
                        )}
                        {i < nodes.length - 1 && (
                            <div className="flex md:hidden flex-col items-center opacity-40 my-2">
                                <div className="w-[2px] h-8 bg-white rounded-full"></div>
                                <div className="w-0 h-0 border-l-[4px] border-l-transparent border-t-[6px] border-t-white border-r-[4px] border-r-transparent ml-[-3px] mb-[-4px]"></div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
