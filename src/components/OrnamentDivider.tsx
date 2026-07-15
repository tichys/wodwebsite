import type { ReactNode } from "react";

export default function OrnamentDivider({
  variant = "star",
  className = "",
}: {
  variant?: "star" | "cross" | "rose";
  className?: string;
}) {
  const icons: Record<string, ReactNode> = {
    star: (
      <path d="M12 2 L14 8 L20 8 L15 12 L17 18 L12 14 L7 18 L9 12 L4 8 L10 8 Z" />
    ),
    cross: (
      <>
        <path d="M12 2 L12 22 M6 8 L18 8 M8 6 L16 6" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="12" r="10" strokeWidth="0.5" fill="none" opacity="0.3" />
      </>
    ),
    rose: (
      <>
        <circle cx="12" cy="12" r="4" strokeWidth="1" fill="none" />
        <circle cx="12" cy="12" r="7" strokeWidth="0.8" fill="none" opacity="0.5" />
        <circle cx="12" cy="12" r="10" strokeWidth="0.5" fill="none" opacity="0.3" />
        <path d="M12 2 L12 5 M12 19 L12 22 M2 12 L5 12 M19 12 L22 12" strokeWidth="0.8" fill="none" />
      </>
    ),
  };

  return (
    <div className={`blood-divider ${className}`}>
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 text-gold-500"
        fill={variant === "star" ? "currentColor" : "none"}
        stroke="currentColor"
      >
        {icons[variant]}
      </svg>
    </div>
  );
}
