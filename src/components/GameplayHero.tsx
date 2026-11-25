import type { Game } from '../data/games';
import { useLanguage } from '../language';

type Gameplay = NonNullable<Game['heroGameplay']>;

export function GameplayHero({ gameplay, root = '' }: { gameplay: Gameplay; root?: string }) {
  const { language, t } = useLanguage();
  const [first, second] = gameplay;

  return (
    <figure className="gameplay-hero">
      <div className="gameplay-stage">
        <img className="gameplay-screen gameplay-screen--back" src={root + first.src}
          alt={first.alt[language]} width="307" height="660" decoding="async" />
        <img className="gameplay-screen gameplay-screen--front" src={root + second.src}
          alt={second.alt[language]} width="307" height="660" fetchPriority="high" />
      </div>
      <figcaption>{t('ArrowFlow gameplay · Levels 1 and 2', 'ArrowFlow 实机画面 · 第 1 与第 2 关')}</figcaption>
    </figure>
  );
}
