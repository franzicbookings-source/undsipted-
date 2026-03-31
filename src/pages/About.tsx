import Layout from '../components/Layout';

export default function About() {
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
    <Layout>
      <section className="bg-surface-container-lowest py-16 md:py-24 px-6 md:px-12">
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
            <h1 className="font-headline text-5xl sm:text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-6 md:mb-8">
              BUILT FOR <span className="text-[#FF0033]">CHAMPIONS</span>
            </h1>
            <div className="space-y-6 font-body text-on-surface-variant text-base sm:text-lg leading-relaxed">
              <p>
                At UNDISPUTED, we've stripped away the fluff of modern fitness. This is a sanctuary for those who respect the iron. Our culture is rooted in the golden era of bodybuilding, enhanced by cutting-edge biometric feedback.
              </p>
              <p>
                Every machine, every barbell, and every square inch of our turf is designed for maximum output. We don't just provide a space; we provide an environment where failure is just another step toward dominance.
              </p>
              <p>
                Founded in 2020 by elite athletes, our mission is to create a community of dedicated individuals who push each other to their absolute limits. No excuses, just results.
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

      {/* Google Testimonials Section */}
      <section className="bg-surface py-16 md:py-24 px-6 md:px-12 border-t border-neutral-800">
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
    </Layout>
  );
}
