import { useEffect, useState } from 'react';
import { Logo } from './Logo';

interface HeaderProps {
  /** '' on the home page, '../' on pages inside a sub-folder. */
  root: string;
}

export function Header({ root }: HeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Logo root={root} />
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="menu-toggle__bars" aria-hidden="true" />
        </button>
        <nav id="primary-nav" className={`nav${open ? ' is-open' : ''}`} aria-label="Primary">
          <ul>
            <li><a href={`${root}#home`} onClick={close}>Home</a></li>
            <li><a href={`${root}#games`} onClick={close}>Our Games</a></li>
            <li><a href={`${root}#about`} onClick={close}>About</a></li>
            <li><a href={`${root}#contact`} onClick={close}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
