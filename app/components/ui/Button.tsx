import { ButtonHTMLAttributes, ComponentPropsWithoutRef, ElementType, JSX } from 'react';

type ButtonProps<T extends ElementType> = {
  as?: T;
  variant?: 'primary' | 'default';
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className'>;

const primaryGradientClasses =
  "inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#6EE7F2] text-black font-medium disabled:opacity-60";

const defaultClasses =
  "inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-white/15 text-white/80 hover:bg-white/10 disabled:opacity-60";

export function Button<T extends ElementType = 'button'>({
  as,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps<T>): JSX.Element {
  const Component = as ?? 'button';
  const classes = [
    variant === 'primary' ? primaryGradientClasses : defaultClasses,
    className,
  ]
    .filter(Boolean)
    .join(' ');
  const finalProps = { ...(props as ComponentPropsWithoutRef<T>) };

  if (Component === 'button' && !(finalProps as ButtonHTMLAttributes<HTMLButtonElement>).type) {
    (finalProps as ButtonHTMLAttributes<HTMLButtonElement>).type = 'button';
  }

  return <Component className={classes} {...finalProps} />;
}
