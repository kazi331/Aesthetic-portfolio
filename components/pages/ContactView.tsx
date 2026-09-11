'use client';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Container from '@/components/shared/Container';
import { personalInfo } from '@/lib/data';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function ContactView() {
    const [sent, setSent] = useState(false);
    const [revealedContact, setRevealedContact] = useState<'email' | 'phone' | null>(null);

    const revealContact = (contact: 'email' | 'phone') => {
        setRevealedContact(contact);
    };

    const handleContactKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>, contact: 'email' | 'phone') => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            revealContact(contact);
        }
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const subject = String(form.get('subject') || 'Project inquiry');
        const message = String(form.get('message') || '');
        const sender = String(form.get('email') || '');
        window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${sender}\n\n${message}`)}`;
        setSent(true);
    };

    return (
        <div className="min-h-screen bg-[#090909] text-primary-text">
            <Navbar />
            <main className="pt-36 md:pt-44">
                <Container>
                    <div className="grid gap-16 pb-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
                        <div>
                            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-accent"><span className="h-px w-10 bg-accent" /> Contact / 01</p>
                            <h1 className="mt-6 font-display text-6xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-8xl">Let&apos;s make the next thing <span className="font-serif font-light italic text-accent-secondary">useful.</span></h1>
                            <p className="mt-8 max-w-md text-base leading-8 text-muted-text">Have a product to shape, a system to untangle, or a frontend that needs more care? Send a note and I&apos;ll get back to you with a thoughtful next step.</p>
                            <div className="mt-10 space-y-5 border-t border-white/10 pt-7">
                                {revealedContact === 'email' ? (
                                    <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 text-sm text-muted-text transition hover:text-accent"><Mail className="h-4 w-4 text-accent" /> {personalInfo.email}</a>
                                ) : (
                                    <span role="button" tabIndex={0} title="Click to reveal" aria-label="Click to reveal email address" onClick={() => revealContact('email')} onKeyDown={(event) => handleContactKeyDown(event, 'email')} className="flex cursor-pointer items-center gap-4 text-sm text-muted-text transition hover:text-accent"><Mail className="h-4 w-4 text-accent" /> k******dev@gmail.com</span>
                                )}
                                {revealedContact === 'phone' ? (
                                    <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-4 text-sm text-muted-text transition hover:text-accent"><Phone className="h-4 w-4 text-accent" /> {personalInfo.phone}</a>
                                ) : (
                                    <span role="button" tabIndex={0} title="Click to reveal" aria-label="Click to reveal phone number" onClick={() => revealContact('phone')} onKeyDown={(event) => handleContactKeyDown(event, 'phone')} className="flex cursor-pointer items-center gap-4 text-sm text-muted-text transition hover:text-accent"><Phone className="h-4 w-4 text-accent" /> +8801612-*****</span>
                                )}
                                <div className="flex items-center gap-4 text-sm text-muted-text"><MapPin className="h-4 w-4 text-accent" /> {personalInfo.location}</div>
                            </div>
                            <div className="mt-10 flex gap-3"><a aria-label="GitHub" href={personalInfo.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 text-muted-text transition hover:border-accent hover:text-accent"><Github className="h-4 w-4" /></a><a aria-label="LinkedIn" href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 text-muted-text transition hover:border-accent hover:text-accent"><Linkedin className="h-4 w-4" /></a><a aria-label="Website" href={personalInfo.website} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 text-muted-text transition hover:border-accent hover:text-accent"><ArrowUpRight className="h-4 w-4" /></a></div>
                        </div>
                        <div className="relative"><div className="absolute -inset-5 bg-[radial-gradient(circle_at_50%_50%,rgba(78,133,191,0.12),transparent_65%)]" /><form onSubmit={handleSubmit} className="relative border border-white/10 bg-[#111111] p-6 sm:p-10"><div className="mb-10 flex items-center justify-between border-b border-white/10 pb-5"><div><p className="font-mono text-xs uppercase tracking-widest text-accent">Project brief</p><p className="mt-2 text-sm text-muted-text">A few details are enough to begin.</p></div><Send className="h-5 w-5 text-white/20" /></div><div className="grid gap-7 sm:grid-cols-2"><label className="block"><span className="font-mono text-[10px] uppercase tracking-widest text-muted-text">Your name</span><input required name="name" type="text" className="mt-3 w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-white/20 focus:border-accent" placeholder="Jane Smith" /></label><label className="block"><span className="font-mono text-[10px] uppercase tracking-widest text-muted-text">Email</span><input required name="email" type="email" className="mt-3 w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-white/20 focus:border-accent" placeholder="jane@company.com" /></label></div><label className="mt-8 block"><span className="font-mono text-[10px] uppercase tracking-widest text-muted-text">Subject</span><input required name="subject" type="text" className="mt-3 w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-white/20 focus:border-accent" placeholder="A new product experience" /></label><label className="mt-8 block"><span className="font-mono text-[10px] uppercase tracking-widest text-muted-text">Message</span><textarea required name="message" rows={6} className="mt-3 w-full resize-none border-b border-white/15 bg-transparent px-0 py-3 text-sm leading-7 outline-none transition placeholder:text-white/20 focus:border-accent" placeholder="Tell me what you are building..." /></label><div className="mt-9 flex flex-wrap items-center gap-5"><button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[#F5F5F5] px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-[#090909] transition hover:bg-accent-secondary">Open email draft <ArrowUpRight className="h-4 w-4" /></button>{sent && <span className="text-xs text-accent-secondary">Your email client should be opening now.</span>}</div></form></div>
                    </div>
                </Container>
            </main>
            <Footer />
        </div>
    );
}
