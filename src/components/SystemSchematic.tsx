import { useInView } from '../hooks/useInView';

// Node positions on a 720x160 viewBox
const nodes = [
  { x: 40, y: 80, label: 'Input' },
  { x: 220, y: 30, label: 'Parse' },
  { x: 220, y: 130, label: 'Validate' },
  { x: 420, y: 80, label: 'Route' },
  { x: 600, y: 30, label: 'Automate' },
  { x: 680, y: 130, label: 'Report' },
];

const edges: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
];

function edgePath(a: (typeof nodes)[number], b: (typeof nodes)[number]) {
  const midX = (a.x + b.x) / 2;
  return `M ${a.x} ${a.y} C ${midX} ${a.y}, ${midX} ${b.y}, ${b.x} ${b.y}`;
}

export function SystemSchematic() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <div ref={ref} className="w-full overflow-x-auto py-4">
      <svg
        viewBox="0 0 720 160"
        className="w-full min-w-[560px] h-auto"
        fill="none"
      >
        {edges.map(([from, to], i) => (
          <path
            key={i}
            d={edgePath(nodes[from], nodes[to])}
            stroke="#c8f04d"
            strokeWidth="1.5"
            strokeOpacity="0.5"
            pathLength={1}
            style={{
              strokeDasharray: 1,
              strokeDashoffset: inView ? 0 : 1,
              transition: `stroke-dashoffset 0.8s cubic-bezier(0.22,1,0.36,1) ${
                0.15 + i * 0.12
              }s`,
            }}
          />
        ))}

        {nodes.map((n, i) => (
          <g
            key={i}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'scale(1)' : 'scale(0.6)',
              transformOrigin: `${n.x}px ${n.y}px`,
              transition: `opacity 0.5s ease ${0.1 + i * 0.1}s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${
                0.1 + i * 0.1
              }s`,
            }}
          >
            <circle
              cx={n.x}
              cy={n.y}
              r="20"
              fill="#161616"
              stroke="#c8f04d"
              strokeWidth="1.5"
            />
            <circle cx={n.x} cy={n.y} r="4" fill="#c8f04d" />
            <text
              x={n.x}
              y={n.y + 38}
              textAnchor="middle"
              fill="#888888"
              fontSize="11"
              fontFamily="Inter, sans-serif"
              fontWeight="500"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
