import styles from './Contact.module.scss';
import Sky from '@assets/images/sky.svg';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export function ContactSection() {
  return (
    <div className='flex font-poppins'>
        <div className='w-full absolute mt-28 pl-32'>
            <img src={Sky} alt="" className={`w-9/12 h-full object-cover ml-[-110px] ${styles['move-moon']}`}/>           
        </div>
        <div>
            <div className='text-6xl absolute ml-24 font-bold'>
                <span className='text-white'>Want to get in <br/></span>
                <span className='text-portage-500'>touch?</span>
            </div>
        </div>
        <div>
          
        </div>
        <div className='ml-auto mr-24 z-10'>
          <div className='flex'>
            <div>
              <h1 className='text-lg font-bold text-white'>Your name</h1>
              <input type="text" placeholder='Name' className='w-72 h-14 px-3 text-blackPearl-100 bg-blackPearl-500 rounded-lg'/>
            </div>
            <div className='ml-auto'>
              <h1 className='text-lg font-bold text-white'>Your email</h1>
              <input type="text" placeholder='Email' className='w-72 h-14 px-3 text-blackPearl-100 bg-blackPearl-500 rounded-lg'/>
            </div>
          </div>
          <div className='mt-6'>
              <h1 className='text-lg font-bold text-white'>Your message</h1>
              <textarea placeholder='Message' className='p-3 w-[600px] h-[280px] resize-none text-blackPearl-100 bg-blackPearl-500 rounded-lg'/>
          </div>
          <div>
            <button className='w-52 h-9 mt-2 bg-portage-500 text-white font-bold rounded-full flex justify-center items-center'>
              <span className={`${styles['text-shadow']}`}>
                Send Message
              </span>
              <EnvelopeIcon className='w-7 h-7 p-1 ml-2 text-white'/>
            </button>
          </div>
        </div>
    </div>
  );
}

export default ContactSection;