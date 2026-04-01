import React from 'react';
import Layout from '../components/Layout';

export default function Contact() {
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

  return (
    <Layout>
      <section className="py-12 md:py-24 px-4 md:px-12 bg-surface relative overflow-hidden min-h-[80vh]">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none hidden lg:block">
          <span className="font-headline text-[30rem] font-black italic uppercase select-none leading-none">IRON</span>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <div>
              <h1 className="font-headline text-4xl sm:text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-6 md:mb-12">GET IN <span className="text-[#FF0033]">TOUCH</span></h1>
              <div className="space-y-8 md:space-y-12">
                <div className="flex gap-4 md:gap-6 items-start">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-surface-container-highest flex items-center justify-center text-[#FF0033] flex-shrink-0" title="Our Location">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h5 className="font-headline text-base md:text-xl font-bold uppercase tracking-tighter text-white mb-2">LOCATION</h5>
                    <p className="font-body text-on-surface-variant text-xs sm:text-sm md:text-base">18 Harding Street, Newcastle CBD<br/>South Africa</p>
                  </div>
                </div>
                <div className="flex gap-4 md:gap-6 items-start">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-surface-container-highest flex items-center justify-center text-[#FF0033] flex-shrink-0" title="Call Us">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <h5 className="font-headline text-base md:text-xl font-bold uppercase tracking-tighter text-white mb-2">PHONE</h5>
                    <p className="font-body text-on-surface-variant text-xs sm:text-sm md:text-base">+27 76 892 0804</p>
                  </div>
                </div>
                <div className="flex gap-4 md:gap-6 items-start">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-surface-container-highest flex items-center justify-center text-[#FF0033] flex-shrink-0" title="Email Us">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <h5 className="font-headline text-base md:text-xl font-bold uppercase tracking-tighter text-white mb-2">EMAIL</h5>
                    <p className="font-body text-on-surface-variant text-xs sm:text-sm md:text-base">pieromzanone@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-low p-5 md:p-10">
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
                <button className="w-full bg-[#FF0033] text-white font-headline font-black uppercase italic py-4 md:py-5 text-base md:text-xl tracking-tighter hover:bg-[#ff1a4a] transition-all" type="submit">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-24 px-4 md:px-12 bg-surface-container-lowest border-t border-neutral-800 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-headline text-3xl sm:text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-4">
              FREQUENTLY ASKED <span className="text-[#FF0033]">QUESTIONS</span>
            </h2>
            <p className="font-body text-on-surface-variant text-base md:text-lg">
              Got questions? We've got answers. If you need more info, drop us a message above.
            </p>
          </div>

          <div className="space-y-4 md:space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-surface-container-low p-5 md:p-8 border-l-4 border-[#FF0033]">
              <h3 className="font-headline text-lg md:text-2xl font-black uppercase italic text-white mb-3">
                Are there any joining fees or lock-in contracts?
              </h3>
              <p className="font-body text-on-surface-variant text-xs sm:text-sm md:text-base leading-relaxed">
                No. We believe in earning your loyalty through results, not paperwork. There are zero joining fees and absolutely no contractual obligations. You can pay month-to-month or grab a day pass.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-surface-container-low p-5 md:p-8 border-l-4 border-[#FFFF00]">
              <h3 className="font-headline text-lg md:text-2xl font-black uppercase italic text-white mb-3">
                Do you have showers and locker rooms?
              </h3>
              <p className="font-body text-on-surface-variant text-xs sm:text-sm md:text-base leading-relaxed">
                Yes! We have fully equipped, clean showers and secure locker rooms available for all members. You can comfortably freshen up before heading to work or after a grueling session.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-surface-container-low p-5 md:p-8 border-l-4 border-[#FF0033]">
              <h3 className="font-headline text-lg md:text-2xl font-black uppercase italic text-white mb-3">
                What kind of training programs do you offer?
              </h3>
              <p className="font-body text-on-surface-variant text-xs sm:text-sm md:text-base leading-relaxed">
                We offer elite 1-on-1 personal training tailored to your specific goals. Whether you're looking for strength and conditioning, combat sports training, or high-intensity fat loss, our pro trainers will build a custom blueprint and nutrition plan for you.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-surface-container-low p-5 md:p-8 border-l-4 border-[#FFFF00]">
              <h3 className="font-headline text-lg md:text-2xl font-black uppercase italic text-white mb-3">
                What are your opening hours?
              </h3>
              <div className="font-body text-on-surface-variant text-xs sm:text-sm md:text-base leading-relaxed space-y-2">
                <p>We have extended hours to fit your schedule:</p>
                <ul className="list-none space-y-1">
                  <li><span className="text-white font-bold">Monday - Thursday:</span> 5:00 AM – 8:00 PM</li>
                  <li><span className="text-white font-bold">Friday:</span> 5:00 AM – 8:00 PM</li>
                  <li><span className="text-white font-bold">Saturday:</span> 7:00 AM – 4:00 PM</li>
                  <li><span className="text-white font-bold">Sunday:</span> Closed</li>
                </ul>
                <p className="text-xs text-tertiary mt-2">* Holiday hours may vary (e.g., Good Friday 6 AM – 2 PM, Family Day 7 AM – 12 PM).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-64 md:h-96 border-t border-neutral-800 bg-neutral-900">
        <iframe
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=18%20Harding%20Street,%20Newcastle,%20South%20Africa+(Undisputed%20Fitness)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
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
    </Layout>
  );
}
