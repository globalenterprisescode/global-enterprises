'use client';

import { FormEvent, useState } from 'react';
import { supabase } from '../../lib/supabase';
import type { LandingProject } from '../../data/landingProjects';

interface LandingEnquiryFormProps {
  project: LandingProject;
}

export default function LandingEnquiryForm({ project }: LandingEnquiryFormProps) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', configuration: '', budget: '', timeline: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const update = (field: keyof typeof form, value: string) => setForm((current) => ({ ...current, [field]: value }));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setError('');

    const requirement = [
      `Landing page: ${project.name}`,
      `Source: ${typeof window !== 'undefined' ? window.location.href : project.slug}`,
      `Configuration: ${form.configuration || 'Not specified'}`,
      `Budget: ${form.budget || 'Not specified'}`,
      `Buying timeline: ${form.timeline || 'Not specified'}`,
    ].join('\n');

    const { error: submitError } = await supabase.from('enquiries').insert([{ name: form.name, phone: form.phone, email: form.email, requirement }]);

    if (submitError) {
      setError('We could not send your enquiry. Please call or WhatsApp the project expert directly.');
      setStatus('error');
      return;
    }

    setForm({ name: '', phone: '', email: '', configuration: '', budget: '', timeline: '' });
    setStatus('success');
  };

  return (
    <section id="enquire" className="relative overflow-hidden bg-[#101713] px-5 py-20 text-white sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d4aa63]">Private access</p>
          <h2 className="max-w-md text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Get the latest price and availability.</h2>
          <p className="mt-5 max-w-md text-base leading-7 text-white/65">Tell us what you are looking for. A project specialist will share the latest details and help you plan the next step.</p>
          <p className="mt-8 text-sm leading-6 text-white/45">Your details are used only to respond to this enquiry.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 sm:grid-cols-2 sm:p-8">
          <label className="grid gap-2 text-sm text-white/75">Full name *<input required value={form.name} onChange={(event) => update('name', event.target.value)} className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none ring-[#d4aa63] placeholder:text-white/30 focus:ring-2" placeholder="Your name" /></label>
          <label className="grid gap-2 text-sm text-white/75">Mobile number *<input required type="tel" value={form.phone} onChange={(event) => update('phone', event.target.value)} className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none ring-[#d4aa63] placeholder:text-white/30 focus:ring-2" placeholder="+91 98..." /></label>
          <label className="grid gap-2 text-sm text-white/75 sm:col-span-2">Email address *<input required type="email" value={form.email} onChange={(event) => update('email', event.target.value)} className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none ring-[#d4aa63] placeholder:text-white/30 focus:ring-2" placeholder="you@example.com" /></label>
          <label className="grid gap-2 text-sm text-white/75">Preferred configuration<select value={form.configuration} onChange={(event) => update('configuration', event.target.value)} className="rounded-xl border border-white/10 bg-[#18231d] px-4 py-3 text-white outline-none ring-[#d4aa63] focus:ring-2"><option value="">Choose one</option>{project.configurations.map((item) => <option key={item.name}>{item.name}</option>)}<option>Not sure</option></select></label>
          <label className="grid gap-2 text-sm text-white/75">Budget<select value={form.budget} onChange={(event) => update('budget', event.target.value)} className="rounded-xl border border-white/10 bg-[#18231d] px-4 py-3 text-white outline-none ring-[#d4aa63] focus:ring-2"><option value="">Choose one</option><option>₹3-3.5 Cr</option><option>₹3.5-4 Cr</option><option>₹4 Cr+</option><option>Exploring</option></select></label>
          <label className="grid gap-2 text-sm text-white/75 sm:col-span-2">Buying timeline<select value={form.timeline} onChange={(event) => update('timeline', event.target.value)} className="rounded-xl border border-white/10 bg-[#18231d] px-4 py-3 text-white outline-none ring-[#d4aa63] focus:ring-2"><option value="">Choose one</option><option>Immediately</option><option>1-3 months</option><option>3-6 months</option><option>Just exploring</option></select></label>
          {status === 'error' && <p className="sm:col-span-2 rounded-xl bg-red-500/15 p-3 text-sm text-red-200">{error}</p>}
          {status === 'success' && <p className="sm:col-span-2 rounded-xl bg-emerald-500/15 p-3 text-sm text-emerald-200">Thanks. A project specialist will be in touch shortly.</p>}
          <button disabled={status === 'loading'} className="sm:col-span-2 rounded-xl bg-[#d4aa63] px-5 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#101713] transition hover:bg-[#edc77e] disabled:cursor-wait disabled:opacity-60">{status === 'loading' ? 'Sending...' : 'Get project details'}</button>
        </form>
      </div>
    </section>
  );
}
