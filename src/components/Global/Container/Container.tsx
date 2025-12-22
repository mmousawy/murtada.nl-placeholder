import st from './Container.module.scss';

const Container = ({ children, classNames, variant, type }: { children: React.ReactNode, classNames?: string, variant?: typeof st[keyof typeof st], type?: 'article'|'div' }) => {
  if (type && type === 'article') {
    return <article className={`${ st.container } ${classNames || ''} ${variant && st[variant] ? st[variant] : ''}`}>{children}</article>;
  }

  return <div className={`${ st.container } ${classNames || ''} ${variant && st[variant] ? st[variant] : ''}`}>{children}</div>;
};

export default Container;
