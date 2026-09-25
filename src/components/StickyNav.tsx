import { ArrowRight } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScrollProgress';

export function StickyNav() {
  const { progress, past } = useScrollProgress(700);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        past ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-bg-primary/95 backdrop-blur-md border-b border-border-subtle">
        <div className="max-w-container mx-auto px-8 py-3 flex items-center justify-between">
          <span className="text-[13px] font-medium text-text-secondary">
            Meridian<span className="text-accent">.</span> Operations Audit
          </span>
          <a
            href="#audit"
            className="inline-flex items-center gap-1.5 bg-accent text-bg-primary text-[13px] font-semibold px-4 py-2 rounded-lg transition-all hover:bg-[#d4f55a]"
          >
            Book Audit
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
      <div className="h-[2px] bg-border-subtle">
        <div
          className="h-full bg-accent transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
