import { games } from '../data/games';
import { GameCard } from './GameCard';

export function Games() {
  return (
    <section id="games" className="section">
      <div className="container">
        <h2 className="section__title">Our Games</h2>
        <div className="games">
          {games.map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
        </div>
      </div>
    </section>
  );
}
