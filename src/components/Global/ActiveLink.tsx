'use client';

import { usePathname } from 'next/navigation';
import Link, { LinkProps } from 'next/link';
import React, { PropsWithChildren } from 'react';

type ActiveLinkProps = LinkProps & {
  className?: string
  activeClassName: string
}

const ActiveLink = ({
  children,
  activeClassName,
  className,
  ...props
}: PropsWithChildren<ActiveLinkProps>) => {
  const pathname = usePathname();

  activeClassName = activeClassName || 'is-active';

  const classes = `${ className ? className : '' } ${ pathname.startsWith(`${props.href}`) ? activeClassName : '' }`.trim();

  return (
    <Link className={ classes } {...props}>
      {children}
    </Link>
  );
}

export default ActiveLink;
