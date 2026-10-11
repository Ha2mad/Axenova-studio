import type { Game } from '../data/games';
import { ArrowFlowArt } from './ArrowFlowArt';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  const hasStoreLink = game.status === 'released' && game.storeUrl.trim() !== '';

  return (
    <article className="game" aria-labelledby={`game-${game.id}`}>
      <div className="game__art">
        <ArrowFlowArt />
      </div>
      <div className="game__body">
        {game.status === 'coming-soon' && <span className="badge">Coming Soon</span>}
        <h3 id={`game-${game.id}`} className="game__title">{game.title}</h3>
        <p className="game__text">{game.description}</p>
        {hasStoreLink && (
          <a className="btn btn--primary" href={game.storeUrl} target="_blank" rel="noopener noreferrer">
            View on Google Play
          </a>
        )}
      </div>
      {game.screenshots.length > 0 && (
        <ul className="shots" aria-label={`${game.title} screenshots`}>
          {game.screenshots.map((s) => (
            <li key={s.src}>
              <img src={s.src} alt={s.alt} loading="lazy" decoding="async" />
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
