'use client';

import { usePathname } from 'next/navigation';
import Link, { LinkProps } from 'next/link';
import React, { PropsWithChildren, forwardRef } from 'react';

type ActiveLinkProps = LinkProps & {
  className?: string
  activeClassName: string
  disableActive?: boolean
  onFocus?: () => void
  onBlur?: () => void
  onMouseEnter?: () => void
}

const ActiveLink = forwardRef<HTMLAnchorElement, PropsWithChildren<ActiveLinkProps>>(({
  children,
  activeClassName,
  className,
  disableActive = false,
  ...props
}, ref) => {
  const pathname = usePathname();

  activeClassName = activeClassName || 'is-active';

  const isActive = !disableActive && pathname.startsWith(`${props.href}`);
  const classes = `${ className ? className : '' } ${ isActive ? activeClassName : '' }`.trim();

  return (
    <Link className={ classes } ref={ref} {...props}>
      {children}
    </Link>
  );
});

ActiveLink.displayName = 'ActiveLink';

export default ActiveLink;
