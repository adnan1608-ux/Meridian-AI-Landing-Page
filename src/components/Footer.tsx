export function Footer() {
  return (
    <footer className="border-t border-border-subtle py-10">
      <div className="max-w-container mx-auto px-8 flex items-center justify-between flex-wrap gap-4">
        <div className="text-[17px] font-semibold tracking-tight text-text-primary">
          Meridian<span className="text-accent">.</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-text-tertiary">
          <a href="#who" className="transition-colors hover:text-text-secondary">Who we work with</a>
          <a href="#how" className="transition-colors hover:text-text-secondary">How it works</a>
          <a href="#audit" className="transition-colors hover:text-text-secondary">Book an audit</a>
        </div>
        <div className="text-xs text-text-muted">
          © 2026 Meridian Automation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
