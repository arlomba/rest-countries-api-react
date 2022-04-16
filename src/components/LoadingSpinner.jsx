export default function LoadingSpinner() {
  return (
    <figure className="flex justify-center items-center h-screen">
      <svg viewBox="0 0 38 38" className="w-24 h-24">
        <defs>
          <linearGradient id="a" x1="8.042%" x2="65.682%" y1="0%" y2="23.865%">
            <stop offset="0%" stopOpacity="0" />
            <stop offset="63.146%" stopOpacity=".631" />
            <stop offset="100%" />
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd" transform="translate(1 1)">
          <path
            stroke="url(#a)"
            strokeWidth="2"
            d="M36 18c0-9.94-8.06-18-18-18"
          >
            <animateTransform
              attributeName="transform"
              dur="0.9s"
              from="0 18 18"
              repeatCount="indefinite"
              to="360 18 18"
              type="rotate"
            />
          </path>
          <circle cx="36" cy="18" r="1">
            <animateTransform
              attributeName="transform"
              dur="0.9s"
              from="0 18 18"
              repeatCount="indefinite"
              to="360 18 18"
              type="rotate"
            />
          </circle>
        </g>
      </svg>
    </figure>
  );
}
