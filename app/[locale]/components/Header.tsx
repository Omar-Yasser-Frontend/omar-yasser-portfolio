'use client';

import HeaderNav from './HeaderNav';
import HeaderActions from './HeaderActions';
import { useHeaderScroll } from '../hooks/useHeaderScroll';
import { Link } from '@/i18n/navigation';

function Header() {
  const show = useHeaderScroll();

  return (
    <header
      className={`glass-effect fixed top-0 z-100 w-full transition-transform duration-300 ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
      id="header"
    >
      <div className="container mx-auto grid grid-cols-[1fr_auto_auto] items-center gap-4 px-4 py-6 shadow lg:grid-cols-[auto_1fr_auto]">
        <h2 className='en-mono'>
          <Link
            href="/"
            className="gradient-text text-2xl font-extrabold whitespace-nowrap"
          >
            Omar Yasser
          </Link>
        </h2>

        <HeaderNav />

        <HeaderActions />
      </div>
    </header>
  );
}

export default Header;
