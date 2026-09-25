import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

const insights = [
  {
    tag: 'Friction points',
    title: 'Why most "AI transformation" projects stall at the pilot stage',
  },
  {
    tag: 'Playbook',
    title: 'The 3 workflows worth automating before you touch anything else',
  },
  {
    tag: 'Field notes',
    title: 'What we look for in the first 10 minutes of an operations audit',
  },
];

export function AutomationIndex() {
  return (
    <section className="bg-bg-primary py-[120px]">
      <div className="max-w-container mx-auto px-8">
        <Reveal className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-7">
              <span className="block w-5 h-px bg-accent" />
              The automation index
            </div>
            <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] tracking-tight leading-[1.2]">
              Notes from inside real deployments.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((item, i) => (
            <Reveal key={i} delay={i * 80}>
              <a
                href="#"
                className="group block bg-bg-card border border-border rounded-[20px] p-8 h-full transition-colors hover:border-[#2a2a2a]"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-text-muted">
                    {item.tag}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-text-muted transition-colors group-hover:text-accent" />
                </div>
                <h3 className="text-[17px] font-semibold text-text-primary leading-[1.4] tracking-tight">
                  {item.title}
                </h3>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
