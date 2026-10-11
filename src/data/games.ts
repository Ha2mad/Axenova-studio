// To add a new game, copy the object below, give it a unique `id`, and add it to the array.
// The Our Games section renders every entry automatically.

export type GameStatus = 'coming-soon' | 'released';

export interface Screenshot {
  /** Path relative to the public/ folder, e.g. 'screenshots/arrowflow-1.png' */
  src: string;
  /** Describe what the screenshot shows (needed for accessibility). */
  alt: string;
}

export interface Game {
  id: string;
  title: string;
  description: string;
  /** 'coming-soon' shows a status badge. 'released' shows the store button when storeUrl is set. */
  status: GameStatus;
  /** Your Google Play listing URL. Leave empty until the game is public. */
  storeUrl: string;
  /** Add real screenshots here once you have them. */
   screenshots: [
     { src: 'screenshots/arrowflow-1.jpeg', alt: 'ArrowFlow puzzle level with winding arrow paths' },
   ],
}

export const games: Game[] = [
  {
    id: 'arrowflow',
    title: 'ArrowFlow',
    description:
      'Discover ArrowFlow, a grid-based puzzle game that challenges players to think strategically, solve intricate paths, and progress through increasingly engaging levels.',
    status: 'coming-soon',
    storeUrl: '',
      screenshots: [
     { src: 'screenshots/arrowflow-1.jpeg', alt: 'ArrowFlow puzzle level with winding arrow paths' },
   ],
  },
];
