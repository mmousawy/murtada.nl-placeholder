import LogoGitHub from '../../../public/logos/github.svg';
import LogoX from '../../../public/logos/x.svg';
import LogoInstagram from '../../../public/logos/instagram.svg';
import LogoLinkedIn from '../../../public/logos/linkedin.svg';
import LogoEmail from '../../../public/logos/email.svg';

import st from './Socials.module.scss';

export default function Socials() {
  return (
    <>
    <p className={st.socialsTitle}>You can also find me on &#10549;</p>
    <div className={st.socials}>
      <a href="https://github.com/mmousawy" className={ st.socialIcon } target="_blank"><LogoGitHub title="Visit my GitHub profile" /></a>
      <a href="https://x.com/mmousawy" className={ st.socialIcon } target="_blank"><LogoX title="Visit my X (Twitter) profile" /></a>
      <a href="https://www.instagram.com/visualdoubts/" className={ st.socialIcon } target="_blank"><LogoInstagram title="Visit my Instagram profile" /></a>
      <a href="https://www.linkedin.com/in/mmousawy/" className={ st.socialIcon } target="_blank"><LogoLinkedIn title="Visit my LinkedIn profile" /></a>
      <a href="mailto:hello@murtada.nl" className={ st.socialIcon }><LogoEmail title="Send me an e-mail" /></a>
    </div>
    </>
  )
}
