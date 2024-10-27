import st from './Container.module.scss';

const Container = ({ children, classNames, variant }: { children: React.ReactNode, classNames?: string, variant?: 'less-padding'|'article'|'slim'|'centered' }) => {
  if (variant && !st[variant]) {
    console.error(`Container variant "${variant}" not found in styles`);
  }

  if (variant === 'article') {
    return (
      <article className={`${ st.container } ${classNames || ''} ${variant && st[variant] ? st[variant] : ''}`}>
        {children}
      </article>
    );
  }

  return (
    <div className={`${ st.container } ${classNames || ''} ${variant && st[variant] ? st[variant] : ''}`}>
      {children}
    </div>
  );
};

export default Container;
