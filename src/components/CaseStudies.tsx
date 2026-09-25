import { Truck, HeartPulse, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';

const cases = [
  {
    icon: Truck,
    sector: 'Logistics',
    result: 'Reduced invoice processing time by 80% for a mid-sized logistics firm.',
  },
  {
    icon: HeartPulse,
    sector: 'Healthcare',
    result: 'Cut patient intake paperwork errors to near zero across three clinics.',
  },
  {
    icon: ShieldCheck,
    sector: 'Insurance',
    result: 'Automated claims triage, freeing up 15 hours/week per adjuster.',
  },
];

export function CaseStudies() {
  return (
    <section className="bg-bg-secondary py-[120px]">
      <div className="max-w-container mx-auto px-8">
        <Reveal className="text-center mb-16 max-w-[560px] mx-auto">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-7">
            <span className="block w-5 h-px bg-accent" />
            Snapshots of success
          </div>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] tracking-tight leading-[1.15] mb-4">
            Real outcomes, not projections.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-bg-card border border-border rounded-[20px] p-9 h-full transition-colors hover:border-[#2a2a2a]">
                  <div className="w-11 h-11 bg-accent-dim rounded-[10px] flex items-center justify-center mb-6 text-accent">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-text-muted mb-3">
                    {c.sector}
                  </div>
                  <p className="text-[15px] text-text-secondary leading-[1.6]">
                    {c.result}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
