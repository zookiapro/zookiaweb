"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const solutions = [
  {
    id: "infrastructure",
    tag: "01",
    title: "Outbound Infrastructure",
    headline: "The operational backbone of your revenue machine.",
    what: "A complete outbound function built around your commercial model — including ICP frameworks, data infrastructure, CRM architecture, and specialist deployment.",
    outcome: "A fully operational outbound engine capable of running continuously, scaling with your targets, and integrating with your existing revenue team.",
    points: [
      "ICP and TAM definition",
      "Multi-source data enrichment",
      "CRM and tech stack integration",
      "Specialist recruitment and training",
      "KPI framework and reporting architecture",
    ],
  },
  {
    id: "cold-calling",
    tag: "02",
    title: "Cold Calling Execution",
    headline: "Human-led, data-driven calling at scale.",
    what: "Structured outbound calling programmes executed by trained commercial specialists. Script design, objection handling, and call frameworks are tailored to your vertical and buyer profiles.",
    outcome: "Increased contact rates, improved conversation quality, and a higher ratio of qualified conversations to confirmed next steps.",
    points: [
      "Specialist caller teams per vertical",
      "Script and objection framework design",
      "Call recording and quality assurance",
      "Conversion rate benchmarking",
      "Weekly performance reporting",
    ],
  },
  {
    id: "lead-generation",
    tag: "03",
    title: "Lead Generation",
    headline: "Building a continuous, qualified prospect pipeline.",
    what: "Systematic identification, validation, and enrichment of prospects matching your ideal customer profile — combining automated tools with manual research for accuracy.",
    outcome: "A constantly replenished pipeline of verified contacts across your target accounts, with engagement-ready context for every outreach sequence.",
    points: [
      "Multi-source contact sourcing",
      "Data validation and enrichment",
      "Intent signal monitoring",
      "Account prioritisation scoring",
      "List hygiene and deduplication",
    ],
  },
  {
    id: "appointment-setting",
    tag: "04",
    title: "Appointment Setting",
    headline: "Confirmed, qualified meetings delivered to your calendar.",
    what: "End-to-end appointment setting across calling, email, and LinkedIn — with qualification carried out before any meeting is confirmed and logged to your CRM.",
    outcome: "Your team enters every call with a fully qualified prospect and all relevant commercial context, reducing wasted meeting time and improving close rates.",
    points: [
      "Multi-channel outreach sequences",
      "Pre-qualification using BANT/MEDDIC",
      "Calendar and CRM integration",
      "No-show management and follow-up",
      "Meeting brief preparation",
    ],
  },
  {
    id: "market-expansion",
    tag: "05",
    title: "Market Expansion",
    headline: "Structured entry into new geographies and verticals.",
    what: "A dedicated expansion programme for companies entering new markets — combining local market intelligence, localised messaging, and specialist outbound execution.",
    outcome: "Validated market presence, qualified pipeline in the target geography or vertical, and commercial insights to inform strategic investment decisions.",
    points: [
      "Market sizing and competitor mapping",
      "Localised ICP and messaging",
      "Regulatory and cultural adaptation",
      "In-market specialist deployment",
      "Pipeline benchmarking vs. targets",
    ],
  },
];

export default function SolutionsClient() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); });
      },
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative pt-[72px] pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#f9f8fc]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20">
          <p className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-primary mb-4 animate-on-scroll" style={{fontFamily: 'var(--font-display)'}}>
            Solutions
          </p>
          <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-tight text-gray-900 mb-5 animate-on-scroll delay-100" style={{fontFamily: 'var(--font-display)'}}>
            Outbound Solutions Built for Scale
          </h1>
          <p className="text-[1rem] text-gray-500 max-w-xl leading-relaxed animate-on-scroll delay-200">
            Five integrated capabilities that cover every stage of the outbound revenue cycle — from initial infrastructure to market expansion.
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-6">
            {solutions.map((s, i) => (
              <div
                key={s.id}
                id={s.id}
                className={`rounded-[16px] border border-gray-100 overflow-hidden animate-on-scroll delay-${Math.min((i + 1) * 100, 500)}`}
              >
                <div className="grid lg:grid-cols-[1fr_1.2fr] divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
                  {/* Left */}
                  <div className="p-8 lg:p-10 bg-[#f9f8fc]">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="step-number">{s.tag}</span>
                      <div className="h-px w-8 bg-primary/20" />
                    </div>
                    <h2 className="text-[1.4rem] font-bold tracking-tight text-gray-900 mb-3" style={{fontFamily: 'var(--font-display)'}}>
                      {s.title}
                    </h2>
                    <p className="text-[0.875rem] font-medium text-primary mb-5" style={{fontFamily: 'var(--font-display)'}}>
                      {s.headline}
                    </p>
                    <div className="space-y-4 text-[0.875rem] text-gray-500 leading-relaxed">
                      <div>
                        <span className="block text-[0.72rem] font-semibold uppercase tracking-widest text-gray-400 mb-1" style={{fontFamily: 'var(--font-display)'}}>What It Is</span>
                        <p>{s.what}</p>
                      </div>
                      <div>
                        <span className="block text-[0.72rem] font-semibold uppercase tracking-widest text-gray-400 mb-1" style={{fontFamily: 'var(--font-display)'}}>Business Outcome</span>
                        <p>{s.outcome}</p>
                      </div>
                    </div>
                  </div>
                  {/* Right */}
                  <div className="p-8 lg:p-10 bg-white">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-widest text-gray-400 mb-5" style={{fontFamily: 'var(--font-display)'}}>
                      Included Components
                    </p>
                    <ul className="space-y-3.5">
                      {s.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-3 text-[0.875rem] text-gray-600">
                          <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/8 flex items-center justify-center shrink-0" style={{background: 'rgba(157,47,218,0.08)'}}>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M2 5.5L4 7.5L8 3.5" stroke="#9d2fda" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <Link href="/contact" className="text-[0.85rem] font-semibold text-primary hover:text-primary-dark inline-flex items-center gap-2 transition-colors" style={{fontFamily: 'var(--font-display)'}}>
                        Discuss This Solution
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f9f8fc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold tracking-tight mb-4 animate-on-scroll" style={{fontFamily: 'var(--font-display)'}}>
            Not sure which solution applies to your situation?
          </h2>
          <p className="text-gray-500 text-[0.9rem] mb-8 animate-on-scroll delay-100">
            Book an introductory call. We'll assess your current pipeline, growth targets, and recommend the right programme.
          </p>
          <Link href="/contact" className="btn-primary px-7 py-3.5 rounded-[8px] text-[0.875rem] inline-flex items-center gap-2 animate-on-scroll delay-200">
            Schedule a Consultation
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7H12M8 3L12 7L8 11" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
