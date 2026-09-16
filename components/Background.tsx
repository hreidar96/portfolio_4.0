export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Animated aurora blobs */}
      <div className="aurora-blob aurora-blob--one" />
      <div className="aurora-blob aurora-blob--two" />
      <div className="aurora-blob aurora-blob--three" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--line-color) 1px, transparent 1px), linear-gradient(to bottom, var(--line-color) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)",
        }}
      />
    </div>
  );
}
