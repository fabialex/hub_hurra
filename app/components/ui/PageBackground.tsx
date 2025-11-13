import { ReactNode } from "react";

export default function PageBackground({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`page-shell ${className}`}>
      <div className="page-shell__grid" aria-hidden />
      <div className="page-shell__spark page-shell__spark--left" aria-hidden />
      <div className="page-shell__spark page-shell__spark--right" aria-hidden />
      {children}
    </div>
  );
}
