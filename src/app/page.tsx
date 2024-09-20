import Image from 'next/image';
import NoiseFilter from '@/components/NoiseFilter';

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
              <span className={ st.asideItem }><span className={`${st.availabilityBullet} ${ st[`availabilityBullet--${availabilityStatus}`] }`}></span><Image src="/logos/io-digital.svg" width={24} height={24} /></span>
              <a href="https://github.com/mmousawy" target="_blank"><Image src="/logos/github.svg" width={24} height={24} /></a>
              <a href="https://x.com/mmousawy" target="_blank"><Image src="/logos/x.svg" width={24} height={24} /></a>
              <a href="https://www.instagram.com/visualdoubts/" target="_blank"><Image src="/logos/instagram.svg" width={24} height={24} /></a>
              <a href="https://www.linkedin.com/in/mmousawy/" target="_blank"><Image src="/logos/linkedin.svg" width={24} height={24} /></a>
              <a href="mailto:info@murtada.nl"><Image src="/logos/email.svg" width={24} height={24} /></a>
            </div>
          </div>
        </div>
      </main>
      <Image
        className={st.bg}
        src="/bg3.webp"
        alt="Background image"
        width={1920}
        height={1080}
      />
      <NoiseFilter />
    </>
  )
}
