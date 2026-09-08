'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { LandingProject } from '../../data/landingProjects';
import LandingEnquiryForm from './LandingEnquiryForm';

interface LandingPageTemplateProps {
  project: LandingProject;
}

export default function LandingPageTemplate({ project }: LandingPageTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const isRose = project.accent === 'rose';
  const accent = isRose ? '#e5a38b' : '#d4aa63';
  const whatsappMessage = encodeURIComponent(`Hi, I am interested in ${project.name}. Please share the latest price, configuration and availability details.`);

  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#172019] selection:bg-[#d4aa63] selection:text-[#101713]">
      <section className="relative isolate min-h-[88vh] overflow-hidden bg-[#101713] text-white">
        <Image src={project.heroImage} alt={`${project.name} project overview`} fill priority className="object-cover object-center opacity-70" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,18,13,.94)_0%,rgba(9,18,13,.72)_44%,rgba(9,18,13,.18)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(9,18,13,.9),transparent_45%)]" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-end px-5 pb-16 pt-24 sm:px-8 lg:px-12 lg:pb-24">
          <div className="max-w-2xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: accent }}>{project.eyebrow}</p>
            <h1 className="max-w-2xl text-5xl font-semibold leading-[.95] tracking-[-0.055em] sm:text-7xl">{project.name}</h1>
            <p className="mt-6 max-w-xl text-xl leading-8 text-white/80 sm:text-2xl">{project.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/75"><span className="border-l-2 pl-3" style={{ borderColor: accent }}>{project.location}</span><span className="border-l-2 pl-3" style={{ borderColor: accent }}>{project.price}*</span></div>
            <div className="mt-10 flex flex-wrap gap-3"><a href="#enquire" className="rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#101713] transition hover:brightness-110" style={{ backgroundColor: accent }}>Register interest</a><a href={`https://wa.me/919844222500?text=${whatsappMessage}`} target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:border-white">WhatsApp expert</a></div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#172019]/10 bg-[#172019] text-white"><div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-white/10 sm:grid-cols-4 sm:divide-y-0">{project.highlights.map((item) => <div key={item.label} className="px-5 py-7 sm:px-8"><p className="text-2xl font-semibold tracking-[-0.03em]" style={{ color: accent }}>{item.value}</p><p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/50">{item.label}</p></div>)}</div></section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:px-12 lg:py-28"><div><p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: isRose ? '#a25d4a' : '#9b6d27' }}>The project story</p><h2 className="mt-4 max-w-md text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Space for a more considered way of living.</h2></div><div className="max-w-2xl text-lg leading-8 text-[#172019]/65">{project.story.map((paragraph) => <p key={paragraph} className="mb-5 last:mb-0">{paragraph}</p>)}<a href="#residences" className="mt-6 inline-flex border-b pb-1 text-sm font-bold uppercase tracking-[0.14em]" style={{ borderColor: accent }}>Explore residences</a></div></section>

      <section id="residences" className="bg-[#e8e3d9] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: isRose ? '#a25d4a' : '#9b6d27' }}>Residence collection</p><div className="mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Designed around how you want to live.</h2><p className="max-w-sm text-sm leading-6 text-[#172019]/60">Indicative pricing. Contact us for the latest price sheet, availability and applicable charges.</p></div><div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[#172019]/10 bg-[#172019]/10 md:grid-cols-2">{project.configurations.map((item) => <article key={item.name} className="bg-[#f4f1ea] p-7 sm:p-9"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#172019]/45">{item.name}</p><p className="mt-8 text-3xl font-semibold tracking-[-0.03em]">{item.size}</p><p className="mt-3 text-sm font-medium" style={{ color: isRose ? '#a25d4a' : '#9b6d27' }}>{item.price}*</p><a href="#enquire" className="mt-8 inline-block text-xs font-bold uppercase tracking-[0.15em] text-[#172019]/60 hover:text-[#172019]">Request availability →</a></article>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]"><div><p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: isRose ? '#a25d4a' : '#9b6d27' }}>A life with more in it</p><h2 className="mt-4 max-w-md text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Amenities that make the address feel complete.</h2></div><div className="grid gap-8 sm:grid-cols-3">{project.amenities.map((item, index) => <article key={item.title} className="border-t-2 pt-5" style={{ borderColor: accent }}><span className="text-xs font-bold" style={{ color: accent }}>0{index + 1}</span><h3 className="mt-8 text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-[#172019]/60">{item.description}</p></article>)}</div></div></section>

      <section className="bg-[#172019] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: accent }}>A connected address</p><h2 className="mt-4 max-w-lg text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Close to the places that shape South Bengaluru.</h2></div><div className="border-l border-white/20 pl-6 text-lg leading-8 text-white/65"><p>{project.location} offers access to the city&apos;s growing residential, retail and infrastructure corridor.</p><p className="mt-5 text-sm uppercase tracking-[0.14em] text-white/45">Speak with an expert for the latest location presentation and project updates.</p></div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: isRose ? '#a25d4a' : '#9b6d27' }}>Questions, answered</p><h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Make your next move with clarity.</h2></div><div className="divide-y divide-[#172019]/15 border-y border-[#172019]/15">{project.faq.map((item, index) => <div key={item.question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between gap-6 py-5 text-left text-base font-semibold"><span>{item.question}</span><span className="text-2xl font-light" style={{ color: accent }}>{openFaq === index ? '−' : '+'}</span></button>{openFaq === index && <p className="max-w-2xl pb-5 pr-10 text-sm leading-6 text-[#172019]/60">{item.answer}</p>}</div>)}</div></div></section>

      <LandingEnquiryForm project={project} />
      <footer className="bg-[#0a100d] px-5 py-8 text-center text-xs leading-6 text-white/40 sm:px-8"><p>{project.disclaimer}</p><p className="mt-2">© {new Date().getFullYear()} Global Enterprises. Project information is for enquiry purposes only.</p></footer>
      <div className="fixed inset-x-4 bottom-4 z-20 flex gap-2 sm:inset-x-auto sm:bottom-6 sm:right-6"><a href={`tel:9844222500`} className="rounded-full bg-white px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#172019] shadow-xl">Call expert</a><a href={`https://wa.me/919844222500?text=${whatsappMessage}`} target="_blank" rel="noreferrer" className="rounded-full px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#101713] shadow-xl" style={{ backgroundColor: accent }}>WhatsApp</a></div>
    </main>
  );
}
