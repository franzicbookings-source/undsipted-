import Layout from '../components/Layout';

export default function Training() {
  return (
    <Layout>
      <section className="py-16 md:py-24 px-6 md:px-12 bg-surface min-h-[80vh]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16 text-center md:text-left">
            <h1 className="font-headline text-5xl sm:text-6xl md:text-8xl font-black uppercase italic tracking-tighter">OUR <span className="text-[#FF0033]">TRAINING</span></h1>
            <p className="font-body text-on-surface-variant text-lg md:text-xl mt-6 max-w-2xl">
              Elevate your performance with our elite training programs. From heavy lifting to high-intensity conditioning, we have the tools and expertise to build champions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
            {/* Card 1 */}
            <div className="group bg-surface-container-low p-8 md:p-10 border-b md:border-b-0 md:border-r border-neutral-800 last:border-0 hover:bg-surface-container-high transition-colors">
              <div className="mb-6 md:mb-8 text-[#FF0033] group-hover:scale-110 transition-transform origin-left">
                <span className="material-symbols-outlined text-5xl md:text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>fitness_center</span>
              </div>
              <h3 className="font-headline text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-white mb-4">STRENGTH & CONDITIONING</h3>
              <p className="font-body text-on-surface-variant text-sm md:text-base leading-relaxed mb-6">
                Olympic lifting platforms, competition benches, and a vast array of free weights. Build raw power and explosive strength in our dedicated heavy zone.
              </p>
              <a className="inline-flex items-center gap-2 font-headline font-bold uppercase tracking-tighter text-[#FFFF00] hover:text-white transition-colors" href="/pricing">
                JOIN NOW <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
            {/* Card 2 */}
            <div className="group bg-surface-container-low p-8 md:p-10 border-b md:border-b-0 md:border-r border-neutral-800 last:border-0 hover:bg-surface-container-high transition-colors">
              <div className="mb-6 md:mb-8 text-[#FF0033] group-hover:scale-110 transition-transform origin-left">
                <span className="material-symbols-outlined text-5xl md:text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>sports_martial_arts</span>
              </div>
              <h3 className="font-headline text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-white mb-4">COMBAT SPORTS</h3>
              <p className="font-body text-on-surface-variant text-sm md:text-base leading-relaxed mb-6">
                Full-size boxing ring, heavy bags, and matted areas for grappling. Train like a fighter with our specialized combat sports equipment and classes.
              </p>
              <a className="inline-flex items-center gap-2 font-headline font-bold uppercase tracking-tighter text-[#FFFF00] hover:text-white transition-colors" href="/pricing">
                JOIN NOW <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
            {/* Card 3 */}
            <div className="group bg-surface-container-low p-8 md:p-10 border-b md:border-b-0 md:border-r border-neutral-800 last:border-0 hover:bg-surface-container-high transition-colors">
              <div className="mb-6 md:mb-8 text-[#FF0033] group-hover:scale-110 transition-transform origin-left">
                <span className="material-symbols-outlined text-5xl md:text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>monitor_heart</span>
              </div>
              <h3 className="font-headline text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-white mb-4">HIGH INTENSITY</h3>
              <p className="font-body text-on-surface-variant text-sm md:text-base leading-relaxed mb-6">
                Assault bikes, rowers, sleds, and battle ropes. Push your cardiovascular limits and burn fat in our high-intensity functional training area.
              </p>
              <a className="inline-flex items-center gap-2 font-headline font-bold uppercase tracking-tighter text-[#FFFF00] hover:text-white transition-colors" href="/pricing">
                JOIN NOW <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
