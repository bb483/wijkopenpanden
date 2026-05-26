export default function KeySVG({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Ring */}
      <circle cx="100" cy="80" r="60" stroke="currentColor" strokeWidth="6" />
      <circle cx="100" cy="80" r="38" stroke="currentColor" strokeWidth="4" />
      {/* Baard */}
      <line x1="100" y1="140" x2="100" y2="295" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      {/* Tanden */}
      <line x1="100" y1="200" x2="126" y2="200" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <line x1="100" y1="225" x2="118" y2="225" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <line x1="100" y1="250" x2="130" y2="250" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      {/* Oog-opening */}
      <circle cx="85" cy="72" r="10" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
}
