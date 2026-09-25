import { useRef, useState, useCallback, useEffect } from 'react';
import { FileSpreadsheet, LayoutDashboard, GripVertical } from 'lucide-react';
import { Reveal } from './Reveal';

export function BeforeAfterSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50); // % from left, "after" reveal width
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      updateFromClientX(clientX);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);
    };
  }, [updateFromClientX]);

  return (
    <section className="bg-bg-primary py-[120px]">
      <div className="max-w-container mx-auto px-8">
        <Reveal className="text-center mb-16 max-w-[560px] mx-auto">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-7">
            <span className="block w-5 h-px bg-accent" />
            Before / after
          </div>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] tracking-tight leading-[1.15] mb-4">
            Drag to see the difference.
          </h2>
          <p className="text-base text-text-secondary leading-[1.6]">
            Same operation, two ways of running it.
          </p>
        </Reveal>

        <Reveal>
          <div
            ref={trackRef}
            className="relative w-full max-w-[880px] mx-auto aspect-[16/9] rounded-[20px] overflow-hidden border border-border select-none cursor-ew-resize"
          >
            {/* Before layer (full width, underneath) */}
            <div className="absolute inset-0 bg-bg-secondary flex flex-col p-8">
              <div className="flex items-center gap-2 text-text-tertiary mb-6">
                <FileSpreadsheet className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.1em]">
                  Messy spreadsheet / inbox · Manual
                </span>
              </div>
              <div className="flex-1 grid grid-rows-5 gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="grid grid-cols-4 gap-1.5">
                    {Array.from({ length: 4 }).map((_, j) => (
                      <div
                        key={j}
                        className="rounded-sm bg-white/[0.04] border border-white/[0.06]"
                        style={{ opacity: 0.4 + ((i + j) % 3) * 0.15 }}
                      />
                    ))}
                  </div>
                ))}
              </div>
              <div className="mt-5 text-[13px] text-text-muted">
                47 unread · 12 pending reconciliations
              </div>
            </div>

            {/* After layer (clipped by slider position, on top) */}
            <div
              className="absolute inset-0 bg-bg-card flex flex-col p-8"
              style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
            >
              <div className="flex items-center gap-2 text-accent mb-6">
                <LayoutDashboard className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.1em]">
                  Clean dashboard / automated notification · AI
                </span>
              </div>
              <div className="flex-1 flex flex-col gap-3">
                <div className="flex items-center justify-between bg-accent-dim border border-[rgba(200,240,77,0.15)] rounded-lg px-4 py-3">
                  <span className="text-sm text-text-primary">
                    Invoices reconciled
                  </span>
                  <span className="text-sm font-semibold text-accent">
                    100%
                  </span>
                </div>
                <div className="flex items-center justify-between bg-bg-secondary border border-border rounded-lg px-4 py-3">
                  <span className="text-sm text-text-secondary">
                    Flagged for review
                  </span>
                  <span className="text-sm font-semibold text-text-primary">
                    2
                  </span>
                </div>
                <div className="flex items-center justify-between bg-bg-secondary border border-border rounded-lg px-4 py-3">
                  <span className="text-sm text-text-secondary">
                    Avg. processing time
                  </span>
                  <span className="text-sm font-semibold text-text-primary">
                    38 sec
                  </span>
                </div>
              </div>
              <div className="mt-5 text-[13px] text-accent">
                All caught up · last run 4 min ago
              </div>
            </div>

            {/* Handle */}
            <div
              className="absolute top-0 bottom-0 w-px bg-accent"
              style={{ left: `${pos}%` }}
            >
              <div
                onMouseDown={() => (dragging.current = true)}
                onTouchStart={() => (dragging.current = true)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-[0_4px_20px_rgba(200,240,77,0.4)] cursor-ew-resize"
              >
                <GripVertical className="w-4 h-4 text-bg-primary" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
