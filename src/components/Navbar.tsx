"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    handleResize(); // Initial check
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isHome = pathname === '/';
  const isSolid = !isHome || scrolled || isMobile;

  const links = [
    { name: 'HOME', path: '/' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'CONTACT', path: '/inquiry' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isSolid || menuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-outline' : 'bg-transparent'} h-24 flex justify-between items-center px-5 md:px-16`}>
      <Link href="/" className="flex items-center gap-3">
        <img src="/logo.png" alt="Herestrong Logo" className="h-12 w-auto hidden sm:block" onError={(e) => e.currentTarget.style.display='none'} />
        <div className={`font-bold text-2xl tracking-tight transition-colors duration-300 ${isSolid || menuOpen ? 'text-on-background' : 'text-white'}`}>
          HERESTRONG
        </div>
      </Link>
      
      <div className="hidden lg:flex gap-10">
        {links.map((link) => {
          const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
          return (
            <Link
              key={link.name}
              href={link.path}
              className={`font-semibold text-sm tracking-wide transition-colors duration-300 pb-1 border-b-2 ${
                isActive
                  ? 'border-primary text-primary'
                  : `border-transparent hover:text-primary ${isSolid ? 'text-on-surface' : 'text-white/90'}`
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      
      <div className="flex items-center gap-4">
        <Link href="/inquiry" className="hidden sm:block">
          <button className="bg-primary text-white px-8 py-3 rounded-none font-semibold text-sm hover:bg-primary-hover shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ease-out">
            Get Quote
          </button>
        </Link>
        <button 
          className={`lg:hidden p-2 transition-colors ${isSolid || menuOpen ? 'text-on-background' : 'text-white'}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div className="absolute top-24 left-0 w-full bg-white border-b border-outline shadow-lg flex flex-col p-4 lg:hidden">
          {links.map((link) => {
            const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
            return (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className={`p-4 font-bold border-b border-outline/30 ${isActive ? 'text-primary' : 'text-on-background hover:text-primary'}`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link 
            href="/inquiry" 
            onClick={() => setMenuOpen(false)} 
            className="p-4 mt-4 bg-primary text-white text-center font-bold w-full rounded-sm"
          >
            GET QUOTE
          </Link>
        </div>
      )}
    </nav>
  );
}
