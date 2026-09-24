import { Reveal } from './Reveal';

const steps = [
  {
    title: 'You book a 45-minute call',
    desc: 'We walk through your operation together. You show us the spreadsheets, the manual steps, the things that eat your team\'s time. No prep needed – just bring the pain points.',
  },
  {
    title: 'We deliver a written audit',
    desc: 'Within 5 business days you receive a document mapping every repetitive workflow we found, scored for automation readiness, with rough ROI estimates and a prioritized roadmap.',
  },
  {
    title: 'You decide – no pressure',
    desc: 'Take the audit and implement it yourself. Hand it to another firm. Or work with us. The document is yours either way. If we\'re a fit, we scope the first sprint together.',
  },
  {
    title: 'We build, deploy, and measure',
    desc: 'First sprint is 30 days. You see working automation by the end of it. We measure against the baseline from the audit and report hours saved, errors reduced, and throughput gained.',
  },
];

export function WhatHappensNext() {
  return (
    <section id="next" className="bg-bg-secondary py-[120px]">
      <div className="max-w-container mx-auto px-8">
        <Reveal className="text-center mb-18">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-7">
            <span className="block w-5 h-px bg-accent" />
            What happens next
          </div>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] tracking-tight leading-[1.15] mb-4">
            From first call to first deployment.
          </h2>
          <p className="text-base text-text-secondary max-w-[480px] mx-auto leading-[1.6]">
            A clear, four-step process. No mystery, no months of "discovery" before anything ships.
          </p>
        </Reveal>

        <Reveal>
          <div className="flex flex-col gap-px max-w-[720px] mx-auto bg-border rounded-[20px] overflow-hidden">
            {steps.map((step, i) => (
              <div
                key={i}
                className="bg-bg-card py-9 px-11 flex items-start gap-7 transition-colors hover:bg-bg-card-hover"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-accent-dim border border-[rgba(200,240,77,0.15)] flex items-center justify-center text-[13px] font-semibold text-accent mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-text-primary mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-[1.65]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
