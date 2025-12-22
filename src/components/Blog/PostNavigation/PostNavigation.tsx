import Link from 'next/link';
import ShadowWrapper from '@/components/Global/ShadowWrapper/ShadowWrapper';
import st from './PostNavigation.module.scss';

interface PostInfo {
  uid: string;
  title: string;
  cover_image: any;
  color?: string;
}

interface PostNavigationProps {
  previousPost: PostInfo | null;
  nextPost: PostInfo | null;
}

import ArrowLeftIcon from '@/../public/arrow-left.svg';
import ArrowRightIcon from '@/../public/arrow-right.svg';
import PrismicImageWithBlur from '@/components/Global/PrismicImageWithBlur/PrismicImageWithBlur';

const PostNavigation: React.FC<PostNavigationProps> = ({ previousPost, nextPost }) => {
  if (!previousPost && !nextPost) return null;

  return (
    <div className={st.container}>
      <h2 className={st.sectionTitle}>More words from me</h2>
      <nav className={st.navigation} aria-label="Blog post navigation">
        {previousPost && (
          <div className={`${st.navItem}`}>
            <Link href={`/blog/${previousPost.uid}`} className={st.link}>
              <ShadowWrapper className={st.wrapper} shadowColor={previousPost.color || undefined}>
                <div className={st.inner}>
                  <div className={st.image}>
                    {previousPost.cover_image?.url && (
                      <PrismicImageWithBlur loading="lazy" width={256} height={256} field={previousPost.cover_image} imgixParams={{ format: 'auto', fit: 'crop', q: '95', w: '90', h: '90' }} />
                    )}
                  </div>
                  <div className={st.content}>
                    <span className={st.label}><ArrowLeftIcon className={st.arrow} /> Previous</span>
                    <span className={st.title}>{previousPost.title}</span>
                  </div>
                </div>
              </ShadowWrapper>
            </Link>
          </div>
        )}
        {nextPost && (
          <div className={`${st.navItem} ${st.navItemNext}`}>
            <Link href={`/blog/${nextPost.uid}`} className={st.link}>
              <ShadowWrapper className={st.wrapper} shadowColor={nextPost.color || undefined}>
                <div className={st.inner}>
                  <div className={st.image}>
                    {nextPost.cover_image?.url && (
                      <PrismicImageWithBlur loading="lazy" width={256} height={256} field={nextPost.cover_image} imgixParams={{ format: 'auto', fit: 'crop', q: '95', w: '90', h: '90' }} />
                    )}
                  </div>
                  <div className={st.content}>
                    <span className={st.label}>Next <ArrowRightIcon className={st.arrow} /></span>
                    <span className={st.title}>{nextPost.title}</span>
                  </div>
                </div>
              </ShadowWrapper>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default PostNavigation;

