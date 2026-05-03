"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const team = [
  {
    name: "Marcus Okafor",
    role: "Chief Executive Officer",
    initials: "MO",
    bio: "Former VP of Sales at a Series C SaaS firm. Marcus brings 14 years of outbound sales leadership across North America and Europe, with a track record of building revenue functions from the ground up.",
    expertise: ["Revenue Strategy", "Enterprise Sales", "Team Scaling"],
  },
  {
    name: "Sophia Reinhardt",
    role: "Head of Operations",
    initials: "SR",
    bio: "Operations specialist with a background in management consulting. Sophia designs and manages Zookia's delivery infrastructure — ensuring every client programme runs with precision and commercial accountability.",
    expertise: ["Operations", "Process Design", "Client Delivery"],
  },
  {
    name: "Daniel Achebe",
    role: "Director of Outbound",
    initials: "DA",
    bio: "10+ years in high-volume outbound environments across financial services and SaaS. Daniel leads Zookia's calling team and owns all execution quality, script optimisation, and conversion performance.",
    expertise: ["Cold Calling", "Script Development", "Conversion Optimisation"],
  },
  {
    name: "Priya Nambiar",
    role: "Head of Data & Intelligence",
    initials: "PN",
    bio: "Data scientist turned sales intelligence specialist. Priya oversees Zookia's prospecting infrastructure — including ICP modelling, data enrichment pipelines, and predictive account scoring.",
    expertise: ["Data Infrastructure", "Prospecting", "Market Mapping"],
  },
  {
    name: "James Whitfield",
    role: "Client Partnerships Director",
    initials: "JW",
    bio: "Background in enterprise account management across EMEA and APAC. James manages Zookia's key client relationships and leads market expansion engagements for global programmes.",
    expertise: ["Enterprise Accounts", "Market Expansion", "EMEA & APAC"],
  },
  {
    name: "Amara Diallo",
    role: "Lead Outbound Strategist",
    initials: "AD",
    bio: "Specialist in outbound messaging strategy and multi-channel sequence architecture. Amara designs the frameworks that drive conversion across cold email, LinkedIn, and calling programmes.",
    expertise: ["Messaging Strategy", "Sequence Design", "A/B Testing"],
  },
];

export default function TeamClient() {
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
            Our Team
          </p>
          <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-tight text-gray-900 mb-5 animate-on-scroll delay-100" style={{fontFamily: 'var(--font-display)'}}>
            Specialists. Not Generalists.
          </h1>
          <p className="text-[1rem] text-gray-500 max-w-xl leading-relaxed animate-on-scroll delay-200">
            The Zookia team is built from practitioners — people with direct operating experience in outbound sales, revenue infrastructure, and commercial growth.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div
                key={member.name}
                className={`p-7 rounded-[14px] border border-gray-100 bg-white shadow-card card-hover animate-on-scroll delay-${(i % 3 + 1) * 100}`}
              >
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-[0.9rem] shrink-0"
                    style={{ background: "linear-gradient(135deg, #9d2fda 0%, #d42881 100%)", fontFamily: 'var(--font-display)' }}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-[0.95rem] text-gray-900" style={{fontFamily: 'var(--font-display)'}}>{member.name}</h3>
                    <p className="text-[0.78rem] text-primary font-medium">{member.role}</p>
                  </div>
                </div>

                <p className="text-[0.845rem] text-gray-500 leading-relaxed mb-5">{member.bio}</p>

                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-primary/[0.07] text-primary text-[0.72rem] font-semibold"
                      style={{fontFamily: 'var(--font-display)'}}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f9f8fc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <p className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-primary mb-3" style={{fontFamily: 'var(--font-display)'}}>
                Careers
              </p>
              <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold tracking-tight mb-4" style={{fontFamily: 'var(--font-display)'}}>
                Join a Team That Operates at the Frontier of Revenue Infrastructure.
              </h2>
              <p className="text-gray-500 text-[0.875rem] leading-relaxed">
                We hire experienced sales practitioners, strategists, and data specialists who want to work on complex commercial challenges with global clients.
              </p>
            </div>
            <div className="animate-on-scroll delay-200">
              <Link href="/contact" className="btn-primary px-7 py-3.5 rounded-[8px] text-[0.875rem] inline-flex items-center gap-2">
                Get in Touch
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
