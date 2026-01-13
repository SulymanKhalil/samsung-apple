function ProductHighlights() {
  const highlights = [
    {
      id: 1,
      title: "A18 x Snapdragon",
      description:
        "The raw power of Apple Silicon meets the efficiency of Qualcomm.",
      icon: <i className="fas fa-microchip text-3xl"></i>,
    },
    {
      id: 2,
      title: "ProVision",
      description: "100x Space Zoom with the color science of iPhone.",
      icon: <i className="fas fa-eye text-3xl"></i>,
    },
    {
      id: 3,
      title: "Fusion Battery",
      description: "All-day battery life optimized by both iOS and One UI.",
      icon: <i className="fas fa-battery-full text-3xl"></i>,
    },
    {
      id: 4,
      title: "XDR AMOLED",
      description: "Super Retina resolution with the vibrancy of AMOLED.",
      icon: <i className="fas fa-desktop text-3xl"></i>,
    },
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-16">
        <div className="text-center space-y-4" data-aos="fade-down">
          <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase">
            Specs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight text-balance-header">
            The Best of Both Worlds.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-[2rem] p-8 flex flex-col items-center text-center gap-6 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-gray-200"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black shadow-sm mb-2 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-black">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductHighlights;
