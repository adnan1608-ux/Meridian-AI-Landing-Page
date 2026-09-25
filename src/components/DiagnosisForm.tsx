import { useState } from 'react';
import { X, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

type DiagnosisFormProps = {
  open: boolean;
  onClose: () => void;
};

const painPoints = [
  'Data entry & reconciliation',
  'Document processing (invoices, claims, contracts)',
  'Customer routing / support triage',
  'Something else',
];

const teamSizes = ['Under 10', '10–50', '50–200', '200+'];

export function DiagnosisForm({ open, onClose }: DiagnosisFormProps) {
  const [step, setStep] = useState(0);
  const [pain, setPain] = useState('');
  const [size, setSize] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const reset = () => {
    setStep(0);
    setPain('');
    setSize('');
    setEmail('');
    setSubmitted(false);
  };

  const handleClose = () => {
    onClose();
    setTimeout(reset, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend wired up yet — swap this out for a real submit handler
    // (API call, email service, etc.) when ready.
    setSubmitted(true);
  };

  const canAdvance = step === 0 ? !!pain : step === 1 ? !!size : true;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div className="relative w-full max-w-[520px] bg-bg-card border border-border rounded-[20px] p-10 animate-fade-up">
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-5 right-5 text-text-tertiary hover:text-text-primary transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-6">
              <span className="block w-5 h-px bg-accent" />
              3-question automation check
            </div>

            {/* progress dots */}
            <div className="flex items-center gap-2 mb-8">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all ${
                    i <= step ? 'bg-accent w-8' : 'bg-border w-8'
                  }`}
                />
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {step === 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-6 tracking-tight">
                    What's eating the most time on your team?
                  </h3>
                  <div className="flex flex-col gap-2.5">
                    {painPoints.map((p) => (
                      <button
                        type="button"
                        key={p}
                        onClick={() => setPain(p)}
                        className={`text-left text-sm px-5 py-3.5 rounded-[10px] border transition-colors ${
                          pain === p
                            ? 'border-accent bg-accent-dim text-text-primary'
                            : 'border-border text-text-secondary hover:border-[#444]'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-6 tracking-tight">
                    How big is your team?
                  </h3>
                  <div className="grid grid-cols-2 gap-2.5">
                    {teamSizes.map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setSize(s)}
                        className={`text-sm px-5 py-3.5 rounded-[10px] border transition-colors ${
                          size === s
                            ? 'border-accent bg-accent-dim text-text-primary'
                            : 'border-border text-text-secondary hover:border-[#444]'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3 tracking-tight">
                    Where should we send your audit?
                  </h3>
                  <p className="text-sm text-text-secondary mb-6 leading-[1.6]">
                    We'll follow up within one business day to schedule your 45-minute call.
                  </p>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full bg-bg-secondary border border-border rounded-[10px] px-5 py-3.5 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-accent transition-colors"
                  />
                </div>
              )}

              <div className="flex items-center justify-between mt-9">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s - 1)}
                    className="inline-flex items-center gap-1.5 text-sm text-text-tertiary hover:text-text-secondary transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                ) : (
                  <span />
                )}

                {step < 2 ? (
                  <button
                    type="button"
                    disabled={!canAdvance}
                    onClick={() => setStep((s) => s + 1)}
                    className="inline-flex items-center gap-2 bg-accent text-bg-primary text-sm font-semibold px-6 py-3 rounded-[10px] transition-all hover:bg-[#d4f55a] disabled:opacity-40 disabled:pointer-events-none"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!email}
                    className="inline-flex items-center gap-2 bg-accent text-bg-primary text-sm font-semibold px-6 py-3 rounded-[10px] transition-all hover:bg-[#d4f55a] disabled:opacity-40 disabled:pointer-events-none"
                  >
                    Book my audit
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-accent-dim flex items-center justify-center mx-auto mb-6 text-accent">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-3 tracking-tight">
              You're on the list.
            </h3>
            <p className="text-sm text-text-secondary leading-[1.6] max-w-[360px] mx-auto">
              We'll reach out at {email} within one business day to schedule your audit call.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
