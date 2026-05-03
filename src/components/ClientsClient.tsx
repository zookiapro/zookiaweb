"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const clients = [
  "Nexora", "Veridian", "Stratline", "Arkive",
  "Lumex", "Pointra", "Kelvion", "Tralyx",
  "Sovarix", "Mintara", "Odelion", "Cascara",
];

const caseStudies = [
  {
    tag: "SaaS / EMEA Expansion",
    company: "Stratline Technologies",
    sector: "B2B SaaS — Workforce Management",
    metric1: { value: "62", label: "Qualified Meetings Delivered", unit: "" },
    metric2: { value: "4.1×", label: "Return on Programme Investment", unit: "" },
    metric3: { value: "9", label: "Enterprise Accounts Closed", unit: "" },
    problem:
      "Stratline had strong product-market fit in their domestic market but lacked the outbound infrastructure to penetrate mid-market and enterprise accounts across EMEA. Their internal team had no capacity for outbound at the required volume, and previous agency engagements had failed to deliver qualified pipeline.",
    approach:
      "Zookia designed a dedicated outbound programme targeting VP-level and C-suite buyers across financial services and logistics in the UK, Germany, and the Netherlands. We built a custom ICP model, enriched contact lists across 380 target accounts, and deployed a calling and email sequence running in parallel. All prospects were pre-qualified using BANT before meeting confirmation.",
    result:
      "Over six months, Zookia delivered 62 qualified meetings across EMEA. Nine of these converted to closed enterprise accounts, contributing material ARR to Stratline's EMEA business. The programme has since been renewed and expanded to include the Nordic and DACH markets.",
  },
  {
    tag: "Enterprise / Market Entry",
    company: "Arkive Group",
    sector: "Enterprise SaaS — Legal Technology",
    metric1: { value: "3", label: "Fortune 500 Meetings Within 60 Days", unit: "" },
    metric2: { value: "38%", label: "Contact-to-Meeting Conversion Rate", unit: "" },
    metric3: { value: "$1.8M", label: "Pipeline Generated in Q1", unit: "" },
    problem:
      "Arkive had recently closed a Series B round and needed to accelerate pipeline into large enterprise legal teams in North America. Existing outbound efforts had low response rates and were not reaching decision-makers at the required seniority level.",
    approach:
      "Zookia rebuilt Arkive's outbound messaging from the ground up — repositioning their value proposition around legal risk reduction and compliance efficiency. We identified 120 target accounts in Am Law 200 and Fortune 500 legal departments, built verified contact lists for General Counsels and CLOs, and deployed a hybrid calling and LinkedIn outreach sequence.",
    result:
      "Three Fortune 500 meetings were confirmed within the first 60 days. The programme achieved a 38% contact-to-meeting conversion rate — well above the vertical average. Over the first quarter, Zookia generated $1.8M in qualified pipeline, with two deals progressing to contract negotiation.",
  },
  {
    tag: "B2B / Pipeline Rebuild",
    company: "Lumex Infrastructure",
    sector: "B2B Services — Infrastructure Consulting",
    metric1: { value: "47%", label: "Increase in Outbound Pipeline Volume", unit: "" },
    metric2: { value: "28", label: "Qualified Opportunities in 90 Days", unit: "" },
    metric3: { value: "2.3×", label: "Improvement in Qualification Rate", unit: "" },
    problem:
      "Lumex had a strong delivery reputation but an inconsistent pipeline. Inbound referrals were not sufficient to meet their growth targets, and previous cold outreach efforts had been ad hoc. They needed a reliable outbound system that would generate a predictable flow of qualified opportunities.",
    approach:
      "Zookia conducted a full audit of Lumex's pipeline history and closed accounts to build an evidence-based ICP model. We identified 200 priority target accounts in the infrastructure, energy, and government sectors, built a multi-step outreach programme, and integrated directly with their Salesforce CRM for seamless pipeline visibility.",
    result:
      "Within 90 days, Zookia had delivered 28 qualified opportunities — a 47% increase in pipeline volume versus the same period the previous year. Qualification rates improved 2.3x compared to prior outreach activity. The programme has since become Lumex's primary source of new business pipeline.",
  },
];

