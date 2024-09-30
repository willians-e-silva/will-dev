import styles from './Main.module.scss';
import computer from '../../assets/images/computer.svg';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

export function Main() {
  return (
    <div className='flex'>
      <div className='pt-32 pl-24'>
        <div className='font-poppins text-8xl'>
          <h1 className='text-white font-bold whitespace-nowrap'>Willians E.</h1>
          <h1 className='text-portage-500 font-bold'>Silva</h1>
        </div>
        <div className='flex font-bold text-lg gap-6 pt-6 text-white'>
          <button className={`${styles['button-primary']} bg-portage-500 rounded-full`}>
            <h1 className={`${styles['text-shadow']} px-8 py-3`}>Hire me</h1>
          </button>
          <button className={`${styles['button-secondary']} bg-blackPearl-500 rounded-full flex items-center`}>
            <div className='px-8 py-3 flex'>
              <span className='whitespace-nowrap'>Download CV</span>
              <ArrowDownTrayIcon className='text-portage-500 ml-4 w-6 h-6'/>
            </div>
          </button>
        </div>
      </div>
      <div>
        <img src={computer} alt=""/>
      </div>  
    </div>
  );
}

export default Main;