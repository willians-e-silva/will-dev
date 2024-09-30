import styles from './hello-world.module.scss';
import { Toggle } from '../components/toggle/toggle'; 
export function Header() {
  return (
    <div className='bg-blackPearl-500'>
      <div className='flex font-poppins px-24 py-8'>
        <div>
          <h1 className='text-white font-bold text-2xl'>Will Dev</h1>
        </div>

        <nav className='ml-auto'>
          <ul className='flex text-white gap-16'>
            <li>
              <div>
                <Toggle />
              </div>
            </li>
            <li><a href="">Home</a></li>
            <li><a href="">About Me</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>

  );
}

export default Header;