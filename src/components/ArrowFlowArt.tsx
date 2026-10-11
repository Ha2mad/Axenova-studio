// Original abstract key art: a grid of arrow tiles with one highlighted route.
// It is decorative only. Replace it by adding screenshots in src/data/games.ts.

const SIZE = 6;
const CELL = 64;
const GAP = 10;
const TOTAL = SIZE * CELL + (SIZE - 1) * GAP;

// 0 = right, 1 = down, 2 = left, 3 = up
const base: number[][] = [
  [0, 0, 1, 2, 3, 0],
  [3, 1, 1, 0, 0, 1],
  [0, 0, 0, 1, 2, 2],
  [1, 3, 2, 1, 0, 1],
  [1, 0, 0, 0, 1, 3],
  [0, 0, 3, 2, 0, 0],
];

const route: Array<[number, number]> = [
  [0, 0], [0, 1], [0, 2], [1, 2], [1, 3], [1, 4], [2, 4], [3, 4], [3, 5], [4, 5], [5, 5],
];

function directionBetween(a: [number, number], b: [number, number]): number {
  if (b[1] > a[1]) return 0;
  if (b[0] > a[0]) return 1;
  if (b[1] < a[1]) return 2;
  return 3;
}

const grid = base.map((row) => row.slice());
const routeIndex = new Map<string, number>();
route.forEach(([r, c], i) => {
  routeIndex.set(`${r}-${c}`, i);
  grid[r][c] = i < route.length - 1 ? directionBetween([r, c], route[i + 1]) : 0;
});

export function ArrowFlowArt() {
  const tiles = [];
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      const x = c * (CELL + GAP);
      const y = r * (CELL + GAP);
      const idx = routeIndex.get(`${r}-${c}`);
      const on = idx !== undefined;
      tiles.push(
        <g key={`${r}-${c}`}>
          <rect
            className={on ? 'tile tile--on' : 'tile'}
            style={on ? { animationDelay: `${idx * 0.22}s` } : undefined}
            x={x}
            y={y}
            width={CELL}
            height={CELL}
            rx={12}
          />
          <g
            className={on ? 'arrow arrow--on' : 'arrow'}
            transform={`translate(${x + CELL / 2} ${y + CELL / 2}) rotate(${grid[r][c] * 90})`}
          >
            <path d="M-13 0 H13 M4 -9 L13 0 L4 9" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>,
      );
    }
  }

  return (
    <svg
      className="arrowart"
      viewBox={`-4 -4 ${TOTAL + 8} ${TOTAL + 8}`}
      role="img"
      aria-label="Abstract illustration of a grid of arrows with one highlighted route"
    >
      {tiles}
    </svg>
  );
}
