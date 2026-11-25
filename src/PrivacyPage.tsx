import { Layout } from './components/Layout';
import { useLanguage } from './language';
import { site } from './data/site';

const githubPrivacyUrl =
  'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement';

export function PrivacyPage() {
  const { language } = useLanguage();
  return (
    <Layout page="privacy" root="../">
      <article className="legal">
        {language === 'zh-CN' ? <ChinesePolicy /> : <div className="container legal__inner">
          <h1 className="legal__title">Privacy Policy</h1>
          <p className="legal__meta">
            Last updated: October 23, 2026
          </p>

          <h2>1. Introduction</h2>
          <p>
            This Privacy Policy explains how {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) handles
            information in connection with our website and our mobile games, including ArrowFlow.
            ArrowFlow is an Android game published on Google Play under the package name
            com.AxnovaStudios.ArrowFlow. The game is fully offline.
          </p>

          <h2>2. Information we collect</h2>
          <p>
            ArrowFlow does not collect personal data. It does not use analytics, crash reporting,
            advertising SDKs, accounts, or network services, and it does not send information to us
            or to anyone else. Game progress is stored only on your device. That progress is not
            transmitted, and it is removed when you uninstall ArrowFlow or clear the app&rsquo;s data.
            This website is a static site hosted on GitHub Pages. The site does not collect personal
            data, does not set cookies, and does not run analytics or other tracking scripts. GitHub,
            which hosts the site, may process technical data such as IP addresses in server logs, as
            described in{' '}
            <a href={githubPrivacyUrl}>GitHub&rsquo;s General Privacy Statement</a>.
          </p>

          <h2>3. How we use information</h2>
          <p>
            We do not collect personal data through ArrowFlow or this website, so we do not use
            personal data for analytics, advertising, accounts, or any other purpose. Progress stored
            by ArrowFlow is used only on your device so the game can remember where you left off. It
            is not sent to us.
          </p>

          <h2>4. Third-party services</h2>
          <p>
            ArrowFlow does not include third-party analytics, advertising, crash reporting, account,
            or other network services. This website does not include analytics, advertising, or
            tracking scripts. The site is hosted on GitHub Pages. GitHub may process technical data
            such as IP addresses in server logs, as described in{' '}
            <a href={githubPrivacyUrl}>GitHub&rsquo;s General Privacy Statement</a>.
          </p>

          <h2>5. Advertising</h2>
          <p>
            ArrowFlow does not show ads. This website does not show ads. No advertising providers
            are used.
          </p>

          <h2>6. Children&rsquo;s privacy</h2>
          <p>
            ArrowFlow is intended for people aged 16 and older. It is not directed at children. We
            do not collect personal data from anyone, including children.
          </p>

          <h2>7. Data retention and deletion</h2>
          <p>
            We do not keep personal data from ArrowFlow or from this website, because we do not
            collect it. Game progress stays only on your device and is removed when you uninstall
            ArrowFlow or clear the app&rsquo;s data. We do not keep a copy of it.
          </p>

          <h2>8. Your choices and rights</h2>
          <p>
            You can delete the progress stored on your device by clearing ArrowFlow&rsquo;s data or
            uninstalling the app. Because we do not collect personal data, we do not hold an account
            or profile that we can provide, correct, or erase. If you have a question about this
            policy, contact us using the address below.
          </p>

          <h2>9. Security</h2>
          <p>
            ArrowFlow does not transmit personal data, and we do not store player information on a
            server. Progress remains on your device and is subject to that device&rsquo;s own
            protections. This website is a set of static pages and does not collect information. We
            do not claim that your device, or GitHub Pages, is free of security risk.
          </p>

          <h2>10. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at
            the top of this page shows when it was last revised.
          </p>

          <h2>11. Contact us</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at{' '}
            <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
          </p>
        </div>}
      </article>
    </Layout>
  );
}


function ChinesePolicy() {
  const githubPolicy = <a href={githubPrivacyUrl}>GitHub 通用隐私声明</a>;
  return <div className="container legal__inner">
    <h1 className="legal__title">隐私政策</h1>
    <p className="legal__meta">最后更新日期：2026 年 10 月 23 日</p>
    <h2>1. 简介</h2>
    <p>本隐私政策说明 Axenova Studios（“我们”）如何处理与本网站及我们的移动游戏（包括 ArrowFlow）相关的信息。ArrowFlow 是一款在 Google Play 上发布的安卓游戏，应用包名为 com.AxnovaStudios.ArrowFlow。该游戏可完全离线运行。</p>
    <h2>2. 我们收集的信息</h2>
    <p>ArrowFlow 不收集个人数据。游戏不使用分析、崩溃报告、广告 SDK、账号或网络服务，也不会向我们或任何第三方发送信息。游戏进度仅保存在设备上，不会传输。卸载 ArrowFlow 或清除应用数据后，进度将被删除。本网站由 GitHub Pages 托管，为静态网站，不收集个人数据、不设置 Cookie，也不运行分析或其他跟踪脚本。GitHub 可能在服务器日志中处理 IP 地址等技术数据，详情请参阅{githubPolicy}。</p>
    <h2>3. 信息的使用</h2>
    <p>由于我们不通过 ArrowFlow 或本网站收集个人数据，因此不会将个人数据用于分析、广告、账号或其他用途。ArrowFlow 保存的进度仅用于在设备上记录游戏进度，不会发送给我们。</p>
    <h2>4. 第三方服务</h2>
    <p>ArrowFlow 不包含第三方分析、广告、崩溃报告、账号或其他网络服务。本网站不包含分析、广告或跟踪脚本。本网站由 GitHub Pages 托管。GitHub 可能在服务器日志中处理 IP 地址等技术数据，详情请参阅{githubPolicy}。</p>
    <h2>5. 广告</h2>
    <p>ArrowFlow 和本网站均不展示广告，也不使用广告服务提供商。</p>
    <h2>6. 儿童隐私</h2>
    <p>ArrowFlow 面向 16 岁及以上人群，不以儿童为目标用户。我们不收集任何人的个人数据，包括儿童。</p>
    <h2>7. 数据保留与删除</h2>
    <p>我们不收集或保留来自 ArrowFlow 或本网站的个人数据。游戏进度仅保存在你的设备上，卸载 ArrowFlow 或清除应用数据后即会删除。我们不保留副本。</p>
    <h2>8. 你的选择与权利</h2>
    <p>你可以清除 ArrowFlow 的应用数据或卸载应用，以删除保存在设备上的进度。由于我们不收集个人数据，因此没有可以提供、更正或删除的账号或个人资料。如有任何疑问，请使用下方邮箱与我们联系。</p>
    <h2>9. 安全</h2>
    <p>ArrowFlow 不传输个人数据，我们也不会在服务器上存储玩家信息。进度保存在设备上，受设备自身的安全措施保护。本网站由静态页面组成，不收集信息。我们不保证你的设备或 GitHub Pages 完全没有安全风险。</p>
    <h2>10. 政策变更</h2>
    <p>我们可能不时更新本隐私政策。此页面顶部的“最后更新日期”表示最近一次修订的时间。</p>
    <h2>11. 联系我们</h2>
    <p>如对本隐私政策有疑问，请发送邮件至 <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>。</p>
  </div>;
}
