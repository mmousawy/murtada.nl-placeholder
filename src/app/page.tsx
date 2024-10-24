import Image from 'next/image';
import NoiseFilter from '@/components/NoiseFilter';
import AvailabilityStatus from '@/components/Home/AvailabilityStatus/AvailabilityStatus';

import LogoGitHub from '../../public/logos/github.svg';
import LogoX from '../../public/logos/x.svg';
import LogoInstagram from '../../public/logos/instagram.svg';
import LogoLinkedIn from '../../public/logos/linkedin.svg';
import LogoEmail from '../../public/logos/email.svg';

import st from '@/styles/page.module.scss';

export default function Home() {
  return (
    <>
      <main className={st.main}>
        <div className={st.center}>
          <Image
            className={st.photo}
            src="/murtada-al-mousawy-photo.png"
            alt="Portrait of Murtada al Mousawy"
            width={192}
            height={192}
            priority
          />
          <div className={st.aside}>
            <h1 className={st.title}><span className={st.name}>Murtada al Mousawy</span><br/>Senior Web Developer</h1>
            <div className={st.asideDetails}>
              <AvailabilityStatus />
              <div className={st.asideSocials}>
                <a href="https://github.com/mmousawy" className={ st.socialIcon } target="_blank"><LogoGitHub title="Visit my GitHub profile" /></a>
                <a href="https://x.com/mmousawy" className={ st.socialIcon } target="_blank"><LogoX title="Visit my X (Twitter) profile" /></a>
                <a href="https://www.instagram.com/visualdoubts/" className={ st.socialIcon } target="_blank"><LogoInstagram title="Visit my Instagram profile" /></a>
                <a href="https://www.linkedin.com/in/mmousawy/" className={ st.socialIcon } target="_blank"><LogoLinkedIn title="Visit my LinkedIn profile" /></a>
                <a href="mailto:hello@murtada.nl" className={ st.socialIcon }><LogoEmail title="Send me an e-mail" /></a>
              </div>
            </div>
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
        <NoiseFilter />
      </main>
    </>
  )
}
