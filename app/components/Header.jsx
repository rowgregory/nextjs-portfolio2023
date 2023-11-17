import Logo from './svg/Logo';
import Gmail from './svg/Gmail';
import Github from './svg/Github';
import { addClick } from '../actions/addClick.js';
import Link from 'next/link.js';

const Header = () => {
  return (
    <header className="w-full flex justify-between">
      <Link href="/" onClick={() => addClick('logoClicks')}>
        <Logo />
      </Link>
      <div className="flex">
        <Gmail />
        <Github />
      </div>
    </header>
  );
};

export default Header;
