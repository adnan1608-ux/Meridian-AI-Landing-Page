import { ArrowRight } from 'lucide-react';

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/85 backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-container mx-auto px-8 py-5 flex items-center justify-between">
        <div className="text-[17px] font-semibold tracking-tight text-text-primary">
          Meridian<span className="text-accent">.</span>
        </div>
        <a
          href="#audit"
          className="text-[13px] font-medium text-text-secondary border border-border rounded-lg px-5 py-2 transition-colors hover:text-text-primary hover:border-[#444]"
        >
          Book an Audit
        </a>
      </div>
    </nav>
  );
}
