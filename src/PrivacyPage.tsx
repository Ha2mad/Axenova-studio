import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { site } from './data/site';

const githubPrivacyUrl =
  'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement';

export function PrivacyPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header root="../" />
      <main id="main" className="legal">
        <div className="container legal__inner">
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
        </div>
      </main>
      <Footer root="../" />
    </>
  );
}
