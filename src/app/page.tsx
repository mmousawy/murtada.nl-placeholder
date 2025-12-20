import Image from 'next/image';
import NoiseFilter from '@/components/NoiseFilter';
import AvailabilityStatus from '@/components/Home/AvailabilityStatus/AvailabilityStatus';

import st from '@/styles/page.module.scss';
import Socials from '@/components/Socials/Socials';

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
            <h1 className={st.title}>Hi! I'm <span className={st.name}>Murtada al Mousawy</span>,<br/>web developer, photographer<br/>& meetup organizer</h1>
            <div className={st.asideDetails}>
              <Socials />
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
      </main>
    </>
  )
}
