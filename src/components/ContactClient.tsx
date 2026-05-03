"use client";
import { useEffect, useRef, useState } from "react";

export default function ContactClient() {
  const ref = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

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

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email is required";
    if (!form.company.trim()) e.company = "Company is required";
    if (!form.message.trim()) e.message = "Please describe your objectives";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3.5 rounded-[8px] border text-[0.875rem] bg-white text-gray-900 placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-primary/20 focus:border-primary/40 ${
      errors[field] ? "border-red-300" : "border-gray-200"
    }`;

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative pt-[72px] pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#f9f8fc]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20">
          <p className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-primary mb-4 animate-on-scroll" style={{fontFamily: 'var(--font-display)'}}>
            Contact
          </p>
          <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-tight text-gray-900 mb-5 animate-on-scroll delay-100" style={{fontFamily: 'var(--font-display)'}}>
            Discuss Your Growth Objectives
          </h1>
          <p className="text-[1rem] text-gray-500 max-w-xl leading-relaxed animate-on-scroll delay-200">
            Tell us about your current pipeline situation and commercial targets. We'll respond within one business day with a clear perspective on how Zookia can contribute.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16">
            {/* Left — Contact Info */}
            <div className="space-y-10 animate-on-scroll">
              {/* Contact Details */}
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-widest text-gray-400 mb-5" style={{fontFamily: 'var(--font-display)'}}>
                  Contact Details
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M13.5 10.5c0 .2-.05.42-.15.62-.1.2-.24.38-.42.52-.32.24-.66.36-1.02.36-.3 0-.62-.07-.96-.22-.34-.15-.68-.35-1.02-.6-.34-.26-.66-.54-.96-.86-.3-.32-.58-.66-.82-.98-.24-.32-.44-.64-.58-.96C8.05 9.06 8 8.74 8 8.44c0-.28.08-.54.24-.78.16-.24.38-.46.66-.62.28-.16.58-.24.9-.24.12 0 .24.02.36.06.12.04.22.12.3.24L11.62 8.7c.1.14.18.28.24.4.06.12.1.24.1.34 0 .14-.04.28-.12.4-.08.12-.18.24-.3.36" stroke="#9d2fda" strokeWidth="1.3" strokeLinecap="round"/>
                        </svg>
                      ),
                      label: "Phone",
                      value: "+1 (234) 567-890",
                      href: "tel:+1234567890",
                    },
                    {
                      icon: (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="6" stroke="#9d2fda" strokeWidth="1.3"/>
                          <path d="M5 8.5c.5 1 1.5 2.5 3 3l.5-1.5-1.5-.5.5-1C7 8 6.5 7.5 6 7L5 7.5 4.5 6" stroke="#9d2fda" strokeWidth="1.3" strokeLinecap="round"/>
                        </svg>
                      ),
                      label: "WhatsApp",
                      value: "Message us on WhatsApp",
                      href: "https://wa.me/1234567890",
                    },
                    {
                      icon: (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <rect x="2" y="4" width="12" height="9" rx="1.5" stroke="#9d2fda" strokeWidth="1.3"/>
                          <path d="M2 6l6 4 6-4" stroke="#9d2fda" strokeWidth="1.3" strokeLinecap="round"/>
                        </svg>
                      ),
                      label: "Email",
                      value: "hello@zookia.com",
                      href: "mailto:hello@zookia.com",
                    },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-start gap-4 p-4 rounded-[10px] border border-gray-100 hover:border-primary/20 hover:bg-primary/[0.02] transition-all group"
                    >
                      <div className="w-8 h-8 rounded-[6px] bg-primary/[0.07] flex items-center justify-center shrink-0 mt-0.5">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-gray-400 mb-0.5" style={{fontFamily: 'var(--font-display)'}}>{item.label}</p>
                        <p className="text-[0.875rem] text-gray-700 group-hover:text-primary transition-colors">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* What to Expect */}
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-widest text-gray-400 mb-5" style={{fontFamily: 'var(--font-display)'}}>
                  What Happens Next
                </p>
                <div className="space-y-4">
                  {[
                    ["Response within 24 hours", "A member of our team will review your submission and respond with initial thoughts."],
                    ["Introductory call", "A 30-minute conversation to understand your pipeline situation, growth targets, and current outbound capability."],
                    ["Programme proposal", "A structured proposal outlining the recommended solution, scope, timeline, and commercial terms."],
                  ].map(([title, desc], i) => (
                    <div key={title} className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/[0.07] flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-[0.65rem] font-bold text-primary" style={{fontFamily: 'var(--font-display)'}}>{i + 1}</span>
                      </div>
                      <div>
                        <p className="text-[0.85rem] font-semibold text-gray-800 mb-0.5" style={{fontFamily: 'var(--font-display)'}}>{title}</p>
                        <p className="text-[0.8rem] text-gray-500 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="animate-on-scroll delay-200">
              <div className="p-8 lg:p-10 rounded-[16px] border border-gray-100 bg-white shadow-card">
                {submitted ? (
                  <div className="py-16 text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/[0.08] flex items-center justify-center mx-auto mb-5">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13L9 17L19 7" stroke="#9d2fda" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="text-[1.1rem] font-bold text-gray-900 mb-2" style={{fontFamily: 'var(--font-display)'}}>
                      Message Received
                    </h3>
                    <p className="text-gray-500 text-[0.875rem]">
                      We'll respond within one business day.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-[1.1rem] font-bold text-gray-900 mb-1.5" style={{fontFamily: 'var(--font-display)'}}>
                      Send Us a Message
                    </h2>
                    <p className="text-[0.85rem] text-gray-500 mb-7">
                      All fields are required. We treat every enquiry with confidentiality.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[0.78rem] font-semibold text-gray-700 mb-1.5" style={{fontFamily: 'var(--font-display)'}}>Full Name</label>
                          <input
                            type="text"
                            placeholder="John Smith"
                            value={form.name}
                            onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
                            className={inputClass("name")}
                          />
                          {errors.name && <p className="mt-1 text-[0.75rem] text-red-500">{errors.name}</p>}
                        </div>
                        <div>
                          <label className="block text-[0.78rem] font-semibold text-gray-700 mb-1.5" style={{fontFamily: 'var(--font-display)'}}>Work Email</label>
                          <input
                            type="email"
                            placeholder="john@company.com"
                            value={form.email}
                            onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: "" }); }}
                            className={inputClass("email")}
                          />
                          {errors.email && <p className="mt-1 text-[0.75rem] text-red-500">{errors.email}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-[0.78rem] font-semibold text-gray-700 mb-1.5" style={{fontFamily: 'var(--font-display)'}}>Company</label>
                        <input
                          type="text"
                          placeholder="Company name"
                          value={form.company}
                          onChange={(e) => { setForm({ ...form, company: e.target.value }); setErrors({ ...errors, company: "" }); }}
                          className={inputClass("company")}
                        />
                        {errors.company && <p className="mt-1 text-[0.75rem] text-red-500">{errors.company}</p>}
                      </div>

                      <div>
                        <label className="block text-[0.78rem] font-semibold text-gray-700 mb-1.5" style={{fontFamily: 'var(--font-display)'}}>
                          Your Growth Objectives
                        </label>
                        <textarea
                          rows={5}
                          placeholder="Describe your current pipeline situation, target markets, and what you're trying to achieve..."
                          value={form.message}
                          onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: "" }); }}
                          className={`${inputClass("message")} resize-none`}
                        />
                        {errors.message && <p className="mt-1 text-[0.75rem] text-red-500">{errors.message}</p>}
                      </div>

                      <button
                        type="submit"
                        className="btn-primary w-full py-4 rounded-[8px] text-[0.9rem] flex items-center justify-center gap-2"
                      >
                        Submit Enquiry
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                          <path d="M2 7.5H13M9 3.5L13 7.5L9 11.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>

                      <p className="text-center text-[0.75rem] text-gray-400">
                        By submitting, you agree to our Privacy Policy. We do not share your information with third parties.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
