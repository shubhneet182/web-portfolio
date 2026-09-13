'use client';
import data from "./projects-data.json";
import AnimatedName from "./name-animation";
import { useState } from "react";

interface ProjectData {
    "Project Title": string;
    Background: string;
    Objective: string;
    "Key Features": string[];
    "Tech Stack": string[];
    "bg-cover": string;
    "bg-full": string;
}

function MobileProjectCard(project: ProjectData) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="rounded-lg overflow-hidden mb-3 border border-white/10">
            {/* Header row — always visible */}
            <button
                className="w-full flex items-center justify-between px-4 py-3 bg-center bg-cover relative"
                style={{ backgroundImage: `url(/${project['bg-cover']})` }}
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
            >
                <div className="absolute inset-0 bg-black/60" />
                <h2 className="relative text-white font-bold text-base text-left">{project["Project Title"]}</h2>
                <span className={`relative text-white transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>▼</span>
            </button>

            {/* Expanded content */}
            {expanded && (
                <div className="bg-white/95 backdrop-blur-lg p-4 flex flex-col gap-3">
                    <div>
                        <h3 className="text-base font-bold text-sky-800 pb-1">Background</h3>
                        <p className="text-zinc-700 text-sm">{project.Background}</p>
                    </div>
                    <div>
                        <h3 className="text-base font-bold pb-1">Objective</h3>
                        <div className="text-zinc-700 text-sm">
                            {project.Objective.split("\n").map((line, i) => (
                                <p key={i} style={{
                                    marginTop: line.includes("My Role:") ? '8px' : '0',
                                    fontWeight: line.includes("My Role:") ? 'bold' : 'normal'
                                }}>{line}</p>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <h3 className="text-sm font-bold pb-1">Key Features</h3>
                            {project["Key Features"].map((f, i) => <p className="text-zinc-700 text-sm" key={i}>{f}</p>)}
                        </div>
                        <div className="flex-1">
                            <h3 className="text-sm font-bold pb-1">Tech Stack</h3>
                            {project["Tech Stack"].map((s, i) => <p className="text-zinc-700 text-sm" key={i}>{s}</p>)}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function ExpandableAccordion(project: ProjectData) {
    return (
        <div className="group relative bg-emerald-50 px-4 py-3 grow hover:w-full transition-[width] duration-500 rounded overflow-hidden">
            {/* Cover image (visible when not hovered) */}
            <div
                className="absolute inset-0 group-hover:opacity-0 duration-700 ease-in-out bg-center bg-cover"
                style={{ backgroundImage: `url(/${project['bg-cover']})` }}
            />
            {/* Full content (visible on hover) */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-700 ease-in-out bg-center bg-cover"
                style={{ backgroundImage: `url(/${project['bg-full']})` }}
            >
                <div className="m-4 h-[38rem] bg-white/80 backdrop-blur-lg p-4 rounded flex flex-col justify-between overflow-y-auto">
                    <h1 className="text-3xl text-sky-800 font-bold pb-6">{project["Project Title"]}</h1>
                    <div>
                        <h2 className="text-2xl font-bold pb-2">Background</h2>
                        <p className="text-zinc-700 pb-4">{project.Background}</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold pb-2">Objective</h2>
                        <div className="text-zinc-700 pb-4">
                            {project.Objective.split("\n").map((line, i) => (
                                <p key={i} style={{
                                    marginTop: line.includes("My Role:") ? '10px' : '0',
                                    fontWeight: line.includes("My Role:") ? 'bold' : 'normal'
                                }}>{line}</p>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-between pr-4">
                        <div>
                            <h3 className="text-2xl font-bold pb-2">Key Features</h3>
                            {project["Key Features"].map((feature, i) => <p className="text-zinc-700" key={i}>{feature}</p>)}
                        </div>
                        <div className="pl-8 max-w-[20rem]">
                            <h3 className="text-2xl font-bold pb-2">Tech Stack</h3>
                            {project["Tech Stack"].map((skill, i) => <p className="text-zinc-700" key={i}>{skill}</p>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ProjectSection() {
    return (
        <div className="p-8 md:p-16 flex flex-col">
            <AnimatedName
                name={<h1 className="text-teal-400 text-[1.6rem] md:text-[2.7rem] italic font-semibold pb-8 md:pb-12">
                    Projects where I turned caffeine into code...
                </h1>} />

            {/* Mobile: tap-to-expand stacked cards */}
            <div className="block md:hidden">
                {data.map((projectData, i) => <MobileProjectCard key={i} {...projectData} />)}
            </div>

            {/* Desktop: horizontal hover accordion */}
            <div className="hidden md:block container mx-auto">
                <div className="flex space-x-2 justify-between h-[40rem]">
                    {data.map((projectData, i) => <ExpandableAccordion key={i} {...projectData} />)}
                </div>
            </div>
        </div>
    );
}
