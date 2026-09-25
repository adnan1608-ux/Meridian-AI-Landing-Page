import { useEffect, useState } from 'react';

/**
 * Tracks vertical scroll progress (0–100) and whether the user has
 * scrolled past a given threshold (in px). Used to trigger the sticky
 * "fast-track" nav once the hero section is out of view.
 */
export function useScrollProgress(showAfter = 600) {
  const [progress, setProgress] = useState(0);
  const [past, setPast] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
      setPast(scrollTop > showAfter);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [showAfter]);

  return { progress, past };
}
