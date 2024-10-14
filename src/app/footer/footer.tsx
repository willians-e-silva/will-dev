import styles from './footer.module.scss';

import WhatsappIcon from '@assets/icons/whatsapp.svg';
import LinkedinIcon from '@assets/icons/linkedin.svg';
import GithubIcon from '@assets/icons/github.svg';


export function Footer() {
  return (
    <div className='text-orange-700'>
      <div className='flex'>
        <li>Home</li>
        <li>About me</li>
        <li>Contact</li>
      </div>
      <div>
      <div className={styles.icons}>
        <img src={WhatsappIcon} alt="" />
        <img src={LinkedinIcon} alt="" />
        <img src={GithubIcon} alt="" />
      </div>
      </div>
    </div>
  );
}

export default Footer;