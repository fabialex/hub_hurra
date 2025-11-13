import { ReactNode } from 'react';

export default function Section({
  id,
  className = '',
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  const combined = ['section-shell', className].filter(Boolean).join(' ');

  return (
    <section id={id} className={combined}>
      <div className="section-glow" aria-hidden />
      <div className="mx-auto max-w-6xl px-4">{children}</div>
    </section>
  );
}
