/* Fond décoratif de la section Echos — silhouette de roches en filigrane */
export default function EchosMotifBackground() {
  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none"
      aria-hidden
    >
      {/* Roches gauche */}
      <svg
        className="absolute -left-16 top-1/2 -translate-y-1/2 opacity-[0.04] text-brand"
        width="420" height="380" viewBox="0 0 420 380" fill="currentColor"
      >
        <ellipse cx="140" cy="200" rx="130" ry="170" />
        <ellipse cx="280" cy="240" rx="90" ry="130" />
        <ellipse cx="60" cy="310" rx="60" ry="80" />
      </svg>
      {/* Roches droite */}
      <svg
        className="absolute -right-16 top-1/4 opacity-[0.04] text-brand"
        width="380" height="340" viewBox="0 0 380 340" fill="currentColor"
      >
        <ellipse cx="240" cy="160" rx="120" ry="155" />
        <ellipse cx="100" cy="200" rx="80" ry="110" />
        <ellipse cx="320" cy="270" rx="65" ry="90" />
      </svg>
      {/* Subtle diagonal lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(89,52,20,0.015) 60px, rgba(89,52,20,0.015) 61px)',
        }}
      />
    </div>
  );
}
