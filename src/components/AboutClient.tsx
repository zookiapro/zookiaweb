"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const values = [
  {
    title: "Execution Over Theory",
    desc: "We deploy tested outbound systems — not strategy decks. Every engagement is measured against pipeline generated and revenue contributed.",
  },
  {
    title: "Infrastructure Mindset",
    desc: "Outbound isn't a campaign. It's a permanent revenue function. We build the systems, people, and processes to sustain it.",
  },
  {
    title: "Commercial Accountability",
    desc: "Our success is tied directly to yours. Deliverables are defined in commercial terms: qualified opportunities and confirmed meetings.",
  },
  {
    title: "Data-Driven Iteration",
    desc: "Every call, sequence, and touchpoint is tracked. We iterate continuously based on conversion data — not assumptions.",
  },
];

export default function AboutClient() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); });
      },
      { threshold: 0.1 }
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
          <div className="max-w-3xl">
            <p className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-primary mb-4 animate-on-scroll" style={{fontFamily: 'var(--font-display)'}}>
              About Zookia
            </p>
            <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-tight text-gray-900 mb-6 animate-on-scroll delay-100" style={{fontFamily: 'var(--font-display)'}}>
              We Are a Revenue Infrastructure Partner. Not an Agency.
            </h1>
            <p className="text-[1rem] text-gray-500 leading-relaxed max-w-xl animate-on-scroll delay-200">
              Zookia was built on a single conviction: that outbound sales should function like infrastructure — reliable, scalable, and measurable. We work with B2B and SaaS companies that need consistent pipeline, not sporadic campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-primary mb-4 animate-on-scroll" style={{fontFamily: 'var(--font-display)'}}>
                Our Positioning
              </p>
              <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-bold tracking-tight text-gray-900 mb-6 animate-on-scroll delay-100" style={{fontFamily: 'var(--font-display)'}}>
                Built for Companies That Treat Revenue as a System
              </h2>
              <div className="space-y-5 text-[0.9rem] text-gray-500 leading-relaxed animate-on-scroll delay-200">
                <p>
                  Most outbound agencies deliver lists and dial counts. Zookia delivers qualified opportunities and confirmed meetings — with the infrastructure to sustain them at scale.
                </p>
                <p>
                  We embed directly into your commercial operations. Our team becomes your outbound function: handling prospecting, execution, qualification, and reporting — with full visibility into every stage.
                </p>
                <p>
                  Our clients span global corporates, growth-stage SaaS platforms, and market-expansion programmes across North America, Europe, and APAC. What they share is a requirement for rigour, consistency, and measurable output.
                </p>
              </div>
            </div>

            {/* Differentiators */}
            <div className="space-y-4 animate-on-scroll delay-300">
              {[
                ["Not a Marketing Agency", "We operate inside your sales motion — not alongside it. No brand campaigns. No impressions metrics. Only pipeline."],
                ["Not a Contact Centre", "Every specialist at Zookia is trained in consultative sales, objection handling, and commercial qualification. Quality over volume."],
                ["Not a Software Tool", "We are a managed function. Strategy, execution, and optimisation — delivered as a service, measured by commercial outcomes."],
              ].map(([title, desc]) => (
                <div key={title} className="p-6 rounded-[12px] border border-gray-100 bg-[#f9f8fc]">
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5.5L4 7.5L8 3.5" stroke="#9d2fda" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[0.9rem] text-gray-900 mb-1" style={{fontFamily: 'var(--font-display)'}}>{title}</h4>
                      <p className="text-[0.85rem] text-gray-500 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#f9f8fc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-primary mb-3 animate-on-scroll" style={{fontFamily: 'var(--font-display)'}}>
              Operating Principles
            </p>
            <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-bold tracking-tight animate-on-scroll delay-100" style={{fontFamily: 'var(--font-display)'}}>
              How We Think. How We Work.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className={`p-8 rounded-[14px] bg-white border border-gray-100 shadow-card card-hover animate-on-scroll delay-${(i % 2 + 1) * 100}`}>
                <h3 className="font-bold text-[1rem] text-gray-900 mb-3" style={{fontFamily: 'var(--font-display)'}}>{v.title}</h3>
                <p className="text-[0.875rem] text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="rounded-[20px] p-12 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0a0a0f 0%, #12071e 100%)'}}>
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.06]"
              style={{ background: "radial-gradient(circle, #9d2fda 0%, transparent 70%)" }} />
            <div className="relative max-w-lg">
              <p className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-primary mb-4" style={{fontFamily: 'var(--font-display)'}}>
                Work With Us
              </p>
              <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-white tracking-tight mb-4" style={{fontFamily: 'var(--font-display)'}}>
                Outbound infrastructure built around your commercial objectives.
              </h2>
              <p className="text-white/50 text-[0.875rem] leading-relaxed mb-8">
                We begin every engagement with a thorough analysis of your market position and revenue targets before designing any programme.
              </p>
              <Link href="/contact" className="btn-primary px-7 py-3.5 rounded-[8px] text-[0.875rem] inline-flex items-center gap-2">
                Start the Conversation
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M8 3L12 7L8 11" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
