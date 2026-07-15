export default function FogEffect({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 animate-fog-drift"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 70%, rgba(80,60,60,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 animate-fog-drift-slow"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(60,40,50,0.06) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 animate-fog-drift"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 90%, rgba(40,20,30,0.1) 0%, transparent 50%)",
          animationDelay: "5s",
        }}
      />
    </div>
  );
}
