import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <nav className="bg-gray-800 p-4 text-white fixed w-full z-10 top-0" style={{ cursor: 'default' }}>
      <div className="mx-auto text-center flex w-5/6 justify-between">
        
        <div className="hidden sm:flex space-x-4 items-center text-sm">
          <Link to='/' className={pathname === '/' ? 'font-bold' : ''}>Home</Link>
          <Link to='/about' className={pathname === '/about' ? 'font-bold' : ''}>About</Link>
        </div>
        <div className="text-3xl sm:text-2xl font-extrabold">
          <a href="/">Satyam Singh</a>
        </div>
        <div className="hidden sm:flex space-x-4 items-center text-sm">
          <Link to='/projects' className={pathname === '/projects' ? 'font-bold' : ''}>Projects</Link>
          <Link to='/experience' className={pathname === '/experience' ? 'font-bold' : ''}>Experience</Link>
          <Link to='/contact' className={pathname === '/contact' ? 'font-bold' : ''}>Contact</Link>
        </div>

        <div className="sm:hidden">
          <button onClick={toggleMobileMenu} className="text-xl focus:outline-none" aria-label="Toggle Menu">
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="sm:hidden fixed top-0 left-0 w-full h-full bg-gray-800 text-center flex flex-col items-center justify-center">
            <button onClick={closeMobileMenu} className="text-xl absolute top-4 right-4 focus:outline-none" aria-label="Close Menu">
              ✕
            </button>
            <ul className="font-medium text-2xl space-y-4">
              <li><Link to='/' onClick={closeMobileMenu} className={pathname === '/' ? 'font-bold' : ''}>Home</Link></li>
              <li><Link to='/about' onClick={closeMobileMenu} className={pathname === '/about' ? 'font-bold' : ''}>About</Link></li>
              <li><Link to='/projects' onClick={closeMobileMenu} className={pathname === '/projects' ? 'font-bold' : ''}>Projects</Link></li>
              <li><Link to='/experience' onClick={closeMobileMenu} className={pathname === '/experience' ? 'font-bold' : ''}>Experience</Link></li>
              <li><Link to='/contact' onClick={closeMobileMenu} className={pathname === '/contact' ? 'font-bold' : ''}>Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
