import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="bg-bg-primary text-center py-40 relative overflow-hidden"
    >
      <div
        className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(200, 240, 77, 0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-[640px] mx-auto px-8">
        <h2 className="font-serif text-[clamp(36px,5vw,60px)] tracking-tight leading-[1.1] mb-6">
          Stop paying people <em className="italic text-text-secondary">to do what software should.</em>
        </h2>
        <p className="text-[17px] text-text-secondary leading-[1.65] mb-13">
          Book a free operations audit. Walk away with a roadmap whether you work with us or not.
          Q1 2026 slots are open.
        </p>
        <a
          href="#audit"
          className="group inline-flex items-center gap-2.5 bg-accent text-bg-primary text-sm font-semibold px-8 py-4 rounded-[10px] transition-all hover:bg-[#d4f55a] hover:-translate-y-px hover:shadow-[0_8px_32px_rgba(200,240,77,0.2)]"
        >
          Book your free audit
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
        <p className="mt-5 text-[13px] text-text-tertiary">
          45 minutes. No commitment. The roadmap is yours to keep.
        </p>
      </div>
    </section>
  );
}
