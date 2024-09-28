import styles from './hello-world.module.scss';

export function Header() {
  return (
    <div className='flex font-poppins px-16 py-4'>
      <div>
        <h1 className='text-white font-bold text-2xl'>Will Dev</h1>
      </div>

      <nav className='ml-auto'>
        <ul className='flex text-white gap-16'>
          <li><a href="">Home</a></li>
          <li><a href="">About Me</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>

    </div>
  );
}

export default Header;