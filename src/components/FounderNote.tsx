import { Reveal } from './Reveal';

export function FounderNote() {
  return (
    <div className="max-w-[640px] mx-auto mt-14 pt-10 border-t border-border-subtle">
      <Reveal>
        <p className="font-serif italic text-[17px] text-text-secondary leading-[1.7] mb-5">
          "We built Meridian because we kept watching skilled teams get buried under work
          software should have handled years ago. Every audit we run is the same one we'd want
          if we were in your seat — no fluff, no upsell disguised as insight."
        </p>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-accent-dim border border-[rgba(200,240,77,0.15)] flex items-center justify-center text-[13px] font-semibold text-accent">
            A.N
          </div>
          <div>
            <div className="text-sm font-semibold text-text-primary">
              A.N
            </div>
            <div className="text-xs text-text-tertiary">
              Founder, Meridian Automation
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
