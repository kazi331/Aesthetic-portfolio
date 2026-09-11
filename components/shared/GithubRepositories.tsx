'use client';

import { personalInfo } from '@/lib/data';
import { ArrowUpRight, GitFork, Github, LoaderCircle, Pin, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';

interface GithubLanguage {
    name: string;
    color: string | null;
}

interface GithubRepository {
    id: string;
    name: string;
    url: string;
    description: string | null;
    updatedAt: string;
    stars: number;
    forks: number;
    topics: string[];
    languages: GithubLanguage[];
    isPinned: boolean;
}

interface GithubRepositoriesProps {
    profile?: boolean;
}

function formatUpdatedDate(value: string) {
    return new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' }).format(new Date(value));
}

export default function GithubRepositories({ profile = false }: GithubRepositoriesProps) {
    const [repositories, setRepositories] = useState<GithubRepository[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        fetch('/api/github/repositories', { signal: controller.signal })
            .then(async (response) => {
                if (!response.ok) throw new Error('GitHub request failed');
                const contentType = response.headers.get('content-type') || '';
                if (!contentType.includes('application/json')) {
                    throw new Error('Unexpected non-JSON response');
                }
                return response.json() as Promise<{ repositories: GithubRepository[] }>;
            })
            .then((payload) => setRepositories(payload.repositories))
            .catch((requestError: Error) => {
                if (requestError.name !== 'AbortError') setError(true);
            })
            .finally(() => {
                if (!controller.signal.aborted) setLoading(false);
            });

        return () => controller.abort();
    }, []);

    const title = profile ? 'Repositories I keep in motion.' : 'Open Source & Utilities';
    const description = profile
        ? 'A live snapshot of my pinned work and latest public repositories, read directly from GitHub.'
        : 'A live selection of my pinned work and latest public repositories from GitHub.';

    const repositoryLabel = useMemo(() => {
        if (loading) return 'SYNCING GITHUB';
        if (error) return 'GITHUB UNAVAILABLE';
        return `${repositories.length.toString().padStart(2, '0')} LIVE REPOSITORIES`;
    }, [error, loading, repositories.length]);

    return (
        <section id={profile ? 'github-profile' : 'github-preview'} className={`border-b border-white/5 ${profile ? 'bg-[#0c0c0c] py-20 md:py-28' : 'bg-[#121212]/10 py-20 md:py-28'}`}>
            <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div className="max-w-3xl">
                        <div className="mb-4 flex items-center gap-3"><span className="h-px w-10 bg-accent" /><span className="font-mono text-xs uppercase tracking-[0.24em] text-accent">{profile ? 'Repositories / 05' : 'Code Contributions'}</span></div>
                        <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.05em] text-primary-text sm:text-5xl md:text-6xl">{title.split(' ').slice(0, -1).join(' ')} <span className="font-serif font-light italic text-accent-secondary">{title.split(' ').at(-1)}</span></h2>
                        <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-text">{description}</p>
                    </div>
                    <a href={personalInfo.github} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-text transition hover:text-accent"><Github className="h-4 w-4" /> {repositoryLabel} <ArrowUpRight className="h-3.5 w-3.5" /></a>
                </div>

                {loading && <div className="flex min-h-52 items-center justify-center border border-white/8 bg-[#101010]"><LoaderCircle className="h-5 w-5 animate-spin text-accent" /><span className="ml-3 font-mono text-[10px] uppercase tracking-widest text-muted-text">Reading pinned GitHub activity</span></div>}
                {!loading && error && <div className="border border-white/8 bg-[#101010] p-8 text-center"><p className="font-mono text-xs uppercase tracking-widest text-accent">GitHub activity unavailable</p><p className="mt-3 text-sm text-muted-text">Add a GitHub token to enable pinned repositories, then try again.</p></div>}
                {!loading && !error && <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{repositories.map((repository, index) => <motion.a key={repository.id} href={repository.url} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="group flex min-h-56 flex-col justify-between border border-white/8 bg-[#101010] p-6 transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-black/20"><div><div className="mb-5 flex items-center justify-between"><span className="flex items-center gap-2 rounded-lg border border-white/8 bg-[#090909] px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-muted-text">{repository.isPinned ? <Pin className="h-3 w-3 text-accent" /> : <Github className="h-3 w-3" />}{repository.isPinned ? 'Pinned' : 'Public'}</span><ArrowUpRight className="h-4 w-4 text-muted-text transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" /></div><h3 className="font-mono text-sm font-medium text-primary-text transition group-hover:text-accent">{repository.name}</h3><p className="mt-3 line-clamp-3 text-[11px] leading-relaxed text-muted-text">{repository.description || 'No description provided on GitHub.'}</p>{repository.topics.length > 0 && <div className="mt-4 flex flex-wrap gap-1.5">{repository.topics.slice(0, 2).map((topic) => <span key={topic} className="rounded-full border border-white/8 px-2 py-1 font-mono text-[9px] text-muted-text">#{topic}</span>)}</div>}</div><div className="mt-5 border-t border-white/8 pt-4 font-mono text-[10px] text-muted-text"><div className="flex items-center justify-between"><span className="flex items-center gap-3">{repository.languages.slice(0, 2).map((language) => <span key={language.name} className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: language.color || '#8D8D8D' }} />{language.name}</span>)}</span><span className="flex items-center gap-3"><span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-amber-400" />{repository.stars}</span><span className="flex items-center gap-1"><GitFork className="h-3.5 w-3.5" />{repository.forks}</span></span></div><span className="mt-3 block text-right text-[9px] uppercase tracking-widest text-white/25">Updated {formatUpdatedDate(repository.updatedAt)}</span></div></motion.a>)}</div>}
            </div>
        </section>
    );
}
