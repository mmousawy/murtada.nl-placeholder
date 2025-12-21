import React, { ReactNode } from 'react';
import st from './ShadowWrapper.module.scss';

type ShadowWrapperProps = {
  children: ReactNode;
  className?: string;
  shadowColor?: string;
  as?: React.ElementType;
  noBorder?: boolean;
};

const ShadowWrapper: React.FC<ShadowWrapperProps> = ({
  children,
  className,
  shadowColor,
  as: Component = 'div',
  noBorder = false,
  ...props
}) => {
  const ComponentTag = Component as React.ElementType;

  return (
    <ComponentTag
      className={`${st.wrapper} ${className || ''}`}
      style={shadowColor ? { '--shadow-color': shadowColor } as React.CSSProperties : undefined}
      {...props}
    >
      <div className={`${st.content} ${!noBorder ? st.border : ''}`}>
        {children}
      </div>
      <span className={st.shadow} aria-hidden="true" />
    </ComponentTag>
  );
};

export default ShadowWrapper;

