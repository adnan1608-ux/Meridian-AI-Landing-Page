import { useEffect, useState } from 'react';

/**
 * Types out each word in `words`, pauses, deletes it, then moves to the
 * next word, looping forever. Respects prefers-reduced-motion by just
 * showing the first word statically.
 */
export function useTypewriterCycle(
  words: string[],
  {
    typeSpeed = 55,
    deleteSpeed = 30,
    pauseMs = 1400,
  }: { typeSpeed?: number; deleteSpeed?: number; pauseMs?: number } = {}
) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) {
      setText(words[0] ?? '');
      return;
    }

    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        typeSpeed
      );
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        deleteSpeed
      );
    } else {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pauseMs]);

  return text;
}
