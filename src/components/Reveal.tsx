import type { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'scale' | 'none';
};

export function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.12);

  const directionClass = direction === 'up' ? '' : `reveal-${direction}`;

  return (
    <div
      ref={ref}
      className={`reveal ${directionClass} ${inView ? 'visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}