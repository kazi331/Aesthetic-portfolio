'use client';

import { ChevronDown } from 'lucide-react';
import type { Dispatch, SetStateAction } from 'react';
import type { TechnologyNode } from './TechStackV2';

type TechnologyCategory = 'all' | TechnologyNode['category'];

interface MobileTechStackBrowserProps {
    technologies: TechnologyNode[];
    filteredTechnologies: TechnologyNode[];
    activeFilter: TechnologyCategory;
    setActiveFilter: Dispatch<SetStateAction<TechnologyCategory>>;
    selectedMobileTech: TechnologyNode | null;
    setSelectedMobileTech: Dispatch<SetStateAction<TechnologyNode | null>>;
}

export default function MobileTechStackBrowser({
    technologies,
    filteredTechnologies,
    activeFilter,
    setActiveFilter,
    selectedMobileTech,
    setSelectedMobileTech,
}: MobileTechStackBrowserProps) {
    return (
        <div className="pt-6">
            {/* Section Divider & Filter Header */}
            <div className="w-full flex flex-col gap-3 mb-4">
                <div className="flex items-center justify-between px-1">
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-3.5 rounded-full bg-[#4E85BF]" />
                        <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#F5F5F5]">
                            Stack Index
                        </h3>
                        <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-[#89AACC]">
                            {filteredTechnologies.length} {filteredTechnologies.length === 1 ? 'skill' : 'skills'}
                        </span>
                    </div>
                    <span className="font-mono text-[9px] text-muted-text/80 uppercase">Domain Filter</span>
                </div>

                {/* Filter Chips Bar */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-left scrollbar-none">
                    {(['all', 'frontend', 'backend', 'database', 'tooling'] as const).map((category) => {
                        const isSelected = activeFilter === category;
                        const count =
                            category === 'all'
                                ? technologies.length
                                : technologies.filter((technology) => technology.category === category).length;

                        return (
                            <button
                                key={category}
                                onClick={() => {
                                    setActiveFilter(category);
                                    setSelectedMobileTech(null);
                                }}
                                className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95 ${isSelected
                                        ? 'bg-[#162a45] text-[#89AACC] border border-[#4E85BF]/40 shadow-sm'
                                        : 'bg-white/3 border border-white/5 text-muted-text hover:text-white'
                                    }`}
                            >
                                <span>{category}</span>
                                <span
                                    className={`text-[8px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-[#4E85BF]/25 text-white' : 'bg-white/5 text-muted-text/70'
                                        }`}
                                >
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* List of Tech Stack Cards with Accordion Details */}
            <div className="grid grid-cols-1 gap-2.5">
                {filteredTechnologies.map((tech) => {
                    const isSelected = selectedMobileTech?.name === tech.name;
                    const isCore = tech.type === 'core';
                    const isData = tech.type === 'data';

                    return (
                        <div
                            key={tech.name}
                            onClick={() => setSelectedMobileTech(isSelected ? null : tech)}
                            className={`p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer ${isSelected
                                    ? 'border-[#4E85BF]/50 bg-[#121820]/95 shadow-lg shadow-[#4E85BF]/10'
                                    : 'border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]'
                                }`}
                        >
                            <div className="flex items-center justify-between select-none">
                                <div className="flex items-center gap-3">
                                    <div
                                        className={`p-2 rounded-xl border flex items-center justify-center shrink-0 ${isCore
                                                ? 'bg-[#4E85BF]/10 border-[#4E85BF]/25 text-[#4E85BF]'
                                                : isData
                                                    ? 'bg-[#10B981]/10 border-[#10B981]/25 text-[#10B981]'
                                                    : 'bg-yellow-500/10 border-yellow-500/25 text-yellow-500'
                                            }`}
                                    >
                                        {tech.icon}
                                    </div>
                                    <div className="text-left">
                                        <div className="flex items-center gap-2">
                                            <h4 className="font-sans font-bold text-sm text-[#F5F5F5]">{tech.name}</h4>
                                            <span
                                                className={`w-1.5 h-1.5 rounded-full ${isCore ? 'bg-[#4E85BF]' : isData ? 'bg-[#10B981]' : 'bg-yellow-500'
                                                    }`}
                                            />
                                        </div>
                                        <span className="font-mono text-[9px] uppercase tracking-wider text-muted-text">
                                            {tech.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="font-mono text-[9px] font-bold text-[#89AACC] bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
                                        {tech.experience}
                                    </span>
                                    <ChevronDown
                                        className={`w-4 h-4 text-muted-text transition-transform duration-200 ease-out will-change-transform ${isSelected ? 'rotate-180 text-[#89AACC]' : 'rotate-0'
                                            }`}
                                    />
                                </div>
                            </div>

                            <div
                                className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${isSelected
                                        ? 'grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-white/5'
                                        : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <p className="text-xs text-muted-text leading-relaxed font-sans text-left">
                                        {tech.description}
                                    </p>
                                    <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-white/5 text-[9px] font-mono">
                                        <div className="flex items-center gap-1.5 text-[#89AACC] uppercase font-bold">
                                            <span
                                                className={`w-1.5 h-1.5 rounded-full ${isCore ? 'bg-[#4E85BF]' : isData ? 'bg-[#10B981]' : 'bg-yellow-500'
                                                    }`}
                                            />
                                            <span>
                                                Domain: <strong className="text-white">{tech.category}</strong>
                                            </span>
                                        </div>
                                        <span className="text-muted-text uppercase">
                                            Class: <strong className="text-white capitalize">{tech.type}</strong>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Bottom Legend */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-4 bg-white/[0.02] border border-white/5 p-3 rounded-2xl">
                <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4E85BF] shadow-[0_0_6px_#4E85BF]" />
                    <span className="font-sans text-[10px] text-muted-text">Core Infrastructure</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_6px_#10B981]" />
                    <span className="font-sans text-[10px] text-muted-text">Data Layer</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_6px_#EAB308]" />
                    <span className="font-sans text-[10px] text-muted-text">Active Practice</span>
                </div>
            </div>
        </div>
    );
}
