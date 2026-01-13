function VisualGallery() {
  const mediaItems = [
    {
      type: "video",
      src: "/Images/lifestyle-2.mp4",
      span: "col-span-1 md:col-span-2 row-span-2",
      title: "One UI x iOS",
      text: "Fluidity Redefined.",
    },
    {
      type: "image",
      src: "/Images/hero-1.avif",
      span: "col-span-1 row-span-1",
      title: "Ceramic Shield",
      text: "Gorilla Glass Victus.",
    },
    {
      type: "image",
      src: "/Images/hero-3.avif",
      span: "col-span-1 row-span-1",
      title: "MagSafe",
      text: "Fast Wireless Charging.",
    },
    {
      type: "image",
      src: "/Images/product-1.avif",
      span: "col-span-1 row-span-2",
      title: "100x Zoom",
      text: "Optical Perfection.",
    },
    {
      type: "image",
      src: "/Images/innovation-1.jpg",
      span: "col-span-1 md:col-span-2 row-span-1",
      title: "A18 Bionic",
      text: "Neural Engine.",
    },
    {
      type: "image",
      src: "/Images/product-2.jpg",
      span: "col-span-1 row-span-1",
      title: "8K Video",
      text: "ProRes Log.",
    },
    {
      type: "image",
      src: "/Images/lifestyle-1.avif",
      span: "col-span-1 row-span-1",
      title: "Ecosystem",
      text: "Connected.",
    },
    {
      type: "image",
      src: "/Images/product-3.jpg",
      span: "col-span-1 md:col-span-2 row-span-1",
      title: "Fold Display",
      text: "ProMotion 120Hz.",
    },
    {
      type: "image",
      src: "/Images/innovation-2.jpeg",
      span: "col-span-1 row-span-1",
      title: "Titanium",
      text: "Aerospace Grade.",
    },
    {
      type: "image",
      src: "/Images/hero-2.webp",
      span: "col-span-1 row-span-1",
      title: "Face ID",
      text: "Ultrasonic Sensor.",
    },
  ];

  return (
    <section className="w-full py-32 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 space-y-20">
        <div className="text-center space-y-8" data-aos="fade-up">
          <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase">
            Gallery
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-black tracking-tighter leading-none text-balance-header">
            Designed in California. <br /> Assembled in Korea.
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
            A visual roadmap of the ultimate technological partnership.
          </p>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-6">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-[2.5rem] bg-gray-100 ${item.span}`}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {item.type === "video" ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Text */}
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VisualGallery;
