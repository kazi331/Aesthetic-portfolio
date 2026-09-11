'use client';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Container from '@/components/shared/Container';
import { personalInfo } from '@/lib/data';
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  RotateCcw,
  Send
} from 'lucide-react';
import React, { FormEvent, useState } from 'react';

export default function ContactView() {
  const [revealedContact, setRevealedContact] = useState<'email' | 'phone' | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState<string>('');
  const [isCredentialsMissing, setIsCredentialsMissing] = useState(false);

  const revealContact = (contact: 'email' | 'phone') => {
    setRevealedContact(contact);
  };

  const handleContactKeyDown = (
    event: React.KeyboardEvent<HTMLSpanElement>,
    contact: 'email' | 'phone'
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      revealContact(contact);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setFeedback('');
    setIsCredentialsMissing(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        if (data.configured === false) {
          setIsCredentialsMissing(true);
        }
        setStatus('error');
        setFeedback(data.error || 'Failed to deliver message. Please try again.');
        return;
      }

      setStatus('success');
      setFeedback(data.message || 'Message sent successfully! Thank you for reaching out.');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Network error while transmitting message.';
      setStatus('error');
      setFeedback(msg);
    }
  };

  const handleMailtoFallback = () => {
    const subject = formData.subject || 'Project inquiry';
    const body = `From: ${formData.name} <${formData.email}>\n\n${formData.message}`;
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setStatus('idle');
    setFeedback('');
    setIsCredentialsMissing(false);
  };

  return (
    <div className="min-h-screen bg-[#090909] text-primary-text flex flex-col justify-between">
      <Navbar />

      <main className="pt-36 md:pt-44 flex-1">
        <Container>
          <div className="grid gap-16 pb-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            {/* Left Column: Direct info & links */}
            <div>
              <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-accent">
                <span className="h-px w-10 bg-accent" /> Contact / 01
              </p>
              <h1 className="mt-6 font-display text-6xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-8xl">
                Let&apos;s make the next thing{' '}
                <span className="font-serif font-light italic text-accent-secondary">useful.</span>
              </h1>
              <p className="mt-8 max-w-md text-base leading-8 text-muted-text">
                Have a product to shape, a system to untangle, or a frontend that needs more care? Send
                a note and I&apos;ll get back to you with a thoughtful next step.
              </p>

              <div className="mt-10 space-y-5 border-t border-white/10 pt-7">
                {revealedContact === 'email' ? (
                  <a
                    id="contact-email-revealed"
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-4 text-sm text-muted-text transition hover:text-accent"
                  >
                    <Mail className="h-4 w-4 text-accent" /> {personalInfo.email}
                  </a>
                ) : (
                  <span
                    id="contact-email-masked"
                    role="button"
                    tabIndex={0}
                    title="Click to reveal"
                    aria-label="Click to reveal email address"
                    onClick={() => revealContact('email')}
                    onKeyDown={(event) => handleContactKeyDown(event, 'email')}
                    className="flex cursor-pointer items-center gap-4 text-sm text-muted-text transition hover:text-accent"
                  >
                    <Mail className="h-4 w-4 text-accent" /> k******dev@gmail.com
                  </span>
                )}

                {revealedContact === 'phone' ? (
                  <a
                    id="contact-phone-revealed"
                    href={`tel:${personalInfo.phone}`}
                    className="flex items-center gap-4 text-sm text-muted-text transition hover:text-accent"
                  >
                    <Phone className="h-4 w-4 text-accent" /> {personalInfo.phone}
                  </a>
                ) : (
                  <span
                    id="contact-phone-masked"
                    role="button"
                    tabIndex={0}
                    title="Click to reveal"
                    aria-label="Click to reveal phone number"
                    onClick={() => revealContact('phone')}
                    onKeyDown={(event) => handleContactKeyDown(event, 'phone')}
                    className="flex cursor-pointer items-center gap-4 text-sm text-muted-text transition hover:text-accent"
                  >
                    <Phone className="h-4 w-4 text-accent" /> +8801612-*****
                  </span>
                )}

                <div id="contact-location" className="flex items-center gap-4 text-sm text-muted-text">
                  <MapPin className="h-4 w-4 text-accent" /> {personalInfo.location}
                </div>
              </div>

              <div className="mt-10 flex gap-3">
                <a
                  id="contact-github-link"
                  aria-label="GitHub"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 p-3 text-muted-text transition hover:border-accent hover:text-accent"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  id="contact-linkedin-link"
                  aria-label="LinkedIn"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 p-3 text-muted-text transition hover:border-accent hover:text-accent"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  id="contact-website-link"
                  aria-label="Website"
                  href={personalInfo.website}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 p-3 text-muted-text transition hover:border-accent hover:text-accent"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form with EmailJS backend */}
            <div className="relative">
              <div className="absolute -inset-5 bg-[radial-gradient(circle_at_50%_50%,rgba(78,133,191,0.12),transparent_65%)]" />

              <div
                id="contact-form-container"
                className="relative border border-white/10 bg-[#111111] p-6 sm:p-10 rounded-3xl shadow-2xl backdrop-blur-sm"
              >
                {status === 'success' ? (
                  <div id="contact-success-panel" className="py-12 text-center space-y-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold font-display text-white">
                        Transmission Successful
                      </h3>
                      <p className="text-sm text-muted-text max-w-md mx-auto leading-relaxed">
                        {feedback}
                      </p>
                    </div>
                    <div className="pt-4">
                      <button
                        id="contact-send-another-btn"
                        type="button"
                        onClick={handleResetForm}
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-xs font-mono uppercase tracking-widest text-white hover:bg-white/5 transition-all cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" /> Send Another Note
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-5">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-accent">
                          Project brief
                        </p>
                        <p className="mt-2 text-sm text-muted-text">
                          A few details are enough to begin. Messages are delivered directly via EmailJS.
                        </p>
                      </div>
                      <Send className="h-5 w-5 text-white/20" />
                    </div>

                    {status === 'error' && (
                      <div
                        id="contact-error-alert"
                        className="mb-8 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-xs font-mono space-y-3"
                      >
                        <div className="flex items-start gap-2.5 text-red-400">
                          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                          <div className="leading-relaxed">{feedback}</div>
                        </div>

                        {isCredentialsMissing && (
                          <div className="pt-2 border-t border-red-500/15 text-muted-text space-y-2 font-sans">
                            <p className="text-xs">
                              You can add your credentials to <code className="text-accent bg-white/5 px-1 py-0.5 rounded">EMAILJS_SERVICE_ID</code>, <code className="text-accent bg-white/5 px-1 py-0.5 rounded">EMAILJS_TEMPLATE_ID</code>, and <code className="text-accent bg-white/5 px-1 py-0.5 rounded">EMAILJS_PUBLIC_KEY</code>.
                            </p>
                            <button
                              id="contact-mailto-fallback-btn"
                              type="button"
                              onClick={handleMailtoFallback}
                              className="inline-flex items-center gap-1.5 text-xs text-white font-mono uppercase tracking-wider underline hover:text-accent transition-colors cursor-pointer"
                            >
                              Send via default email app instead <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="grid gap-7 sm:grid-cols-2">
                      <label className="block">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-text">
                          Your name *
                        </span>
                        <input
                          id="contact-name-input"
                          required
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-3 w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-white/20 focus:border-accent"
                          placeholder="Jane Smith"
                        />
                      </label>

                      <label className="block">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-text">
                          Email *
                        </span>
                        <input
                          id="contact-email-input"
                          required
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-3 w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-white/20 focus:border-accent"
                          placeholder="jane@company.com"
                        />
                      </label>
                    </div>

                    <label className="mt-8 block">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-text">
                        Subject
                      </span>
                      <input
                        id="contact-subject-input"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        className="mt-3 w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-white/20 focus:border-accent"
                        placeholder="A new product experience"
                      />
                    </label>

                    <label className="mt-8 block">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-text">
                        Message *
                      </span>
                      <textarea
                        id="contact-message-input"
                        required
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-3 w-full resize-none border-b border-white/15 bg-transparent px-0 py-3 text-sm leading-7 outline-none transition placeholder:text-white/20 focus:border-accent"
                        placeholder="Tell me what you are building..."
                      />
                    </label>

                    <div className="mt-9 flex flex-wrap items-center gap-5">
                      <button
                        id="contact-submit-btn"
                        type="submit"
                        disabled={status === 'loading'}
                        className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-[11px] font-bold uppercase tracking-widest transition cursor-pointer ${
                          status === 'loading'
                            ? 'bg-white/20 text-white/50 cursor-not-allowed'
                            : 'bg-[#F5F5F5] text-[#090909] hover:bg-accent-secondary'
                        }`}
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            <span>Transmitting...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="h-3.5 w-3.5" />
                          </>
                        )}
                      </button>

                      {status === 'idle' && (
                        <span className="text-[11px] font-mono text-muted-text">
                          Direct transmission via EmailJS
                        </span>
                      )}
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
