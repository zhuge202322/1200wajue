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
    { name: 'ADVANTAGES', path: '/advantages' },
    { name: 'SUCCESS CASES', path: '/cases' },
    { name: 'CONTACT', path: '/inquiry' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isSolid || menuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-outline' : 'bg-transparent'} h-24 flex justify-between items-center px-5 lg:px-8 xl:px-16`}>
      <Link href="/" className="flex items-center gap-2 xl:gap-3 flex-shrink-0">
        <img src="/logo.png" alt="Herestrong Logo" className="h-10 xl:h-12 w-auto hidden sm:block" onError={(e) => e.currentTarget.style.display='none'} />
        <div className={`font-bold text-xl xl:text-2xl tracking-tight transition-colors duration-300 ${isSolid || menuOpen ? 'text-on-background' : 'text-white'}`}>
          HERESTRONG
        </div>
      </Link>
      
      <div className="hidden lg:flex gap-4 xl:gap-8 items-center overflow-hidden">
        {links.map((link) => {
          const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
          return (
            <Link
              key={link.name}
              href={link.path}
              className={`font-semibold text-xs xl:text-sm tracking-wide whitespace-nowrap transition-colors duration-300 pb-1 border-b-2 ${
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
      
      <div className="flex items-center gap-2 xl:gap-4 flex-shrink-0">
        <a href="https://wa.me/8615666793337" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center bg-[#25D366] text-white px-4 xl:px-6 py-2 xl:py-3 rounded-none font-semibold text-xs xl:text-sm hover:bg-[#128C7E] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ease-out">
          <svg className="w-4 h-4 xl:w-5 xl:h-5 mr-1 xl:mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.128.552 4.133 1.528 5.92L0 24l6.236-1.637C7.962 23.33 9.948 24 12.031 24c6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm3.642 17.218c-.156.44-3.03 2.115-3.327 2.158-.297.043-.655.087-2.128-.485-2.583-.987-4.225-3.642-4.354-3.815-.13-.173-1.042-1.388-1.042-2.646 0-1.258.651-1.884.887-2.128.236-.244.515-.306.685-.306.17 0 .34.004.49.011.163.007.382-.061.597.464.225.549.771 1.886.84 2.025.07.14.117.304.03.477-.087.173-.13.282-.26.434-.13.151-.275.32-.39.434-.13.13-.264.275-.116.533.147.258.655 1.085 1.408 1.758.974.872 1.79 1.144 2.046 1.274.256.13.407.108.56-.065.151-.173.651-.758.825-1.018.173-.26.346-.217.585-.13.238.087 1.515.715 1.775.845.26.13.433.195.496.304.062.108.062.63-.094 1.07z"/></svg>
          WhatsApp
        </a>
        <Link href="/inquiry" className="hidden sm:block">
          <button className="bg-primary text-white px-5 xl:px-8 py-2 xl:py-3 rounded-none font-semibold text-xs xl:text-sm hover:bg-primary-hover shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ease-out whitespace-nowrap">
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
