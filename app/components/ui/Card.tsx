import { ComponentPropsWithoutRef, ElementType, JSX } from 'react';

type CardProps<T extends ElementType> = {
  as?: T;
  interactive?: boolean;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className'>;

export function Card<T extends ElementType = 'div'>({
  as,
  interactive = false,
  className = '',
  ...props
}: CardProps<T>): JSX.Element {
  const Component = as ?? 'div';
  const classes = ['card', interactive ? 'card--interactive' : '', className].filter(Boolean).join(' ');

  return <Component className={classes} {...(props as ComponentPropsWithoutRef<T>)} />;
}
