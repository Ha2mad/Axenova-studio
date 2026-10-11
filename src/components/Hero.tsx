import { HeroBackdrop } from './HeroBackdrop';

export function Hero() {
  return (
    <section id="home" className="hero">
      <HeroBackdrop />
      <div className="container hero__content">
        <h1 className="hero__title">
          <span>Crafting Games.</span>
          <span className="hero__title-2">Creating Experiences.</span>
        </h1>
        <p className="hero__lead">
          Axenova Studios is an independent game development studio focused on creating engaging,
          polished, and memorable gaming experiences.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#games">Explore Our Games</a>
          <a className="btn btn--ghost" href="#about">About Our Studio</a>
        </div>
      </div>
    </section>
  );
}
