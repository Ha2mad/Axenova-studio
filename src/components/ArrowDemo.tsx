import { useRef, useState } from 'react';
import { useLanguage } from '../language';

const board = ['·↓···', '·→↓→·', '↑·→↓·', '·←·←·', '···↓·'].join('').split('');
const arrows = board.flatMap((symbol, cell) => symbol === '·' ? [] : [{ symbol, cell }]);
const directions = {
  '↑': [0, -1, 'up', '上'],
  '→': [1, 0, 'right', '右'],
  '↓': [0, 1, 'down', '下'],
  '←': [-1, 0, 'left', '左'],
} as const;

export function ArrowDemo() {
  const { t } = useLanguage();
  const [remaining, setRemaining] = useState(arrows.map(({ cell }) => cell));
  const [blocked, setBlocked] = useState<number | null>(null);
  const controls = useRef<Record<number, HTMLButtonElement | null>>({});
  const reset = useRef<HTMLButtonElement>(null);
  const cleared = remaining.length === 0;

  function move(cell: number, symbol: keyof typeof directions) {
    const [dx, dy] = directions[symbol];
    for (let x = cell % 5 + dx, y = Math.floor(cell / 5) + dy;
      x >= 0 && x < 5 && y >= 0 && y < 5; x += dx, y += dy) {
      if (remaining.includes(y * 5 + x)) {
        setBlocked(cell);
        return;
      }
    }
    const next = remaining.filter(value => value !== cell);
    const nextFocus = next.find(value => value > cell) ?? next[0];
    if (nextFocus === undefined) reset.current?.focus({ preventScroll: true });
    else controls.current[nextFocus]?.focus({ preventScroll: true });
    setRemaining(next);
    setBlocked(null);
  }

  return <div className="demo">
    <div className="demo-toolbar">
      <span><i aria-hidden="true" />{t('Play in browser', '浏览器试玩')}</span>
      <button ref={reset} type="button" onClick={() => {
        setRemaining(arrows.map(({ cell }) => cell)); setBlocked(null);
      }}>{t('Reset', '重置')}</button>
    </div>
    <div className="demo-grid" role="group" aria-label={t('Five by five puzzle board', '五乘五谜题棋盘')}>
      {board.map((symbol, cell) => {
        const dir = directions[symbol as keyof typeof directions];
        const live = dir && remaining.includes(cell);
        return <div key={cell} className="demo-cell">{live && <button type="button"
          ref={element => { controls.current[cell] = element; }}
          className={blocked === cell ? 'blocked' : ''}
          aria-label={t(
            `Row ${Math.floor(cell / 5) + 1}, column ${cell % 5 + 1}: ${dir[2]}`,
            `第 ${Math.floor(cell / 5) + 1} 行，第 ${cell % 5 + 1} 列：向${dir[3]}`,
          )}
          onClick={() => move(cell, symbol as keyof typeof directions)}>{symbol}</button>}</div>;
      })}
    </div>
    <p className="demo-status" role="status">
      {cleared ? t('Board cleared! Ready for the full game?', '棋盘已清空！准备好挑战完整版了吗？')
        : blocked !== null ? t('That path is blocked. Try another arrow.', '路线被挡住了。试试其他箭头。')
          : t(`${remaining.length} arrows left`, `剩余 ${remaining.length} 个箭头`)}
    </p>
  </div>;
}
