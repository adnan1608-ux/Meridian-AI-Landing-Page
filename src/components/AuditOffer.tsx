import { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { Reveal } from './Reveal';
import { FounderNote } from './FounderNote';
import { DiagnosisForm } from './DiagnosisForm';

const includes = [
  'Full workflow map of your operation\'s repetitive tasks',
  'Automation readiness score for each identified workflow',
  'Rough ROI estimate – hours saved, cost avoided, error reduction',
  'Prioritized roadmap: what to automate first, what to skip',
  'No slides. No sales pitch. A working document you keep.',
];

const cardItems = [
  '45-minute working session',
  'Pre-call workflow inventory',
  'Written audit delivered in 5 days',
  'Roadmap yours to keep – no obligation',
];

export function AuditOffer() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <section id="audit" className="bg-bg-primary py-[120px]">
      <div className="max-w-container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-7">
                <span className="block w-5 h-px bg-accent" />
                The audit
              </div>
              <h2 className="font-serif text-[clamp(32px,4vw,50px)] tracking-tight leading-[1.12] mb-6">
                See exactly what AI can automate in your business – before you spend a dollar.
              </h2>
              <p className="text-base text-text-secondary leading-[1.7] mb-9">
                We spend 45 minutes understanding your operation. Then we go away and build you a
                document that maps every repetitive workflow, scores each one for automation
                readiness, and estimates the return. You keep it whether we work together or not.
              </p>
              <ul className="flex flex-col gap-3.5 list-none">
                {includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-text-secondary">
                    <Check className="flex-shrink-0 mt-0.5 w-[18px] h-[18px] text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative overflow-hidden bg-bg-card border border-border rounded-[20px] p-12">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />

              <div className="inline-flex items-center gap-2 bg-accent-dim border border-[rgba(200,240,77,0.15)] text-accent text-xs font-semibold uppercase tracking-[0.08em] px-3.5 py-1.5 rounded-md mb-7">
                <Sparkles className="w-3.5 h-3.5" />
                Free operations audit
              </div>

              <h3 className="text-[22px] font-semibold text-text-primary tracking-tight mb-4 leading-[1.3]">
                The Meridian Operations Audit
              </h3>
              <p className="text-[15px] text-text-secondary leading-[1.65] mb-9">
                A working document, not a sales deck. You walk away with a clear picture of where
                AI fits in your operation and where it doesn't.
              </p>

              <ul className="flex flex-col gap-3 mb-10 list-none">
                {cardItems.map((item, i) => (

                  <li key={i} className="flex items-center gap-2.5 text-sm text-text-secondary">
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => setFormOpen(true)}
                className="inline-flex items-center gap-2.5 bg-accent text-bg-primary text-sm font-semibold px-8 py-4 rounded-[10px] transition-all hover:bg-[#d4f55a] hover:-translate-y-px hover:shadow-[0_8px_32px_rgba(200,240,77,0.2)]"
              >
                Book your audit
              </button>
              <p className="text-xs text-text-tertiary mt-4">
                Limited to 5 audits per month. Q1 2026 slots open now.
              </p>
            </div>
          </Reveal>
        </div>

        <FounderNote />
      </div>

      <DiagnosisForm open={formOpen} onClose={() => setFormOpen(false)} />
    </section>
  );
}
