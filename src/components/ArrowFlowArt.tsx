// Original abstract key art in the spirit of ArrowFlow: long lines that turn
// at right angles and end in arrowheads. Decorative only.
// Replace it with real screenshots in src/data/games.ts when you have them.

type Dir = 0 | 90 | 180 | 270; // 0 = right, 90 = down, 180 = left, 270 = up

interface Line {
  d: string;
  head: [number, number, Dir];
  hi?: boolean;
}

const lines: Line[] = [
  // Left edge, running the full height
  { d: 'M14 18 V386', head: [14, 386, 90] },
  // Spirals (highlighted)
  { d: 'M96 112 H30 V34 H104 V90 H54 V62 H80', head: [80, 62, 0], hi: true },
  { d: 'M214 168 V66 H124 V148 H196 V88 H146 V126 H170', head: [170, 126, 0], hi: true },
  { d: 'M96 226 H30 V306 H104 V250 H54 V284 H80', head: [80, 284, 0], hi: true },
  // Top right
  { d: 'M112 22 H176', head: [176, 22, 0] },
  { d: 'M126 44 H282', head: [282, 44, 0] },
  // Middle
  { d: 'M92 170 H40', head: [40, 170, 180] },
  { d: 'M30 192 H66', head: [66, 192, 0] },
  { d: 'M78 192 H98', head: [98, 192, 0] },
  { d: 'M126 206 H214', head: [214, 206, 0] },
  { d: 'M130 228 H280', head: [280, 228, 0] },
  { d: 'M236 250 H150', head: [150, 250, 180] },
  // Bottom
  { d: 'M214 326 H70', head: [70, 326, 180] },
  { d: 'M196 346 H52', head: [52, 346, 180] },
  { d: 'M52 368 H140', head: [140, 368, 0] },
  { d: 'M236 384 V334', head: [236, 334, 270] },
];

export function ArrowFlowArt() {
  return (
    <svg
      className="arrowart"
      viewBox="0 0 300 400"
      role="img"
      aria-label="Abstract illustration of winding arrow paths"
    >
      {lines.map((l, i) => {
        const color = l.hi ? '#3DE0FF' : '#6F8FD6';
        const [x, y, dir] = l.head;
        return (
          <g key={i}>
            <path
              d={l.d}
              fill="none"
              stroke={color}
              strokeWidth={5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polygon
              points="-13,-8 0,0 -13,8"
              fill={color}
              transform={`translate(${x} ${y}) rotate(${dir})`}
            />
          </g>
        );
      })}
    </svg>
  );
}
