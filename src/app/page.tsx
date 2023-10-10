import Image from 'next/image'
import styles from '@/styles/page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.heading}>

      </div>

      <div className={styles.center}>
        <Image
          className={styles.photo}
          src="/murtada-al-mousawy-photo-removebg-preview (1).png"
          alt="Portrait of Murtada al Mousawy"
          width={192}
          height={192}
          priority
        />
        <div className={styles.aside}>
          <h1 className={styles.title}><span className={styles.name}>Murtada al Mousawy</span><br/>Senior Web Developer</h1>
          <div className={styles.asideDetails}>
            <span className={ styles.availabilityStatus }><span className={styles.bullet}></span> Available for work</span>
            <svg width="32" height="32" className={styles.dots}>
            <linearGradient id="gradient1">
            <stop id="stop1" offset="0%" stopColor="#dddddd"/>
            <stop id="stop2" offset="100%" stopColor="#222527"/>
            </linearGradient>
            <rect x="0" y="15" width="32" height="2" fill="url(#gradient1)"/>
              <path
                d="M 0 16 L 32 16"
                strokeMiterlimit="10"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeDasharray="2"
                strokeDashoffset="1">
                <animate
                  attributeName="stroke-dashoffset"
                  values="20;0"
                  dur="3s"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
            <a href="mailto:info@murtada.nl" className={styles.contactButton}>Contact me</a>
          </div>
        </div>
      </div>
    </main>
  )
}
