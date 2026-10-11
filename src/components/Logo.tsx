interface LogoProps {
  root: string;
}

export function Logo({ root }: LogoProps) {
  return (
    <a className="logo" href={`${root}#home`} aria-label="Axenova Studios home">
      <svg className="logo__mark" viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#3DE0FF" />
            <stop offset="1" stopColor="#2F6BFF" />
          </linearGradient>
        </defs>
        <path
          d="M5 27 L16 5 L27 27 M10.5 20 H21.5"
          fill="none"
          stroke="url(#logo-grad)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="logo__name">Axenova</span>
      <span className="logo__sub">Studios</span>
    </a>
  );
}
