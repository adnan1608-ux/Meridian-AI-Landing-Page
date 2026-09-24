import { Check, X } from 'lucide-react';
import { Reveal } from './Reveal';

const forItems = [
  'Operations teams drowning in manual data entry and reconciliation',
  'Companies with high-volume document processing (invoices, contracts, claims)',
  'Businesses spending 20+ hours/week on repetitive customer communication',
  'Teams whose growth has outpaced their workflows and tooling',
  'Organizations that have tried "AI" before and got a chatbot nobody uses',
];

const notForItems = [
  'Companies looking for a conversational AI wrapper to pitch to investors',
  'Teams that want to "do something with AI" but have no specific problem',
  'Businesses under 10 employees without meaningful repetitive workflows',
  'Projects seeking a one-off prompt or content generation tool',
  'Anyone who wants a demo over a deployment',
];

export function WhoItsFor() {
  return (
    <section id="who" className="bg-bg-secondary py-[120px]">
      <div className="max-w-container mx-auto px-8">
        <Reveal className="text-center mb-18">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-7">
            <span className="block w-5 h-px bg-accent" />
            Who we work with
          </div>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] tracking-tight leading-[1.15]">
            Built for teams with real operational weight.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal>
            <div className="bg-bg-card border border-border rounded-[20px] p-11 transition-colors hover:border-[#2a2a2a] h-full">
              <div className="flex items-center gap-2.5 mb-7">
                <span className="w-7 h-7 rounded-md bg-accent-dim flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-accent" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
                  For you
                </span>
              </div>
              <ul className="flex flex-col gap-[18px] list-none">
                {forItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3.5 text-[15px] leading-[1.5] text-text-secondary">
                    <Check className="flex-shrink-0 mt-0.5 w-[18px] h-[18px] text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-bg-card border border-border rounded-[20px] p-11 transition-colors hover:border-[#2a2a2a] h-full">
              <div className="flex items-center gap-2.5 mb-7">
                <span className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center">
                  <X className="w-3.5 h-3.5 text-text-tertiary" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-text-tertiary">
                  Not for you
                </span>
              </div>
              <ul className="flex flex-col gap-[18px] list-none">
                {notForItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3.5 text-[15px] leading-[1.5] text-text-tertiary">
                    <X className="flex-shrink-0 mt-0.5 w-[18px] h-[18px] text-text-muted" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
