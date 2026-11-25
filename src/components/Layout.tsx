import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useLanguage } from '../language';

function Brand({ root }: { root: string }) {
  const { t } = useLanguage();
  return <a className="brand" href={root || './'} aria-label={t('Axenova Studios home', 'Axenova Studios 首页')}>
    <img src={root + 'favicon.svg'} width="38" height="38" alt="" />
    <span>AXENOVA <small>STUDIOS</small></span>
  </a>;
}

export function Layout({ root, page, children }: { root: string; page: 'home' | 'game' | 'privacy'; children: ReactNode }) {
  const { t, language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const menu = useRef<HTMLButtonElement>(null);
  const navigation = useRef<HTMLElement>(null);

  useEffect(() => {
    if (open) navigation.current?.querySelector('a')?.focus();
  }, [open]);

  const links = [
    ['games', t('Games', '游戏')],
    ['about', t('Studio', '工作室')],
    ['news', t('News', '动态')],
    ['contact', t('Support', '支持')],
  ];

  return <>
    <a className="skip" href="#main">{t('Skip to content', '跳转到内容')}</a>
    <header className="site-header" onKeyDown={(event) => {
      if (open && event.key === 'Escape') {
        setOpen(false);
        menu.current?.focus();
      }
    }}>
      <div className="container header-inner">
        <Brand root={root} />
        <nav ref={navigation} id="main-nav" className={open ? 'nav open' : 'nav'} aria-label={t('Main navigation', '主导航')}>
          {links.map(([id, label]) => <a key={id} href={root + '#' + id} onClick={() => {
            setOpen(false);
            if (page === 'home' && open) document.getElementById(id)?.focus();
          }}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <div className="languages" role="group" aria-label={t('Language', '语言')}>
            <button type="button" lang="en" aria-label="English" aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>EN</button>
            <button type="button" lang="zh-CN" aria-label="简体中文" aria-pressed={language === 'zh-CN'} onClick={() => setLanguage('zh-CN')}>简中</button>
          </div>
          <button type="button" className="menu" ref={menu} aria-controls="main-nav" aria-expanded={open} onClick={() => setOpen(!open)}>{t('Menu', '菜单')}</button>
        </div>
      </div>
    </header>
    <main id="main" tabIndex={-1}>{children}</main>
    <footer className="site-footer">
      <div className="container footer-inner">
        <Brand root={root} />
        <p>© {new Date().getFullYear()} Axenova Studios</p>
        <nav aria-label={t('Footer', '页脚')}>
          <a href={root + 'privacy-policy/'} aria-current={page === 'privacy' ? 'page' : undefined}>{t('Privacy policy', '隐私政策')}</a>
          <a href={root + '#contact'}>{t('Support', '支持')}</a>
        </nav>
      </div>
    </footer>
  </>;
}
