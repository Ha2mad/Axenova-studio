import type { ReactNode } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { site } from './data/site';

// Each Todo block below is a placeholder you must replace after verifying
// what your game and website actually do. Run "npm run check" to list them.
function Todo({ children }: { children: ReactNode }) {
  return <mark className="todo">[TO COMPLETE: {children}]</mark>;
}

export function PrivacyPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header root="../" />
      <main id="main" className="legal">
        <div className="container legal__inner">
          <h1 className="legal__title">Privacy Policy</h1>
          <p className="legal__meta">
            Last updated: <Todo>date</Todo>
          </p>

          <h2>1. Introduction</h2>
          <p>
            This Privacy Policy explains how {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) handles
            information in connection with our website and our mobile games, including ArrowFlow.
          </p>

          <h2>2. Information we collect</h2>
          <p>
            <Todo>
              List every type of information the game and website actually collect, for example
              device identifiers, gameplay data, or crash reports. State that no data is collected
              only after you have verified this.
            </Todo>
          </p>

          <h2>3. How we use information</h2>
          <p>
            <Todo>Describe each purpose for which the information above is used.</Todo>
          </p>

          <h2>4. Third-party services</h2>
          <p>
            <Todo>
              Name every third-party SDK or service used by the game or website (analytics,
              advertising, crash reporting, hosting, and so on) and link to each provider&rsquo;s own
              privacy policy. If there are none, say so only after verifying.
            </Todo>
          </p>

          <h2>5. Advertising</h2>
          <p>
            <Todo>Explain whether the game shows ads and which providers are involved, or remove this section.</Todo>
          </p>

          <h2>6. Children&rsquo;s privacy</h2>
          <p>
            <Todo>State the minimum age your game is intended for and how you handle information from children.</Todo>
          </p>

          <h2>7. Data retention and deletion</h2>
          <p>
            <Todo>Explain how long data is kept and how a person can request deletion.</Todo>
          </p>

          <h2>8. Your choices and rights</h2>
          <p>
            <Todo>Describe the choices available to players and any rights that apply in your regions.</Todo>
          </p>

          <h2>9. Security</h2>
          <p>
            <Todo>Briefly describe the measures you take to protect information, without overstating them.</Todo>
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
