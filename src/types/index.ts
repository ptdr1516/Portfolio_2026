export interface ArchitectureNode {
    id: string;
    label: string;
    type: "frontend" | "backend" | "database" | "ai" | "infrastructure";
    description?: string;
}

export interface Metric {
    label: string;
    value: string;
}

export interface Project {
    slug: string;
    title: string;
    shortDescription: string;
    problem: string;
    solution: string;
    role: string;
    duration: string;
    metrics: Metric[];
    techStack: {
        frontend: string[];
        backend: string[];
        ai: string[];
        infrastructure: string[];
    };
    architecture: {
        description: string;
        flow: ArchitectureNode[];
    };
    challenges: string[];
    lessons: string[];
    links: {
        github?: string;
        live?: string;
    };
}
