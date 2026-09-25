import { Truck, HeartPulse, ShieldCheck, Building2, Factory } from 'lucide-react';
import { Reveal } from './Reveal';

const stats = [
  { number: '12,400', label: 'Hours of manual work eliminated across client operations' },
  { number: '47', label: 'AI systems deployed in production – not prototypes, not demos' },
  { number: '93%', accent: true, label: 'Of projects shipped within the first 30-day sprint' },
];

const logos = [
  { name: 'Northwind Logistics', icon: Truck },
  { name: 'Cobalt Health', icon: HeartPulse },
  { name: 'Verge Insurance', icon: ShieldCheck },
  { name: 'Lighthouse RE', icon: Building2 },
  { name: 'Bastion Mfg', icon: Factory },
];

export function Credibility() {
  return (
    <section id="credibility" className="bg-bg-secondary py-[120px]">
      <div className="max-w-container mx-auto px-8">
        <Reveal className="text-center mb-18">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-7">
            <span className="block w-5 h-px bg-accent" />
            Track record
          </div>
          <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] tracking-tight leading-[1.2] mb-4">
            Numbers from deployed systems, not pitch decks.
          </h2>
          <p className="text-base text-text-secondary">
            Every figure below is measured against a pre-automation baseline.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-[20px] overflow-hidden mb-12">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-bg-card py-13 px-11 text-center transition-colors hover:bg-bg-card-hover"
              >
                <div className="font-serif text-[clamp(40px,5vw,60px)] text-text-primary tracking-tight leading-none mb-3">
                  {stat.accent ? <span className="text-accent">{stat.number}</span> : stat.number}
                </div>
                <div className="text-sm text-text-secondary leading-[1.5]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="text-xs text-text-muted uppercase tracking-[0.08em] mr-2">
              Trusted by
            </span>
            {logos.map((logo, i) => {
              const Icon = logo.icon;
              return (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 bg-bg-card border border-border rounded-lg px-5 py-2.5 text-[13px] text-text-tertiary font-medium tracking-tight transition-colors hover:border-[#333] hover:text-text-secondary"
                >
                  <Icon className="w-3.5 h-3.5 text-text-muted" />
                  {logo.name}
                </span>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
