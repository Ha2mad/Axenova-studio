import { Layout } from './components/Layout';
import { games } from './data/games';
import { site } from './data/site';
import { useLanguage } from './language';
import apk from 'virtual:verified-apk';

const game = games.find(entry => entry.id === 'arrowflow')!;
const root = '../../';

export function GamePage() {
  const { language, t } = useLanguage();

  return <Layout root={root} page="game">
    <section className="hero game-hero">
      <div className="container">
        <a className="back" href={root + '#games'}>{t('All games', '所有游戏')}</a>
        <div className="game-heading">
          <div className="game-identity">
            {game.icon && <img className="game-icon" src={root + game.icon} alt="" width="80" height="80" />}
            <div>
              <p className="release"><span />{t('Available on Android', '现已登陆安卓')}</p>
              <h1>{game.title}</h1>
            </div>
          </div>
          <div className="actions">
            <a className="button primary" href={game.storeUrl}>{t('Get it on Google Play', '在 Google Play 下载')}</a>
            <a className="button secondary" href="#install">{t('Installation guide', '安装指南')}</a>
          </div>
        </div>

        <section className="game-gallery" aria-labelledby="gameplay">
          <h2 id="gameplay">{t('Gameplay gallery', '实机截图')}</h2>
          <ul className="gallery">
            {game.screenshots.map((shot, index) => <li key={shot.src}>
              <a href={root + shot.src} aria-label={t('Open screenshot: ', '查看截图：') + shot.alt[language]}>
                <img src={root + shot.src} alt={shot.alt[language]} width="506" height="900"
                  loading={index < 2 ? 'eager' : 'lazy'} decoding="async" />
              </a>
            </li>)}
          </ul>
          {game.trailerUrl && <a className="button secondary trailer-link" href={game.trailerUrl}>
            {t('Watch the gameplay trailer', '观看实机预告片')}
          </a>}
        </section>
      </div>
    </section>

    <section className="section studio" aria-labelledby="features">
      <div className="container">
        <h2 id="features">{t('How ArrowFlow plays', 'ArrowFlow 玩法')}</h2>
        <p className="lead">{game.description[language]}</p>
        <ul className="tags">
          <li>{t('Free to play', '免费游玩')}</li>
          <li>{t('Currently ad-free', '目前无广告')}</li>
          <li>{t('Offline', '离线游玩')}</li>
        </ul>
        <ul className="features">
          <li><h3>{t('100 puzzles', '100 个谜题')}</h3><p>{t('Start with simple boards and work up to more intricate routes.', '从简单棋盘开始，逐步挑战更复杂的路线。')}</p></li>
          <li><h3>{t('Tools for trickier boards', '复杂棋盘的辅助工具')}</h3><p>{t('Zoom in, pan around, or use a hint when you get stuck.', '可缩放和平移棋盘，遇到难题时也可以使用提示。')}</p></li>
          <li><h3>{t('Play offline', '离线游玩')}</h3><p>{t('Play without an account or an internet connection after installation.', '安装后无需账号或联网即可游玩。')}</p></li>
        </ul>
      </div>
    </section>

    <section id="install" className="section container">
      <h2>{t('Install ArrowFlow', '安装 ArrowFlow')}</h2>
      <ol className="instructions">
        <li>{t('Open the official ArrowFlow listing on your Android device.', '在安卓设备上打开 ArrowFlow 的官方商店页面。')}</li>
        <li>{t('Tap Install and wait for Google Play to finish.', '轻点“安装”，等待 Google Play 完成安装。')}</li>
        <li>{t('Tap Open to play.', '轻点“打开”开始游玩。')}</li>
      </ol>
      <a className="button primary" href={game.storeUrl}>{t('Open Google Play', '打开 Google Play')}</a>
      {apk && <details className="disclosure">
        <summary>{t('Install the signed APK', '安装已签名的 APK')}</summary>
        <p>{t('Download the APK from GitHub Releases and compare its SHA-256 with the value below. Open the file, grant your installer permission if prompted, and turn the permission off again after installation.', '从 GitHub Releases 下载 APK，并核对下方的 SHA-256 值。打开文件，如有提示则授予安装权限，安装后再关闭该权限。')}</p>
        <p className="checksum">SHA-256 <code>{apk.sha256}</code></p>
        <a className="button secondary" href={apk.url}>{t('Download signed APK', '下载已签名的 APK')}</a>
      </details>}
    </section>

    <section id="changelog" className="section studio">
      <div className="container">
        <h2>{t('Version history', '版本历史')}</h2>
        {game.updates.map(update => <details key={update.date} className="disclosure" open>
          <summary>{update.title[language]} · <time dateTime={update.date}>
            {new Intl.DateTimeFormat(language, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(new Date(update.date))}
          </time></summary>
          <ul>{update.changes.map(change => <li key={change.en}>{change[language]}</li>)}</ul>
        </details>)}
      </div>
    </section>

    <section className="section container">
      <h2>{t('ArrowFlow support', 'ArrowFlow 支持')}</h2>
      <p className="lead">{t('Send your device model, Android version, and a description of the issue.', '请提供设备型号、安卓版本以及遇到的问题。')}</p>
      <div className="actions">
        <a className="button primary" href={'mailto:' + site.gameSupportEmail}>{t('Email game support', '发送邮件获取游戏支持')}</a>
        <a className="button secondary" href={root + 'privacy-policy/'}>{t('Privacy policy', '隐私政策')}</a>
      </div>
    </section>
  </Layout>;
}
