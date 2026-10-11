// Original abstract backdrop: a dot grid with a light path that turns at right angles.
export function HeroBackdrop() {
  return (
    <svg
      className="hero__backdrop"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id="dots" width="48" height="48" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill="#5C7BC4" />
        </pattern>
        <radialGradient id="dots-fade" cx="70%" cy="55%" r="65%">
          <stop offset="0" stopColor="#fff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id="dots-mask">
          <rect width="1440" height="800" fill="url(#dots-fade)" />
        </mask>
        <linearGradient id="flow" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1440" y2="0">
          <stop offset="0" stopColor="#2F6BFF" />
          <stop offset="1" stopColor="#3DE0FF" />
        </linearGradient>
      </defs>

      <rect width="1440" height="800" fill="url(#dots)" mask="url(#dots-mask)" opacity="0.55" />

      <path
        className="hero__path-base"
        d="M-20 700 H300 V560 H620 V420 H940 V620 H1220 V300 H1460"
        fill="none"
        stroke="url(#flow)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        className="hero__path-flow"
        d="M-20 700 H300 V560 H620 V420 H940 V620 H1220 V300 H1460"
        fill="none"
        stroke="url(#flow)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
