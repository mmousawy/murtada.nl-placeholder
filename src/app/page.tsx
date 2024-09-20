import Image from 'next/image';
import NoiseFilter from '@/components/NoiseFilter';

import LogoIo from '../../public/logos/io.svg';
import LogoGitHub from '../../public/logos/github.svg';
import LogoX from '../../public/logos/x.svg';
import LogoInstagram from '../../public/logos/instagram.svg';
import LogoLinkedIn from '../../public/logos/linkedin.svg';
import LogoEmail from '../../public/logos/email.svg';

import st from '@/styles/page.module.scss';

export default function Home() {
  const currentDate = new Date();
  const utcHours = currentDate.getUTCHours();
  const utcMinutes = currentDate.getUTCMinutes();
  const utcWeekday = currentDate.getUTCDay();
  const onejan = new Date(currentDate.getFullYear(), 0, 1);
  const week = Math.ceil((((currentDate.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);

  // Set availability status based on UTC time (between 7:30 and 15:00) and weekday (Monday to Friday) except Monday of every even week of the year
  const availabilityStatus = utcWeekday > 0 && utcWeekday < 6 && utcHours >= 7 && utcHours < 15 && !(utcWeekday === 1 && week % 2 === 0) ? 'available' : 'unavailable';

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
              <span className={ st.asideItem }><span className={`${st.availabilityBullet} ${ st[`availabilityBullet--${availabilityStatus}`] }`}></span><LogoIo title="iO digital logo" /> Currently { availabilityStatus } at iO</span>
              <div className={st.asideSocials}>
                <a href="https://github.com/mmousawy" className={ st.socialIcon } target="_blank"><LogoGitHub title="Visit my GitHub profile" /></a>
                <a href="https://x.com/mmousawy" className={ st.socialIcon } target="_blank"><LogoX title="Visit my X (Twitter) profile" /></a>
                <a href="https://www.instagram.com/visualdoubts/" className={ st.socialIcon } target="_blank"><LogoInstagram title="Visit my Instagram profile" /></a>
                <a href="https://www.linkedin.com/in/mmousawy/" className={ st.socialIcon } target="_blank"><LogoLinkedIn title="Visit my LinkedIn profile" /></a>
                <a href="mailto:info@murtada.nl" className={ st.socialIcon }><LogoEmail title="Send me an e-mail" /></a>
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
