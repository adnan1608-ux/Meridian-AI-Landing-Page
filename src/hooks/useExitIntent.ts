import { useEffect, useRef, useState } from 'react';

/**
 * Fires once when the user shows exit intent:
 * - Desktop: mouse leaves through the top of the viewport.
 * - Mobile: a fast upward scroll near the top of the page.
 * Only triggers once per session (sessionStorage-backed) and never
 * before `minDelayMs` has elapsed, so it doesn't fire immediately on load.
 */
export function useExitIntent(minDelayMs = 8000) {
  const [triggered, setTriggered] = useState(false);
  const readyRef = useRef(false);
  const lastY = useRef(0);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('meridian_exit_shown');
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      readyRef.current = true;
    }, minDelayMs);

    const fire = () => {
      if (!readyRef.current) return;
      const shown = sessionStorage.getItem('meridian_exit_shown');
      if (shown) return;
      sessionStorage.setItem('meridian_exit_shown', '1');
      setTriggered(true);
    };

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) fire();
    };

    const onScroll = () => {
      const y = window.scrollY;
      if (y < lastY.current - 40 && y < 400) fire();
      lastY.current = y;
    };

    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('scroll', onScroll);
    };
  }, [minDelayMs]);

  const dismiss = () => setTriggered(false);

  return { triggered, dismiss };
}
