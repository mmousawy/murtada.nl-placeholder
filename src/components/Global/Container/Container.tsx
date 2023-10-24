import st from './Container.module.scss';

const Container = ({ children, classNames, variant }: { children: React.ReactNode, classNames?: string, variant?: 'less-padding' }) => {
  return (
    <div className={`${ st.container } ${classNames} ${st[variant || '']}`}>
      {children}
    </div>
  );
};

export default Container;
