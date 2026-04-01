import Layout from '../components/Layout';

export default function Gallery() {
  const images = [
    "https://i.ibb.co/pjQ5Bvfh/484582584-1182677370313655-4650407755299641902-n.jpg",
    "https://i.ibb.co/6L4dyVf/485157043-1182677390313653-2673108498748192546-n.jpg",
    "https://i.ibb.co/xqGrPwXL/485046651-1185332870048105-8406365456842701885-n.jpg",
    "https://i.ibb.co/sp7hDVcS/485728849-1185332786714780-3156158194556801887-n.jpg",
    "https://i.ibb.co/YTqTT5XN/485146018-1183785183536207-7816788769452113709-n.jpg",
    "https://i.ibb.co/wxbk93D/484796748-1185332706714788-1551667737517066802-n.jpg",
  ];

  return (
    <Layout>
      <section className="py-12 md:py-24 px-4 md:px-12 bg-surface min-h-[80vh]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 md:mb-16 text-center">
            <h1 className="font-headline text-4xl sm:text-6xl md:text-8xl font-black uppercase italic tracking-tighter">OUR <span className="text-[#FF0033]">GALLERY</span></h1>
            <p className="font-body text-on-surface-variant text-base md:text-xl mt-6 max-w-2xl mx-auto">
              Take a look inside the iron sanctuary. The equipment, the atmosphere, the community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {images.map((src, index) => (
              <div key={index} className="group relative overflow-hidden aspect-[4/3] bg-surface-container-highest">
                <img 
                  src={src} 
                  alt={`Gallery Image ${index + 1}`} 
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#FF0033] transition-colors duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
