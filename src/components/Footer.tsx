import { site } from '../data/site';
import { Logo } from './Logo';

interface FooterProps {
  root: string;
}

export function Footer({ root }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <Logo root={root} />
        <p className="site-footer__copy">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <nav aria-label="Footer">
          <ul className="site-footer__links">
            <li><a href={`${root}privacy-policy/`}>Privacy Policy</a></li>
            <li><a href={`${root}#contact`}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
