import { Search, Wrench, Rocket, LineChart, ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Audit',
    desc: 'We map every repetitive workflow in your operation – the manual steps, the copy-paste loops, the "someone handles it" tasks that nobody owns.',
  },
  {
    num: '02',
    icon: Wrench,
    title: 'Design',
    desc: 'We design automation where it actually moves the needle. Each system is scoped to a specific workflow with clear inputs, outputs, and success metrics.',
  },
  {
    num: '03',
    icon: Rocket,
    title: 'Deploy',
    desc: 'We build, test, and ship. Your team is involved at every checkpoint so nothing lands as a surprise. You see the system working before we call it done.',
  },
  {
    num: '04',
    icon: LineChart,
    title: 'Measure',
    desc: 'We track hours saved, error rates, and throughput against the baseline we set in step one. If it doesn\'t move a number, it doesn\'t ship.',
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-bg-primary py-[120px]">
      <div className="max-w-container mx-auto px-8">
        <Reveal className="max-w-[560px] mb-20">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-7">
            <span className="block w-5 h-px bg-accent" />
            How it works
          </div>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] tracking-tight leading-[1.15] mb-4">
            A clear path from manual to automated.
          </h2>
          <p className="text-base text-text-secondary leading-[1.6]">
            No black boxes. No "trust the AI." You see exactly what each system does, what data
            it touches, and what happens when it fails.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-[20px] overflow-hidden">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="relative bg-bg-card p-11 px-9 transition-colors hover:bg-bg-card-hover"
                >
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-11 right-[-12px] w-6 h-6 bg-bg-card border border-border rounded-full items-center justify-center z-10 text-text-muted">
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  )}
                  <div className="text-[11px] font-bold tracking-[0.1em] text-text-muted mb-8">
                    {step.num}
                  </div>
                  <div className="w-11 h-11 bg-accent-dim rounded-[10px] flex items-center justify-center mb-6 text-accent">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[17px] font-semibold text-text-primary mb-3 tracking-tight leading-[1.3]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-[1.65]">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
