import { useState, useEffect, ReactNode } from 'react';
import { Link } from 'react-router-dom';

export default function Layout({ children }: { children: ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="bg-background selection:bg-primary-container selection:text-white min-h-screen flex flex-col">
      <div className="noise-overlay"></div>

      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm">
        <nav className="flex justify-between items-center px-6 py-4 max-w-full">
          <Link to="/" className="shrink-0">
            <img src="https://i.ibb.co/qMQK3yJ7/292678414-555215579726507-7971978031194556440-n-removebg-preview-1.png" alt="Undisputed Fitness Logo" className="h-10 md:h-12 w-auto" referrerPolicy="no-referrer" />
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/training" className="font-headline uppercase tracking-tighter font-bold text-neutral-600 hover:text-black transition-colors duration-200">Training</Link>
            <Link to="/about" className="font-headline uppercase tracking-tighter font-bold text-neutral-600 hover:text-black transition-colors duration-200">About</Link>
            <Link to="/pricing" className="font-headline uppercase tracking-tighter font-bold text-neutral-600 hover:text-black transition-colors duration-200">Pricing</Link>
            <Link to="/contact" className="font-headline uppercase tracking-tighter font-bold text-neutral-600 hover:text-black transition-colors duration-200">Contact</Link>
            <Link to="/gallery" className="font-headline uppercase tracking-tighter font-bold text-neutral-600 hover:text-black transition-colors duration-200">Gallery</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/pricing" className="hidden sm:block bg-[#FF0033] text-white px-6 py-2 font-headline uppercase font-black tracking-tighter scale-95 active:scale-90 transition-transform">
              JOIN NOW
            </Link>
            <button 
              className="md:hidden text-black flex items-center justify-center p-2" 
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-neutral-950 md:hidden flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button 
          className="absolute top-6 right-6 text-white" 
          onClick={closeMenu}
        >
          <span className="material-symbols-outlined text-4xl">close</span>
        </button>
        <Link to="/training" className="font-headline text-4xl font-black italic uppercase tracking-tighter text-white" onClick={closeMenu}>Training</Link>
        <Link to="/about" className="font-headline text-4xl font-black italic uppercase tracking-tighter text-white" onClick={closeMenu}>About</Link>
        <Link to="/pricing" className="font-headline text-4xl font-black italic uppercase tracking-tighter text-white" onClick={closeMenu}>Pricing</Link>
        <Link to="/contact" className="font-headline text-4xl font-black italic uppercase tracking-tighter text-white" onClick={closeMenu}>Contact</Link>
        <Link to="/gallery" className="font-headline text-4xl font-black italic uppercase tracking-tighter text-white" onClick={closeMenu}>Gallery</Link>
        <Link to="/pricing" className="mt-8 bg-primary-container text-on-primary-container px-12 py-4 font-headline uppercase font-black tracking-tighter italic text-2xl" onClick={closeMenu}>
          JOIN NOW
        </Link>
      </div>

      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white w-full py-12 px-6 border-t border-neutral-200 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
          <Link to="/">
            <img src="https://i.ibb.co/qMQK3yJ7/292678414-555215579726507-7971978031194556440-n-removebg-preview-1.png" alt="Undisputed Fitness Logo" className="h-12 md:h-16 w-auto" referrerPolicy="no-referrer" />
          </Link>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a className="text-neutral-500 font-headline text-[10px] md:text-xs uppercase tracking-widest hover:text-[#FF0033] transition-colors opacity-80 hover:opacity-100" href="#">Instagram</a>
            <a className="text-neutral-500 font-headline text-[10px] md:text-xs uppercase tracking-widest hover:text-[#FF0033] transition-colors opacity-80 hover:opacity-100" href="#">YouTube</a>
            <a className="text-neutral-500 font-headline text-[10px] md:text-xs uppercase tracking-widest hover:text-[#FF0033] transition-colors opacity-80 hover:opacity-100" href="#">Twitter</a>
            <a className="text-neutral-500 font-headline text-[10px] md:text-xs uppercase tracking-widest hover:text-[#FF0033] transition-colors opacity-80 hover:opacity-100" href="#">Facebook</a>
          </div>
          <div className="text-neutral-500 font-headline text-[10px] md:text-xs uppercase tracking-widest opacity-80 text-center">
            © 2024 UNDISPUTED FITNESS. NO EXCUSES.
          </div>
        </div>
      </footer>
    </div>
  );
}
