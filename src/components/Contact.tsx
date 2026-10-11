import { site } from '../data/site';

export function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Contact</h2>
        <div className="contact">
          <p className="contact__text">
            Players and business partners are welcome to get in touch. Send us a message and we will
            get back to you.
          </p>
          <div className="contact__actions">
            <a className="btn btn--primary" href={`mailto:${site.contactEmail}`}>
              Email {site.name}
            </a>
            <a className="contact__email" href={`mailto:${site.contactEmail}`}>
              {site.contactEmail}
            </a>
            {site.socialUrl && (
              <a className="contact__social" href={site.socialUrl} target="_blank" rel="noopener noreferrer">
                {site.socialLabel || 'Follow us'}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
