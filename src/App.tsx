/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function App() {
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

  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    
    const text = `Hi Undisputed Fitness,\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/27768920804?text=${encodedText}`, '_blank');
  };

  const testimonials = [
    {
      name: "Michael R.",
      time: "2 weeks ago",
      text: "Best gym in Newcastle by far. The equipment is top-notch, the atmosphere is incredible, and the staff actually care about your progress. If you're serious about training, this is the place to be.",
      rating: 5,
      avatar: "https://ui-avatars.com/api/?name=Michael+R&background=0D8ABC&color=fff"
    },
    {
      name: "Sarah Jenkins",
      time: "a month ago",
      text: "Absolutely love Undisputed Fitness! The flexible hours are a game changer for my schedule. The facility is always clean and the community is super welcoming even to beginners.",
      rating: 5,
      avatar: "https://ui-avatars.com/api/?name=Sarah+J&background=1D8A99&color=fff"
    },
    {
      name: "David K.",
      time: "3 months ago",
      text: "Proper old school vibe with modern equipment. No egos, just people putting in the work. The trainers are incredibly knowledgeable. Highly recommend.",
      rating: 5,
      avatar: "https://ui-avatars.com/api/?name=David+K&background=D81B60&color=fff"
    }
  ];

  return (
    <div className="bg-background selection:bg-primary-container selection:text-white min-h-screen">
      <div className="noise-overlay"></div>

      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm">
        <nav className="flex justify-between items-center px-6 py-4 max-w-full">
          <div className="shrink-0">
            <img src="https://i.ibb.co/qMQK3yJ7/292678414-555215579726507-7971978031194556440-n-removebg-preview-1.png" alt="Undisputed Fitness Logo" className="h-10 md:h-12 w-auto" referrerPolicy="no-referrer" />
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <Link className="font-headline uppercase tracking-tighter font-bold text-neutral-600 hover:text-black transition-colors duration-200" to="/training">Training</Link>
            <Link className="font-headline uppercase tracking-tighter font-bold text-neutral-600 hover:text-black transition-colors duration-200" to="/about">About</Link>
            <Link className="font-headline uppercase tracking-tighter font-bold text-neutral-600 hover:text-black transition-colors duration-200" to="/pricing">Pricing</Link>
            <Link className="font-headline uppercase tracking-tighter font-bold text-neutral-600 hover:text-black transition-colors duration-200" to="/contact">Contact</Link>
            <Link className="font-headline uppercase tracking-tighter font-bold text-neutral-600 hover:text-black transition-colors duration-200" to="/gallery">Gallery</Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden sm:block bg-[#FF0033] text-white px-6 py-2 font-headline uppercase font-black tracking-tighter scale-95 active:scale-90 transition-transform">
              JOIN NOW
            </button>
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
        <Link className="font-headline text-4xl font-black italic uppercase tracking-tighter text-white" to="/training" onClick={closeMenu}>Training</Link>
        <Link className="font-headline text-4xl font-black italic uppercase tracking-tighter text-white" to="/about" onClick={closeMenu}>About</Link>
        <Link className="font-headline text-4xl font-black italic uppercase tracking-tighter text-white" to="/pricing" onClick={closeMenu}>Pricing</Link>
        <Link className="font-headline text-4xl font-black italic uppercase tracking-tighter text-white" to="/contact" onClick={closeMenu}>Contact</Link>
        <Link className="font-headline text-4xl font-black italic uppercase tracking-tighter text-white" to="/gallery" onClick={closeMenu}>Gallery</Link>
        <button className="mt-8 bg-primary-container text-on-primary-container px-12 py-4 font-headline uppercase font-black tracking-tighter italic text-2xl" onClick={closeMenu}>
          JOIN NOW
        </button>
      </div>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
              alt="Undisputed Fitness Gym Member Training" 
              className="w-full h-full object-cover opacity-50 md:opacity-40 grayscale hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida/ADBb0ujhJtBumWkXjzMxcCMpYgCHt20Q0xYx4L6jGOwwpYS2iEZYCtjzDyz8HB_B9jjFqz0JymqC_LRfHDsMSruO3Q9K7ndIacjz35hh8IpQamww3hoyYMWyNymq_1HRWRcPJ_eafJQNL-l2uYrGDNjsbQC7CUM70gUvn-oXlXPJYPX0Xft4tj9PU6Xyl0vBIEVkxliR016ZgbVnwggPkbnyKMeRcpTUZIOzwYn3t3yrf7H6pUe-Z5OVkPhvOpcRf7n444ctqlmtXDYJ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
          </div>
          <div className="relative z-10 px-6 md:px-12 max-w-5xl">
            <h1 className="font-headline text-5xl sm:text-6xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.9] sm:leading-[0.85] text-white mb-6">
              UNLEASH <br/> <span className="text-[#FF0033]">YOUR POWER</span>
            </h1>
            <p className="font-body text-on-surface-variant text-base sm:text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light">
              State-of-the-art gym with everything you need to achieve your fitness goals. No contracts. No joining fees. <span className="text-secondary-fixed">Just raw strength and modern equipment.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#FF0033] hover:bg-[#ff1a4a] text-white px-8 md:px-10 py-4 md:py-5 font-headline font-black uppercase italic tracking-tighter text-lg md:text-xl transition-all hover:translate-x-2">
                START YOUR JOURNEY
              </button>
              <button className="border border-outline-variant/30 hover:bg-white/5 text-secondary px-8 md:px-10 py-4 md:py-5 font-headline font-black uppercase italic tracking-tighter text-lg md:text-xl transition-all">
                LEARN MORE
              </button>
            </div>
          </div>
        </section>

        {/* Built for Champions Section */}
        <section className="bg-surface-container-lowest py-16 md:py-24 px-6 md:px-12" id="about">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-full h-full border-2 border-[#FF0033] z-0 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <img 
                alt="Built for Champions Team" 
                className="relative z-10 w-full aspect-[4/3] md:aspect-square object-cover group-hover:grayscale-0 transition-all duration-500 shadow-2xl" 
                src="https://lh3.googleusercontent.com/aida/ADBb0ugfTEHDDJmriR9VsObv_U3a-wqtPPJayowvza_dbS31XkdCKmcC8c9Rj5lf2a2i_sWEeHVDALv-410OfXk8UE77II68u7uyPH1614H8dRNabwhjaerI3G3B327VvApdSbdIA7ZhGpW0QKBQHwbNqqBg3t-lAGe42ipkgxBHcmzl_EQBpNDb-Fi4aRFnp6F7XdrWxj3j5W33glDbJuMvCDk-6k488Ht6nnb-4fLGzpSzsV43J0uzBkvivGhGrDF482It5EHD3sslNQ"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="font-headline text-4xl sm:text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-6 md:mb-8">
                BUILT FOR <span className="text-[#FF0033]">CHAMPIONS</span>
              </h2>
              <div className="space-y-6 font-body text-on-surface-variant text-base sm:text-lg leading-relaxed">
                <p>
                  At UNDISPUTED, we've stripped away the fluff of modern fitness. This is a sanctuary for those who respect the iron. Our culture is rooted in the golden era of bodybuilding, enhanced by cutting-edge biometric feedback.
                </p>
                <p>
                  Every machine, every barbell, and every square inch of our turf is designed for maximum output. We don't just provide a space; we provide an environment where failure is just another step toward dominance.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 md:gap-8 mt-10 md:mt-12">
                <div className="bg-surface-container-low p-4 md:p-6 flex flex-col gap-1 md:gap-2">
                  <span className="text-[#FFFF00] font-headline text-3xl md:text-4xl font-black italic">2K+</span>
                  <span className="font-label uppercase tracking-widest text-[10px] md:text-xs text-tertiary">Active Members</span>
                </div>
                <div className="bg-surface-container-low p-4 md:p-6 flex flex-col gap-1 md:gap-2">
                  <span className="text-[#FFFF00] font-headline text-3xl md:text-4xl font-black italic text-glow">EXPERT</span>
                  <span className="font-label uppercase tracking-widest text-[10px] md:text-xs text-tertiary">Pro Trainers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 bg-surface" id="training">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 md:mb-16 text-center md:text-left">
              <h2 className="font-headline text-4xl sm:text-5xl md:text-8xl font-black uppercase italic tracking-tighter">OUR <span className="text-[#FF0033]">SERVICES</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
              {/* Card 1 */}
              <div className="group bg-surface-container-low p-8 md:p-10 border-b md:border-b-0 md:border-r border-neutral-800 last:border-0 hover:bg-surface-container-high transition-colors">
                <div className="mb-6 md:mb-8 text-[#FF0033] group-hover:scale-110 transition-transform origin-left">
                  <span className="material-symbols-outlined text-5xl md:text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>fitness_center</span>
                </div>
                <h3 className="font-headline text-2xl md:text-3xl font-black uppercase italic tracking-tighter mb-4">STRENGTH TRAINING</h3>
                <p className="font-body text-on-surface-variant leading-relaxed mb-6 text-sm md:text-base">
                  Raw power programs designed to maximize hypertrophy and absolute strength. No fluff, just results.
                </p>
                <ul className="space-y-3 font-label text-[10px] md:text-sm text-tertiary uppercase tracking-wider">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF0033]"></span> Powerlifting Racks</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF0033]"></span> Olympic Platforms</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF0033]"></span> 100KG+ Dumbbells</li>
                </ul>
              </div>
              {/* Card 2 */}
              <div className="group bg-surface-container-low p-8 md:p-10 border-b md:border-b-0 md:border-r border-neutral-800 last:border-0 hover:bg-surface-container-high transition-colors">
                <div className="mb-6 md:mb-8 text-[#FF0033] group-hover:scale-110 transition-transform origin-left">
                  <span className="material-symbols-outlined text-5xl md:text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
                </div>
                <h3 className="font-headline text-2xl md:text-3xl font-black uppercase italic tracking-tighter mb-4">PERSONAL TRAINING</h3>
                <p className="font-body text-on-surface-variant leading-relaxed mb-6 text-sm md:text-base">
                  Work with HFPA qualified trainers who live the lifestyle. Personalized blueprints for your specific physique goals.
                </p>
                <ul className="space-y-3 font-label text-[10px] md:text-sm text-tertiary uppercase tracking-wider">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF0033]"></span> 1-on-1 Sessions</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF0033]"></span> Nutritional Guidance</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF0033]"></span> Form Correction</li>
                </ul>
              </div>
              {/* Card 3 */}
              <div className="group bg-surface-container-low p-8 md:p-10 last:border-0 hover:bg-surface-container-high transition-colors">
                <div className="mb-6 md:mb-8 text-[#FF0033] group-hover:scale-110 transition-transform origin-left">
                  <span className="material-symbols-outlined text-5xl md:text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                </div>
                <h3 className="font-headline text-2xl md:text-3xl font-black uppercase italic tracking-tighter mb-4">EXTENDED HOURS</h3>
                <p className="font-body text-on-surface-variant leading-relaxed mb-6 text-sm md:text-base">
                  Train early or late. We're open from 5 AM on weekdays to fit your schedule.
                </p>
                <ul className="space-y-3 font-label text-[10px] md:text-sm text-tertiary uppercase tracking-wider">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF0033]"></span> Biometric Entry</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF0033]"></span> Secure Parking</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF0033]"></span> Night Guard Patrol</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 bg-surface-container-lowest" id="pricing">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <h2 className="font-headline text-4xl sm:text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">SIMPLE <span className="text-[#FF0033]">PRICING</span></h2>
              <div className="bg-secondary-container text-on-secondary-container px-4 py-2 font-label text-[10px] md:text-xs font-bold uppercase tracking-widest animate-pulse">
                NO JOINING FEES. NO CONTRACTS.
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-neutral-900 border border-neutral-800">
              {/* Walk-In Card */}
              <div className="bg-surface-container-low p-8 md:p-12 flex flex-col">
                <div className="flex justify-between items-start mb-8 md:mb-12">
                  <div>
                    <h4 className="font-headline text-xl md:text-2xl font-black italic uppercase text-white">WALK INS</h4>
                    <p className="text-tertiary font-label text-[10px] md:text-xs tracking-widest uppercase">Casual Walk-In Rate</p>
                  </div>
                  <div className="text-right">
                    <span className="font-headline text-4xl md:text-5xl font-black text-[#FFFF00]">R70</span>
                    <span className="text-tertiary font-headline text-lg md:text-xl">/day</span>
                  </div>
                </div>
                <ul className="space-y-4 md:space-y-6 mb-10 md:mb-12 flex-grow">
                  <li className="flex items-center gap-4 text-on-surface text-sm md:text-base">
                    <span className="material-symbols-outlined text-[#FF0033]">check_circle</span>
                    <span className="font-body">1 Day Gym Access</span>
                  </li>
                  <li className="flex items-center gap-4 text-on-surface text-sm md:text-base">
                    <span className="material-symbols-outlined text-[#FF0033]">check_circle</span>
                    <span className="font-body">All Modern Equipment</span>
                  </li>
                  <li className="flex items-center gap-4 text-on-surface text-sm md:text-base">
                    <span className="material-symbols-outlined text-[#FF0033]">check_circle</span>
                    <span className="font-body">Free Secure Parking</span>
                  </li>
                </ul>
                <button className="w-full bg-white text-black font-headline font-black uppercase italic py-4 md:py-5 text-lg md:text-xl hover:bg-[#FF0033] hover:text-white transition-colors">
                  GET DAY PASS
                </button>
              </div>
              {/* Monthly Card */}
              <div className="bg-surface-container-low p-8 md:p-12 flex flex-col">
                <div className="flex justify-between items-start mb-8 md:mb-12">
                  <div>
                    <h4 className="font-headline text-xl md:text-2xl font-black italic uppercase text-white">MONTHLY</h4>
                    <p className="text-tertiary font-label text-[10px] md:text-xs tracking-widest uppercase">Full Access Pass</p>
                  </div>
                  <div className="text-right">
                    <span className="font-headline text-4xl md:text-5xl font-black text-[#FFFF00]">R270</span>
                    <span className="text-tertiary font-headline text-lg md:text-xl">/mo</span>
                  </div>
                </div>
                <ul className="space-y-4 md:space-y-6 mb-10 md:mb-12 flex-grow">
                  <li className="flex items-center gap-4 text-on-surface text-sm md:text-base">
                    <span className="material-symbols-outlined text-[#FF0033]">check_circle</span>
                    <span className="font-body">Full Gym Access</span>
                  </li>
                  <li className="flex items-center gap-4 text-on-surface text-sm md:text-base">
                    <span className="material-symbols-outlined text-[#FF0033]">check_circle</span>
                    <span className="font-body">All Modern Equipment</span>
                  </li>
                  <li className="flex items-center gap-4 text-on-surface text-sm md:text-base">
                    <span className="material-symbols-outlined text-[#FF0033]">check_circle</span>
                    <span className="font-body">No Contractual Obligations</span>
                  </li>
                  <li className="flex items-center gap-4 text-on-surface text-sm md:text-base">
                    <span className="material-symbols-outlined text-[#FF0033]">check_circle</span>
                    <span className="font-body">Free Secure Parking</span>
                  </li>
                  <li className="flex items-start gap-3 text-on-surface text-sm md:text-base bg-surface-container-highest p-3 mt-2">
                    <span className="material-symbols-outlined text-[#FFFF00] shrink-0">redeem</span>
                    <div className="flex flex-col">
                      <span className="font-body font-bold text-white uppercase tracking-wider text-xs mb-0.5">Monthly Lucky Draw</span>
                      <span className="font-body text-xs text-on-surface-variant leading-tight">Every month, one loyal member is randomly selected to win premium, limited-edition gear and exclusive rewards. It's our way of honoring your relentless dedication and celebrating your place in the Undisputed family!</span>
                    </div>
                  </li>
                </ul>
                <button className="w-full bg-white text-black font-headline font-black uppercase italic py-4 md:py-5 text-lg md:text-xl hover:bg-[#FF0033] hover:text-white transition-colors">
                  SIGN UP NOW
                </button>
              </div>
              {/* PT Card */}
              <div className="bg-surface-container-high p-8 md:p-12 flex flex-col border-t-4 lg:border-t-0 lg:border-l-4 border-[#FF0033]">
                <div className="flex justify-between items-start mb-8 md:mb-12">
                  <div>
                    <h4 className="font-headline text-xl md:text-2xl font-black italic uppercase text-white">ELITE COACHING</h4>
                    <p className="text-tertiary font-label text-[10px] md:text-xs tracking-widest uppercase">Personal Training</p>
                  </div>
                  <div className="text-right">
                    <span className="font-headline text-3xl md:text-4xl font-black text-[#FFFF00]">CUSTOM</span>
                  </div>
                </div>
                <ul className="space-y-4 md:space-y-6 mb-10 md:mb-12 flex-grow">
                  <li className="flex items-center gap-4 text-on-surface text-sm md:text-base">
                    <span className="material-symbols-outlined text-[#FF0033]">check_circle</span>
                    <span className="font-body">1-on-1 Professional Coaching</span>
                  </li>
                  <li className="flex items-center gap-4 text-on-surface text-sm md:text-base">
                    <span className="material-symbols-outlined text-[#FF0033]">check_circle</span>
                    <span className="font-body">Personalized Nutrition Programs</span>
                  </li>
                  <li className="flex items-center gap-4 text-on-surface text-sm md:text-base">
                    <span className="material-symbols-outlined text-[#FF0033]">check_circle</span>
                    <span className="font-body">Weekly Progress Tracking</span>
                  </li>
                  <li className="flex items-center gap-4 text-on-surface text-sm md:text-base">
                    <span className="material-symbols-outlined text-[#FF0033]">check_circle</span>
                    <span className="font-body">Expert Support Access</span>
                  </li>
                  <li className="flex items-start gap-3 text-on-surface text-sm md:text-base bg-surface-container-highest p-3 mt-2">
                    <span className="material-symbols-outlined text-[#FFFF00] shrink-0">redeem</span>
                    <div className="flex flex-col">
                      <span className="font-body font-bold text-white uppercase tracking-wider text-xs mb-0.5">Monthly Lucky Draw</span>
                      <span className="font-body text-xs text-on-surface-variant leading-tight">Every month, one loyal member is randomly selected to win premium, limited-edition gear and exclusive rewards. It's our way of honoring your relentless dedication and celebrating your place in the Undisputed family!</span>
                    </div>
                  </li>
                </ul>
                <button className="w-full bg-[#FF0033] text-white font-headline font-black uppercase italic py-4 md:py-5 text-lg md:text-xl hover:bg-[#ff1a4a] transition-colors">
                  ENQUIRE NOW
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Monthly Lucky Draw Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 bg-neutral-900 border-y border-neutral-800 relative overflow-hidden" id="rewards">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <div className="w-full lg:w-1/2">
                <div className="inline-flex items-center gap-2 bg-[#FFFF00] text-black px-4 py-1.5 font-label text-xs md:text-sm font-bold uppercase tracking-widest mb-6 md:mb-8">
                  <span className="material-symbols-outlined text-[18px]">redeem</span>
                  MEMBER REWARDS
                </div>
                <h2 className="font-headline text-4xl sm:text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-6">
                  THE <span className="text-[#FF0033]">LUCKY</span> DRAW
                </h2>
                <p className="font-body text-on-surface-variant text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl">
                  Every month, one loyal member is randomly selected to win <span className="text-white font-bold">premium, limited-edition gear and exclusive rewards</span>. It's our way of honoring your relentless dedication and celebrating your place in the Undisputed family.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface-container-low p-4 border-l-2 border-[#FFFF00]">
                    <span className="material-symbols-outlined text-[#FFFF00] mb-2 text-3xl">workspace_premium</span>
                    <h5 className="font-headline font-bold text-white uppercase text-sm md:text-base">Premium Apparel</h5>
                  </div>
                  <div className="bg-surface-container-low p-4 border-l-2 border-[#FF0033]">
                    <span className="material-symbols-outlined text-[#FF0033] mb-2 text-3xl">bolt</span>
                    <h5 className="font-headline font-bold text-white uppercase text-sm md:text-base">Elite Supplements</h5>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <h3 className="font-headline text-2xl md:text-3xl font-black uppercase italic text-white mb-6 border-b border-neutral-800 pb-4">
                  PREVIOUS WINNERS
                </h3>
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div className="group relative overflow-hidden aspect-square bg-surface-container-highest">
                    <img 
                      src="https://i.ibb.co/vxJ7cL9P/645369087-1463461998901856-936229314578433999-n.jpg" 
                      alt="Previous Winner" 
                      className="w-full h-full object-cover transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="font-headline font-black text-[#FFFF00] text-lg uppercase italic">MARCH WINNER</span>
                      <span className="font-body text-white text-sm">Won: Undisputed Hoodie</span>
                    </div>
                  </div>
                  <div className="group relative overflow-hidden aspect-square bg-surface-container-highest">
                    <img 
                      src="https://i.ibb.co/ZRJJpbcc/655948845-1477548340826555-51592006752862480-n.jpg" 
                      alt="Previous Winner" 
                      className="w-full h-full object-cover transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="font-headline font-black text-[#FFFF00] text-lg uppercase italic">FEBRUARY WINNER</span>
                      <span className="font-body text-white text-sm">Won: Premium Gym Bag</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Testimonials Section */}
        <section className="bg-surface-container-lowest py-16 md:py-24 px-6 md:px-12 border-t border-neutral-800">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16 gap-6">
              <div>
                <h2 className="font-headline text-4xl sm:text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-4">
                  WHAT OUR <span className="text-[#FF0033]">MEMBERS SAY</span>
                </h2>
                <div className="flex items-center gap-3">
                  <span className="font-body text-white font-bold text-xl">5.0</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 24 24" className="w-5 h-5 text-[#fbbc05] fill-current">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="font-body text-on-surface-variant text-sm">Based on Google Reviews</span>
                </div>
              </div>
              <a 
                href="https://share.google/YbBuTqNvOn3P8l8BV" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-body font-bold hover:bg-gray-100 transition-colors shrink-0"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5" />
                Review us on Google
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((review, index) => (
                <div key={index} className="bg-surface-container-highest p-6 md:p-8 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full" />
                      <div>
                        <h4 className="font-body font-bold text-white">{review.name}</h4>
                        <p className="font-body text-on-surface-variant text-xs">{review.time}</p>
                      </div>
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5 opacity-80" />
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 text-[#fbbc05] fill-current">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                    "{review.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 bg-surface relative overflow-hidden" id="contact">
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none hidden lg:block">
            <span className="font-headline text-[30rem] font-black italic uppercase select-none leading-none">IRON</span>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <h2 className="font-headline text-4xl sm:text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-10 md:mb-12">GET IN <span className="text-[#FF0033]">TOUCH</span></h2>
                <div className="space-y-8 md:space-y-12">
                  <div className="flex gap-4 md:gap-6 items-start">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-surface-container-highest flex items-center justify-center text-[#FF0033] flex-shrink-0" title="Our Location">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                      <h5 className="font-headline text-lg md:text-xl font-bold uppercase tracking-tighter text-white mb-2">LOCATION</h5>
                      <p className="font-body text-on-surface-variant text-sm md:text-base">18 Harding Street, Newcastle CBD<br/>South Africa</p>
                    </div>
                  </div>
                  <div className="flex gap-4 md:gap-6 items-start">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-surface-container-highest flex items-center justify-center text-[#FF0033] flex-shrink-0" title="Call Us">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <h5 className="font-headline text-lg md:text-xl font-bold uppercase tracking-tighter text-white mb-2">PHONE</h5>
                      <p className="font-body text-on-surface-variant text-sm md:text-base">+27 76 892 0804</p>
                    </div>
                  </div>
                  <div className="flex gap-4 md:gap-6 items-start">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-surface-container-highest flex items-center justify-center text-[#FF0033] flex-shrink-0" title="Email Us">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <h5 className="font-headline text-lg md:text-xl font-bold uppercase tracking-tighter text-white mb-2">EMAIL</h5>
                      <p className="font-body text-on-surface-variant text-sm md:text-base">pieromzanone@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low p-6 md:p-10">
                <form className="space-y-4 md:space-y-6" onSubmit={handleWhatsAppSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <label className="font-label text-[10px] uppercase tracking-widest text-tertiary">NAME</label>
                      <input name="name" className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-[#FF0033] p-4 text-white font-body text-sm outline-none" placeholder="John Doe" type="text" required/>
                    </div>
                    <div className="space-y-2">
                      <label className="font-label text-[10px] uppercase tracking-widest text-tertiary">EMAIL</label>
                      <input name="email" className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-[#FF0033] p-4 text-white font-body text-sm outline-none" placeholder="john@example.com" type="email" required/>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-[10px] uppercase tracking-widest text-tertiary">PHONE</label>
                    <input name="phone" className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-[#FF0033] p-4 text-white font-body text-sm outline-none" placeholder="+27 00 000 0000" type="tel" required/>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-[10px] uppercase tracking-widest text-tertiary">MESSAGE</label>
                    <textarea name="message" className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-[#FF0033] p-4 text-white font-body text-sm outline-none" placeholder="How can we help you?" rows={4} required></textarea>
                  </div>
                  <button className="w-full bg-[#FF0033] text-white font-headline font-black uppercase italic py-4 md:py-5 text-lg md:text-xl tracking-tighter hover:bg-[#ff1a4a] transition-all" type="submit">
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full h-64 md:h-96 border-t border-neutral-800 bg-neutral-900">
          <iframe
            src="https://maps.google.com/maps?q=18%20Harding%20Street,%20Newcastle%20CBD,%20South%20Africa&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Undisputed Fitness Location"
            className="opacity-70 hover:opacity-100 transition-all duration-500"
          ></iframe>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white w-full py-12 px-6 border-t border-neutral-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
          <div>
            <img src="https://i.ibb.co/qMQK3yJ7/292678414-555215579726507-7971978031194556440-n-removebg-preview-1.png" alt="Undisputed Fitness Logo" className="h-12 md:h-16 w-auto" referrerPolicy="no-referrer" />
          </div>
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
