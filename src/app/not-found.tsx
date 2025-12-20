import Link from 'next/link';
import Image from 'next/image';
import st from '@/styles/page.module.scss';
import st404 from './not-found.module.scss';

const Custom404 = () => {
  return (
    <>
      <main className={st.main}>
        <div className={st.center}>
          <div className={st404.content}>
            <h1 className={st.title}>
              <span className={st404.errorCode}>404</span>
              Page Not Found
            </h1>
            <p className={st404.message}>
              The page you are looking for does not exist.
            </p>
            <Link href="/" className={st404.link}>
              Go back to the homepage
            </Link>
          </div>
        </div>
        <div className={st.bg}>
          <Image
            className={st.bgImage}
            src="/bg3.webp"
            alt="Background image"
            width={1920}
            height={1080}
          />
        </div>
      </main>
    </>
  );
};

export default Custom404;
