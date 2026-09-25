import { ArrowRight } from 'lucide-react';
import { useTypewriterCycle } from '../hooks/useTypewriterCycle';

const painPoints = ['Data Entry', 'CRM Syncing', 'Email Sorting', 'Invoice Matching'];

export function Hero() {
  const cycling = useTypewriterCycle(painPoints);

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-[200px] pb-[140px]"
    >
      <div className="absolute inset-0 hero-grid-bg" />
      <div
        className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(200, 240, 77, 0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-container mx-auto px-8 max-w-[820px]">
        <div className="animate-fade-up inline-flex items-center gap-2 text-xs font-medium text-text-secondary bg-bg-card border border-border rounded-full px-4 py-[7px] mb-10">
          <span
            className="w-1.5 h-1.5 rounded-full bg-accent"
            style={{ animation: 'subtlePulse 2.5s ease-in-out infinite' }}
          />
          Now accepting Q1 2026 partnerships
        </div>

        <h1 className="animate-fade-up delay-1 font-serif text-[clamp(44px,6vw,76px)] leading-[1.08] tracking-tight text-text-primary mb-7">
          AI automation for <em className="italic text-text-secondary">real</em> operations.
        </h1>

        <p className="animate-fade-up delay-2 text-[15px] text-text-tertiary mb-8 h-6">
          Your team is spending hours on{' '}
          <span className="text-accent font-medium">
            {cycling}
            <span
              className="inline-block w-[1px] h-[1em] bg-accent ml-0.5 align-middle"
              style={{ animation: 'subtlePulse 0.8s step-end infinite' }}
            />
          </span>{' '}
          that shouldn't require a human.
        </p>

        <p className="animate-fade-up delay-2 text-[clamp(17px,2vw,20px)] text-text-secondary leading-[1.65] max-w-[580px] mb-13 font-normal">
          We design and deploy AI systems that handle repetitive work – data entry, document
          processing, customer routing – so your team focuses on decisions that actually need a
          human. <strong className="text-text-primary font-medium">No hype. No chatbots for the sake of chatbots.</strong> Just measurable output.
        </p>

        <div className="animate-fade-up delay-3 flex items-center gap-6 flex-wrap">
          <a
            href="#audit"
            className="inline-flex items-center gap-2.5 bg-accent text-bg-primary text-sm font-semibold px-8 py-4 rounded-[10px] transition-all hover:bg-[#d4f55a] hover:-translate-y-px hover:shadow-[0_8px_32px_rgba(200,240,77,0.2)]"
          >
            Book a free operations audit
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <span className="text-[13px] text-text-tertiary">
            45-minute call. No commitment.
          </span>
        </div>
      </div>
    </section>
  );
}
