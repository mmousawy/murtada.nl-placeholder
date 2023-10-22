import Image from 'next/image';
import NoiseFilter from '@/components/NoiseFilter';

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
              <span className={ st.availabilityStatus }><span className={st.bullet}></span> Available for work</span>
              <svg width="48" height="32" className={st.dots}>
              <linearGradient id="gradient1">
              <stop id="stop1" offset="0%" stopColor="#dddddd"/>
              <stop id="stop2" offset="100%" stopColor="#222527"/>
              </linearGradient>
              <rect x="0" y="15" width="48" height="2" fill="url(#gradient1)" />
                <path
                  d="M 0 16 L 48 16"
                  strokeMiterlimit="10"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="4"
                  strokeDasharray="4"
                  strokeDashoffset="0">
                  <animate
                    attributeName="stroke-dashoffset"
                    values="48;0"
                    dur="5s"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
              <a href="mailto:info@murtada.nl" className={st.contactButton}>Contact me</a>
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
