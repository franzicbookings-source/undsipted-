import Layout from '../components/Layout';

export default function Pricing() {
  return (
    <Layout>
      <section className="py-16 md:py-24 px-6 md:px-12 bg-neutral-950 min-h-[80vh]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16 text-center">
            <h1 className="font-headline text-5xl sm:text-6xl md:text-8xl font-black uppercase italic tracking-tighter">JOIN THE <span className="text-[#FF0033]">RANKS</span></h1>
            <div className="inline-flex items-center gap-2 bg-[#FFFF00] text-black px-4 py-1.5 font-label text-xs md:text-sm font-bold uppercase tracking-widest mt-6">
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
    </Layout>
  );
}
