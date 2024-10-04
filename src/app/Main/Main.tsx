import WelcomeSection from './Welcome/Welcome';
import AboutMeSection from './AboutMe/AboutMe'; 
import ContactSection from './Contact/Contact';

export function Main() {
  return (
    <div>
      <div>
        <WelcomeSection />
      </div>
      <div className='mt-48'>
        <AboutMeSection />
      </div>
      <div className='mt-48'>
        <ContactSection />
      </div>
    </div>
  );
}

export default Main;