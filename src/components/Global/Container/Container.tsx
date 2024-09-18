import st from './Container.module.scss';

const Container = ({ children, classNames, variant }: { children: React.ReactNode, classNames?: string, variant?: 'less-padding'|'article' }) => {
  if (variant && !st[variant]) {
    console.error(`Container variant "${variant}" not found in styles`);
  }

  if (variant === 'article') {
    return (
      <article className={`${ st.container } ${classNames || ''}`}>
        {children}
      </article>
    );
  }

  return (
    <div className={`${ st.container } ${classNames || ''} ${st[variant || 'default']}`}>
      {children}
    </div>
  );
};

export default Container;
