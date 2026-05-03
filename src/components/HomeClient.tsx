"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 1v3M10 16v3M1 10h3M16 10h3M3.22 3.22l2.12 2.12M14.66 14.66l2.12 2.12M3.22 16.78l2.12-2.12M14.66 5.34l2.12-2.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Targeted Prospecting",
    desc: "Precision ICP mapping and multi-source data enrichment to identify high-value accounts with the strongest conversion potential.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 16.5C4 16.5 5.5 14 10 14C14.5 14 16 16.5 16 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="10" cy="7.5" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14.5 3.5C15.8 4.4 16.5 5.8 16.5 7.5C16.5 9.2 15.8 10.6 14.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Cold Calling Execution",
    desc: "Structured calling sequences delivered by trained specialists using data-driven scripts optimised per vertical and decision-maker profile.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 10L8 15L17 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Lead Qualification",
    desc: "BANT and MEDDIC-based qualification frameworks ensuring only sales-ready opportunities advance to your revenue team.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="4" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 4V3M13 4V3M3 8h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 11.5h2M11 11.5h2M7 14h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Appointment Setting",
    desc: "Confirmed meetings delivered into your CRM with qualified context, ensuring your team enters every call prepared to close.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 14l4-8 4 5 2-3 2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Messaging Optimisation",
    desc: "Continuous A/B testing of value propositions, subject lines, and call frameworks to improve conversion at every pipeline stage.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 6v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Performance Tracking",
    desc: "Real-time dashboards and weekly reporting on call volume, conversion rates, pipeline velocity, and revenue attribution.",
  },
];

const process = [
  { step: "01", title: "Business Analysis", desc: "Deep-dive into your commercial model, existing pipeline, ICP, and competitive positioning." },
  { step: "02", title: "Target Audience", desc: "Building precise account and contact lists with validated data across your total addressable market." },
  { step: "03", title: "Strategy Design", desc: "Crafting outbound playbooks, messaging frameworks, and multi-channel sequence architecture." },
  { step: "04", title: "Execution", desc: "Deploying trained specialists across calling, email, and LinkedIn with full CRM integration." },
  { step: "05", title: "Qualification", desc: "Screening, scoring, and advancing only opportunities that meet agreed qualification criteria." },
  { step: "06", title: "Optimisation", desc: "Weekly performance reviews with iterative improvements to conversion rates and pipeline quality." },
];

const stats = [
  { value: "340+", label: "Qualified Opportunities Delivered" },
  { value: "92%", label: "Client Retention Rate" },
  { value: "18", label: "Markets Activated" },
  { value: "4.2×", label: "Average Pipeline ROI" },
];

