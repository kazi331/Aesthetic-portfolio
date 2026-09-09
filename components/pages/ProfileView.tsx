'use client';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Container from '@/components/shared/Container';
import GithubRepositories from '@/components/shared/GithubRepositories';
import { certifications, educations, personalInfo, skillCategories, workExperiences } from '@/lib/data';
import { ArrowUpRight, Award, CheckCircle2, Download, ExternalLink, Globe2, GraduationCap, Languages, MapPin, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfileView() {
    return (
        <div className="min-h-screen bg-[#090909] text-primary-text">
            <Navbar />
            <main>
                <section className="relative overflow-hidden border-b border-white/5 pt-36 pb-20 md:pt-44 md:pb-28">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(78,133,191,0.14),transparent_35%),linear-gradient(120deg,#090909_0%,#0d1115_55%,#090909_100%)]" />
                    <Container className="relative">
                        <div className="grid items-end gap-12 lg:grid-cols-[0.7fr_1.3fr]">
                            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative mx-auto w-full max-w-sm lg:mx-0">
                                <motion.div whileHover={{ y: -8, rotate: -1.5, scale: 1.015 }} transition={{ type: 'spring', stiffness: 220, damping: 18 }} className="group relative">
                                    <div className="absolute -inset-3 rounded-[2rem] border border-accent/20 rotate-3 transition-all duration-700 group-hover:rotate-6 group-hover:border-accent/60 group-hover:shadow-[0_0_50px_rgba(78,133,191,0.16)]" />
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#121212]">
                                        <Image src={personalInfo.profileImage || 'https://github.com/kazi331.png'} alt={personalInfo.name} fill priority sizes="(max-width: 1024px) 90vw, 30vw" className="object-cover object-top grayscale-[15%] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0" />
                                        <div className="pointer-events-none absolute -inset-y-1/2 -left-1/2 w-1/3 -skew-x-12 bg-white/15 opacity-0 blur-xl transition-all duration-1000 group-hover:left-[125%] group-hover:opacity-100" />
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
                                            {/* <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent-secondary">Available for selected work</span> */}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                                <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-accent"><span className="h-px w-10 bg-accent" /> Profile / 01</div>
                                <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-7xl">Engineering systems that feel <span className="font-serif font-light italic text-accent-secondary">considered.</span></h1>
                                <p className="mt-7 max-w-2xl text-base leading-8 text-muted-text">{personalInfo.summary}</p>
                                <div className="mt-8 flex flex-wrap gap-3">
                                    <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#F5F5F5] px-5 py-3 text-[11px] font-bold uppercase tracking-widest text-[#090909] transition hover:bg-accent-secondary">Start a conversation <ArrowUpRight className="h-4 w-4" /></Link>
                                    <a href={personalInfo.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-[11px] font-bold uppercase tracking-widest text-primary-text transition hover:border-accent hover:text-accent">GitHub <ExternalLink className="h-3.5 w-3.5" /></a>
                                    <a href="https://resume-generator-d6vd.onrender.com/download" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-3 text-[11px] font-bold uppercase tracking-widest text-accent-secondary transition hover:-translate-y-0.5 hover:border-accent hover:bg-accent/20"><Download className="h-4 w-4" /> Download resume</a>
                                </div>
                                <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 font-mono text-[11px] uppercase tracking-widest text-muted-text"><span className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-accent" /> {personalInfo.location}</span><span className="inline-flex items-center gap-2"><Globe2 className="h-3.5 w-3.5 text-accent" /> {personalInfo.website.replace('https://', '')}</span></div>
                            </motion.div>
                        </div>
                    </Container>
                </section>

                <section className="border-b border-white/5 py-20 md:py-28">
                    <Container>
                        <div className="mb-12 flex items-end justify-between gap-6"><div><p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">Capabilities / 02</p><h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl">The working <span className="font-serif font-light italic text-accent-secondary">stack.</span></h2></div><Terminal className="hidden h-10 w-10 text-white/15 sm:block" /></div>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {skillCategories.map((category, index) => <motion.div key={category.category} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="border border-white/8 bg-[#101010]/70 p-6"><div className="mb-5 flex items-center justify-between"><h3 className="font-mono text-xs font-bold uppercase tracking-widest text-primary-text">{category.category}</h3><span className="text-xs text-accent">0{index + 1}</span></div><div className="flex flex-wrap gap-2">{category.skills.map((skill) => <span key={skill.name} className="rounded-full border border-white/8 px-3 py-2 text-xs text-muted-text">{skill.name}</span>)}</div></motion.div>)}
                        </div>
                    </Container>
                </section>

                <section className="border-b border-white/5 bg-[#0c0c0c] py-20 md:py-28">
                    <Container>
                        <div className="grid gap-16 lg:grid-cols-[1.35fr_0.65fr]">
                            <div><p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">Experience / 03</p><h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl">A record of <span className="font-serif font-light italic text-accent-secondary">shipping.</span></h2><div className="mt-10 space-y-4">{workExperiences.map((experience, index) => <motion.article key={`${experience.company}-${experience.role}`} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="border-l border-accent/50 pl-6 md:pl-8"><div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="font-display text-xl font-bold">{experience.role}</h3><span className="font-mono text-[10px] uppercase tracking-widest text-accent">{experience.period}</span></div><p className="mt-1 text-sm text-accent-secondary">{experience.company} <span className="text-muted-text">/ {experience.location}</span></p><ul className="mt-4 space-y-2">{experience.highlights.map((highlight) => <li key={highlight} className="flex gap-2 text-sm leading-6 text-muted-text"><CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-accent" />{highlight}</li>)}</ul></motion.article>)}</div></div>
                            <div className="space-y-10"><div><div className="mb-5 flex items-center gap-3"><GraduationCap className="h-4 w-4 text-accent" /><p className="font-mono text-xs uppercase tracking-widest">Education</p></div><div className="space-y-4">{educations.map((education) => <div key={education.degree} className="border-b border-white/8 pb-4"><p className="font-display font-bold">{education.degree}</p><p className="mt-1 text-xs text-muted-text">{education.institution} / {education.period}</p></div>)}</div></div><div><div className="mb-5 flex items-center gap-3"><Languages className="h-4 w-4 text-accent" /><p className="font-mono text-xs uppercase tracking-widest">Languages</p></div><div className="flex flex-wrap gap-2"><span className="rounded-full border border-white/10 px-3 py-2 text-xs text-muted-text">Bengali <b className="text-accent-secondary">Native</b></span><span className="rounded-full border border-white/10 px-3 py-2 text-xs text-muted-text">English <b className="text-accent-secondary">Fluent</b></span></div></div></div>
                        </div>
                    </Container>
                </section>

                <GithubRepositories profile />

                <section className="py-20 md:py-28"><Container><div className="mb-12 flex items-end justify-between gap-6"><div><p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">Credentials / 04</p><h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Proof of <span className="font-serif font-light italic text-accent-secondary">curiosity.</span></h2></div><Award className="hidden h-10 w-10 text-white/15 sm:block" /></div><div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">{certifications.map((certification, index) => <a key={certification.name} href={certification.url} target="_blank" rel="noreferrer" className="group border border-white/8 bg-[#101010] p-5 transition hover:-translate-y-1 hover:border-accent/50"><div className="flex items-start justify-between gap-4"><span className="font-mono text-[10px] uppercase tracking-widest text-accent">0{index + 1} / {certification.issuer}</span><ExternalLink className="h-4 w-4 text-muted-text transition group-hover:text-accent" /></div><h3 className="mt-7 font-display text-lg font-bold text-primary-text">{certification.name}</h3><p className="mt-2 text-xs text-muted-text">Completed {certification.completedDate}</p></a>)}</div></Container></section>
            </main>
            <Footer />
        </div>
    );
}