export default function ClientsClient() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); });
      },
      { threshold: 0.07 }
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
            Clients & Results
          </p>
          <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-tight text-gray-900 mb-5 animate-on-scroll delay-100" style={{fontFamily: 'var(--font-display)'}}>
            Results Speak. Not Promises.
          </h1>
          <p className="text-[1rem] text-gray-500 max-w-xl leading-relaxed animate-on-scroll delay-200">
            Zookia works with growth-stage and enterprise companies across B2B SaaS, professional services, and technology. Our programmes are measured by one metric: qualified pipeline delivered.
          </p>
        </div>
      </section>

      {/* Clients Logo Grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-gray-400 mb-8 animate-on-scroll" style={{fontFamily: 'var(--font-display)'}}>
            Companies We've Worked With
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 animate-on-scroll delay-100">
            {clients.map((name) => (
              <div key={name} className="h-14 rounded-[10px] border border-gray-100 bg-[#f9f8fc] flex items-center justify-center card-hover">
                <span className="text-[0.8rem] font-semibold text-gray-400 tracking-wide" style={{fontFamily: 'var(--font-display)'}}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="hr-brand max-w-7xl mx-auto" />

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-primary mb-3 animate-on-scroll" style={{fontFamily: 'var(--font-display)'}}>
              Case Studies
            </p>
            <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-bold tracking-tight animate-on-scroll delay-100" style={{fontFamily: 'var(--font-display)'}}>
              Programme Outcomes in Detail
            </h2>
          </div>

          <div className="space-y-8">
            {caseStudies.map((cs, i) => (
              <div
                key={cs.company}
                className={`rounded-[16px] border border-gray-100 overflow-hidden animate-on-scroll delay-${(i + 1) * 100}`}
              >
                {/* Header */}
                <div className="px-8 py-5 bg-[#f9f8fc] border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[0.7rem] font-semibold uppercase tracking-widest text-primary" style={{fontFamily: 'var(--font-display)'}}>{cs.tag}</span>
                    <h3 className="text-[1.1rem] font-bold text-gray-900 mt-0.5" style={{fontFamily: 'var(--font-display)'}}>{cs.company}</h3>
                  </div>
                  <span className="text-[0.78rem] text-gray-500">{cs.sector}</span>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 bg-white">
                  {[cs.metric1, cs.metric2, cs.metric3].map((m) => (
                    <div key={m.label} className="px-8 py-6">
                      <div className="text-[1.8rem] font-bold gradient-text mb-1" style={{fontFamily: 'var(--font-display)'}}>{m.value}</div>
                      <div className="text-[0.8rem] text-gray-500">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Content */}
                <div className="p-8 bg-white border-t border-gray-100 grid lg:grid-cols-3 gap-8">
                  {[
                    { label: "The Problem", text: cs.problem },
                    { label: "Our Approach", text: cs.approach },
                    { label: "The Result", text: cs.result },
                  ].map((section) => (
                    <div key={section.label}>
                      <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-gray-400 mb-3" style={{fontFamily: 'var(--font-display)'}}>
                        {section.label}
                      </p>
                      <p className="text-[0.855rem] text-gray-600 leading-relaxed">{section.text}</p>
                    </div>
                  ))}
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
            Ready to add your company to this list?
          </h2>
          <p className="text-gray-500 text-[0.9rem] mb-8 max-w-md mx-auto animate-on-scroll delay-100">
            Every engagement begins with a detailed analysis of your commercial objectives and current pipeline reality.
          </p>
          <Link href="/contact" className="btn-primary px-7 py-3.5 rounded-[8px] text-[0.875rem] inline-flex items-center gap-2 animate-on-scroll delay-200">
            Discuss Your Growth Objectives
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7H12M8 3L12 7L8 11" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
