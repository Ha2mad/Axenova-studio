import { Layout } from './components/Layout';
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
          <p className="eyebrow">{t('Axenova Studios · Independent games', 'Axenova Studios · 独立游戏')}</p>
          <h1>{featured.title}</h1>
          <p className="hero-tagline">{t('Find the right move.', '找出正确的一步。')}</p>
          <p className="lead">{featured.description[language]}</p>
          <div className="actions">
            {featured.storeUrl && <a className="button primary" href={featured.storeUrl}>{t('Get it on Google Play', '在 Google Play 下载')}</a>}
            {featured.detailPath && <a className="button secondary" href={featured.detailPath}>{t('Explore ArrowFlow', '探索 ArrowFlow')}</a>}
          </div>
        </div>
        {featured.heroGameplay && <GameplayHero gameplay={featured.heroGameplay} />}
      </div>
    </section>

    <section id="games" className="section container" tabIndex={-1}>
      <h2>{t('Our games', '我们的游戏')}</h2>
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
