import st from './Container.module.scss';

const Container = ({ children, classNames }: { children: React.ReactNode, classNames?: string }) => {
  return (
    <div className={`${ st.container } ${classNames}`}>
      {children}
    </div>
  );
};

export default Container;
