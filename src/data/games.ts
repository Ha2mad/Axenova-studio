export type Language = 'en' | 'zh-CN';
export type Localized = Record<Language, string>;

export interface Game {
  id: string;
  title: string;
  description: Localized;
  status: 'coming-soon' | 'released';
  storeUrl?: string;
  detailPath?: string;
  icon?: string;
  trailerUrl?: string;
  screenshots: { src: string; alt: Localized }[];
  updates: { date: string; title: Localized; changes: Localized[] }[];
}

export const games: Game[] = [
  {
    id: 'arrowflow',
    title: 'ArrowFlow',
    description: {
      en: 'Tap arrows to send them off the board. Find the right order, clear winding paths, and work your way through 100 hand-picked puzzles.',
      'zh-CN': '轻点箭头，让它们滑出棋盘。找出正确顺序，清理曲折路线，挑战 100 个精心挑选的关卡。',
    },
    status: 'released',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.AxnovaStudios.ArrowFlow',
    detailPath: 'games/arrowflow/',
    icon: 'arrowflow/icon.webp',
    screenshots: [
      { src: 'arrowflow/screen-1.webp', alt: { en: 'Level 1 with a spiral path and open arrows', 'zh-CN': '第 1 关，包含螺旋路线和可移出的箭头' } },
      { src: 'arrowflow/screen-2.webp', alt: { en: 'Level 2 with a denser maze of arrows', 'zh-CN': '第 2 关，箭头迷宫更加密集' } },
      { src: 'arrowflow/screen-3.webp', alt: { en: 'Level selection screen with a grid of puzzles', 'zh-CN': '关卡选择界面，以网格展示谜题' } },
      { src: 'arrowflow/screen-4.webp', alt: { en: 'Cleared board with options to continue or replay', 'zh-CN': '棋盘清空后可继续或重玩' } },
    ],
    updates: [
      {
        date: '2026-11-15',
        title: { en: 'Google Play release notes', 'zh-CN': 'Google Play 更新说明' },
        changes: [
          { en: 'Original puzzle campaign playable offline.', 'zh-CN': '原创谜题关卡支持离线游玩。' },
          { en: 'Hints, zoom, and panning help you navigate dense puzzles.', 'zh-CN': '提示、缩放和平移功能帮助你看清复杂棋盘。' },
          { en: 'Three hearts per level, with a heart lost for each blocked move.', 'zh-CN': '每关有三颗心，每次尝试移动受阻的箭头会消耗一颗。' },
          { en: 'Animated home screens, dark mode, audio and haptics settings, and a reduced-motion option.', 'zh-CN': '提供动态主界面、深色模式、声音和振动设置，以及减少动态效果选项。' },
        ],
      },
    ],
  },
];