export default function HomeClient() {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionsRef.current?.querySelectorAll(".animate-on-scroll");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionsRef}>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-purple-50/60" />
        {/* Orbs */}
        <div className="absolute top-1/4 right-[8%] w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #9d2fda 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/4 left-[5%] w-[350px] h-[350px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #d42881 0%, transparent 70%)" }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/[0.04] mb-8 animate-on-scroll">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[0.75rem] font-semibold tracking-[0.08em] uppercase text-primary" style={{fontFamily: 'var(--font-display)'}}>
                Revenue & Outbound Infrastructure
              </span>
            </div>

            <h1
              className="text-[clamp(2.4rem,5vw,3.8rem)] font-bold leading-[1.1] tracking-[-0.03em] text-gray-900 mb-6 animate-on-scroll delay-100"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Building Scalable Outbound Systems for{" "}
              <span className="gradient-text">Predictable Revenue Growth.</span>
            </h1>

            <p className="text-[1.05rem] text-gray-500 leading-relaxed max-w-xl mb-10 animate-on-scroll delay-200">
              Zookia engineers outbound infrastructure that generates qualified pipeline at scale — combining precision prospecting, structured calling, and data-driven optimisation.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 animate-on-scroll delay-300">
              <Link href="/contact" className="btn-primary px-7 py-3.5 rounded-[8px] text-[0.9rem] inline-flex items-center justify-center gap-2">
                Schedule a Consultation
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M2 7.5H13M9 3.5L13 7.5L9 11.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/clients" className="btn-outline px-7 py-3.5 rounded-[8px] text-[0.9rem] inline-flex items-center justify-center gap-2">
                View Case Studies
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 animate-on-scroll delay-400">
              {stats.map((s) => (
                <div key={s.label} className="stat-block">
                  <div className="text-[1.75rem] font-bold gradient-text mb-1" style={{fontFamily: 'var(--font-display)'}}>
                    {s.value}
                  </div>
                  <div className="text-[0.75rem] text-gray-500 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-16">
            <p className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-primary mb-3 animate-on-scroll" style={{fontFamily: 'var(--font-display)'}}>
              Our Capabilities
            </p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight max-w-lg animate-on-scroll delay-100" style={{fontFamily: 'var(--font-display)'}}>
                End-to-End Outbound Infrastructure
              </h2>
              <p className="text-gray-500 max-w-sm text-[0.9rem] leading-relaxed animate-on-scroll delay-200">
                Every component of your outbound engine, designed, deployed, and managed to deliver measurable pipeline.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`card-hover p-7 rounded-[14px] border border-gray-100 bg-white shadow-card animate-on-scroll delay-${(i % 3 + 1) * 100}`}
              >
                <div className="w-10 h-10 rounded-[8px] bg-gradient-brand-soft flex items-center justify-center text-primary mb-5">
                  {f.icon}
                </div>
                <h3 className="font-bold text-[1rem] text-gray-900 mb-2" style={{fontFamily: 'var(--font-display)'}}>
                  {f.title}
                </h3>
                <p className="text-[0.875rem] text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-28 bg-[#f9f8fc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-16">
            <p className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-primary mb-3 animate-on-scroll" style={{fontFamily: 'var(--font-display)'}}>
              How It Works
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight animate-on-scroll delay-100" style={{fontFamily: 'var(--font-display)'}}>
              A Structured Path to Pipeline
            </h2>
          </div>

          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-[28px] left-[calc(100%/12)] right-[calc(100%/12)] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((p, i) => (
                <div key={p.step} className={`animate-on-scroll delay-${(i % 3 + 1) * 100}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full border border-primary/20 bg-white flex items-center justify-center shadow-sm">
                      <span className="step-number">{p.step}</span>
                    </div>
                    <div className="h-px flex-1 bg-primary/10 lg:hidden" />
                  </div>
                  <h3 className="font-bold text-[1rem] text-gray-900 mb-2" style={{fontFamily: 'var(--font-display)'}}>
                    {p.title}
                  </h3>
                  <p className="text-[0.875rem] text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLIENTS STRIP ─── */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-center text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-gray-400 mb-10 animate-on-scroll" style={{fontFamily: 'var(--font-display)'}}>
            Trusted by Growth-Stage and Enterprise Companies
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center animate-on-scroll delay-100">
            {["Nexora", "Veridian", "Stratline", "Arkive", "Lumex", "Pointra"].map((name) => (
              <div key={name} className="h-12 rounded-[8px] bg-gray-50 border border-gray-100 flex items-center justify-center">
                <span className="text-[0.8rem] font-semibold text-gray-400 tracking-wide" style={{fontFamily: 'var(--font-display)'}}>
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, #0a0a0f 0%, #12071e 50%, #1a0a14 100%)'}} />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #9d2fda 0%, transparent 70%)" }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-primary mb-4 animate-on-scroll" style={{fontFamily: 'var(--font-display)'}}>
            Get Started
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-tight text-white mb-6 animate-on-scroll delay-100" style={{fontFamily: 'var(--font-display)'}}>
            Build a Predictable Pipeline.
          </h2>
          <p className="text-white/50 max-w-lg mx-auto mb-10 text-[0.95rem] leading-relaxed animate-on-scroll delay-200">
            Partner with a team that treats outbound as infrastructure — not a campaign. Consistent, qualified pipeline starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-on-scroll delay-300">
            <Link href="/contact" className="btn-primary px-8 py-4 rounded-[8px] text-[0.9rem] inline-flex items-center gap-2">
              Discuss Your Growth Objectives
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M2 7.5H13M9 3.5L13 7.5L9 11.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/solutions" className="px-8 py-4 rounded-[8px] text-[0.9rem] border border-white/15 text-white hover:bg-white/[0.06] transition-colors inline-flex items-center gap-2">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
