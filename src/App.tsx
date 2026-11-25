import { Layout } from './components/Layout';
import { ArrowDemo } from './components/ArrowDemo';
import { GameplayHero } from './components/GameplayHero';
import { games } from './data/games';
import { site } from './data/site';
import { useLanguage } from './language';

export default function App() {
  const { language, t } = useLanguage();
  const featured = games[0];

  return <Layout root="" page="home">
    <section id="home" className="hero studio-hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow studio-kicker"><span />{t('AXENOVA STUDIOS / FEATURED GAME', 'AXENOVA STUDIOS / 主打游戏')}</p>
          <h1>{featured.title}</h1>
          <p className="hero-tagline">{t('Every arrow has a way out.', '每个箭头都有一条出路。')}</p>
          <p className="hero-description">{t('Tap arrows to slide them off the board. The trick is finding which one goes first.', '轻点箭头，让它们滑出棋盘。关键是找出哪个箭头该先走。')}</p>
        </div>
        {featured.heroGameplay && <GameplayHero gameplay={featured.heroGameplay} />}
        <div className="hero-cta">
          <div className="actions">
            {featured.storeUrl && <a className="button primary" href={featured.storeUrl}>
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3v18l15-9L5 3Z" /></svg>
              {t('Get it on Google Play', '在 Google Play 下载')}
            </a>}
            <a className="button secondary" href="#try-puzzle">{t('Try a puzzle', '试玩谜题')} <span aria-hidden="true">↓</span></a>
          </div>
          <ul className="hero-facts" aria-label={t('Game highlights', '游戏亮点')}>
            <li>{t('Free on Android', '安卓免费')}</li>
            <li>{t('100 puzzles', '100 个关卡')}</li>
            <li>{t('Plays offline', '支持离线')}</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="try-puzzle" className="section container puzzle-section" tabIndex={-1}>
      <div className="puzzle-copy">
        <p className="eyebrow">{t('The ArrowFlow mini puzzle', 'ArrowFlow 迷你谜题')}</p>
        <h2>{t('Which arrow goes first?', '哪个箭头先走？')}</h2>
        <p>{t('Tap an arrow to send it in the direction it points. If another arrow is in the way, clear that one first. No download needed.', '轻点箭头，让它沿指向滑出。如果路上有其他箭头，先把挡路的箭头移开。无需下载。')}</p>
        {featured.detailPath && <a className="puzzle-link" href={featured.detailPath}>{t('Explore the full game', '探索完整版')} <span aria-hidden="true">↗</span></a>}
      </div>
      <ArrowDemo />
    </section>

    <section id="games" className="section container" tabIndex={-1}>
      <p className="eyebrow">{t('The game library', '游戏库')}</p>
      <h2>{t('Games by Axenova', 'Axenova 的游戏')}</h2>
      <div className="library">
        {games.map(game => <article className="game-card" key={game.id}>
          <div className="card-copy">
            {game.icon && <img className="game-icon" src={game.icon} width="66" height="66" alt="" loading="lazy" />}
            <p className="release"><span />{game.status === 'released' ? t('Available now', '现已发布') : t('Coming soon', '即将推出')}</p>
            <h3>{game.title}</h3>
            <p>{game.description[language]}</p>
            <div className="actions">
              {game.detailPath && <a className="button primary" href={game.detailPath}>{t('Game details', '游戏详情')}</a>}
              {game.status === 'released' && game.storeUrl && <a className="button secondary" href={game.storeUrl}>Google Play</a>}
            </div>
          </div>
          {game.screenshots.length > 0 && <div className="card-media">
            {game.screenshots.slice(-2).map(shot => <img key={shot.src} src={shot.src} alt={shot.alt[language]} width="506" height="900" loading="lazy" decoding="async" />)}
          </div>}
        </article>)}
      </div>
    </section>

    <section id="about" className="section studio" tabIndex={-1}>
      <div className="container studio-grid">
        <div>
          <p className="eyebrow">{t('The studio', '关于工作室')}</p>
          <h2>{t('Made for curious players.', '为好奇的玩家而做。')}</h2>
        </div>
        <p>{t('Axenova Studios is an independent team making mobile games. We focus on mechanics you can learn quickly, puzzles worth taking your time over, and games that fit into an ordinary day.', 'Axenova Studios 是一家独立移动游戏工作室。我们专注于容易上手的玩法、值得慢慢琢磨的谜题，以及能融入日常生活的游戏体验。')}</p>
      </div>
    </section>

    <section id="news" className="section container" tabIndex={-1}>
      <h2>{t('Studio news', '工作室新闻')}</h2>
      <article className="news-card">
        <div>
          <p className="release"><span />{t('Release', '发布')}</p>
          <h3>{t('ArrowFlow is on Google Play', 'ArrowFlow 已登陆 Google Play')}</h3>
          <p>{t('Our first Android puzzler is free to play and currently ad-free.', '我们的首款安卓解谜游戏现已免费推出，目前无广告。')}</p>
        </div>
        <a className="button secondary" href={featured.detailPath + '#changelog'}>{t('Read the release notes', '查看更新说明')}</a>
      </article>
    </section>

    <section id="contact" className="section support" tabIndex={-1}>
      <div className="container studio-grid">
        <div>
          <p className="eyebrow">{t('Support', '支持')}</p>
          <h2>{t('Get in touch', '联系我们')}</h2>
          <p>{t('For game support, include your device model, Android version, and what happened. For business inquiries, contact the studio.', '如需游戏支持，请说明设备型号、安卓版本和遇到的问题。商务合作请联系工作室。')}</p>
        </div>
        <div className="support-links">
          <a className="button primary" href={'mailto:' + site.gameSupportEmail}>{t('Email game support', '发送邮件获取游戏支持')}</a>
          <a className="button secondary" href={'mailto:' + site.contactEmail}>{t('Email the studio', '给工作室发邮件')}</a>
          {site.channels.some(channel => channel.url) && <div className="channels">
            {site.channels.map(channel => channel.url && <a key={channel.name} href={channel.url}>{channel.name}</a>)}
          </div>}
        </div>
      </div>
    </section>
  </Layout>;
}
