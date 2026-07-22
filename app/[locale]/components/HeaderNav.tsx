import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

const linkClassName =
  'relative block w-full pt-3 lg:pt-0 text-center transition-colors duration-300 hover:text-accent lg:inline-block lg:w-auto lg:px-1 lg:py-0.5 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100';

const navLinks = [
  { label: 'Benefits', href: '/benefits' },
  { label: 'Features', href: '/features' },
  { label: 'Skills', href: '/skills' },
  { label: 'About Me', href: '/about-me' },
];

function HeaderNav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024 && show) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'visible';
    }
  }, [show]);

  return (
    <nav className="order-3 lg:order-2">
      <button
        className="border-border cursor-pointer rounded-md border p-2 lg:hidden"
        onClick={() => setShow((prev) => !prev)}
      >
        <Menu />
      </button>

      <ul
        className={`absolute top-full left-0 flex w-full flex-col items-stretch overflow-hidden transition-all duration-300 ease-in-out lg:static lg:h-auto lg:max-h-none lg:w-auto lg:flex-row lg:items-center lg:gap-4 lg:opacity-100 ${
          !show
            ? 'pointer-events-none max-h-0 opacity-0 lg:pointer-events-auto'
            : 'glass-effect opacity-100'
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.href} className="w-full lg:w-auto">
            <Link className={linkClassName} href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
        <li className="w-full lg:hidden lg:w-auto">
          <Link className={linkClassName} href={'#contact'}>
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
