import { useState } from 'react';
import { X, Flag, CheckCircle2 } from 'lucide-react';
import { useExitIntent } from '../hooks/useExitIntent';

export function ExitIntentModal() {
  const { triggered, dismiss } = useExitIntent(8000);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!triggered) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend wired up yet — swap this out for a real submit handler
    // (API call, email service, etc.) when ready.
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={dismiss} />

      <div className="relative w-full max-w-[440px] bg-bg-card border border-border rounded-[20px] p-9 animate-fade-up">
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-5 right-5 text-text-tertiary hover:text-text-primary transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="w-11 h-11 bg-accent-dim rounded-[10px] flex items-center justify-center mb-6 text-accent">
              <Flag className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-3 tracking-tight leading-[1.3]">
              Before you go — 5 Red Flags Your Team Needs Automation
            </h3>
            <p className="text-sm text-text-secondary leading-[1.6] mb-7">
              A short, free guide to the signs your operation is ready for AI automation.
              No pitch, just the checklist.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full bg-bg-secondary border border-border rounded-[10px] px-5 py-3.5 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                disabled={!email}
                className="bg-accent text-bg-primary text-sm font-semibold px-6 py-3.5 rounded-[10px] transition-all hover:bg-[#d4f55a] disabled:opacity-40 disabled:pointer-events-none"
              >
                Send me the guide
              </button>
            </form>
            <button
              onClick={dismiss}
              className="w-full text-center text-xs text-text-muted mt-4 hover:text-text-tertiary transition-colors"
            >
              No thanks, I'll keep browsing
            </button>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-full bg-accent-dim flex items-center justify-center mx-auto mb-6 text-accent">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-3 tracking-tight">
              On its way.
            </h3>
            <p className="text-sm text-text-secondary leading-[1.6]">
              Check {email} for the guide.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
