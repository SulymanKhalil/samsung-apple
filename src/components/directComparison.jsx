function DirectComparison() {
  const specs = [
    {
      label: "Processor",
      standard: "Snapdragon 8 Gen 4",
      fusion: "A18 Pro Fusion",
    },
    { label: "RAM", standard: "12GB LPDDR5X", fusion: "16GB Unified Memory" },
    { label: "Neural Engine", standard: "45 TOPS", fusion: "98 TOPS Native" },
    { label: "Storage", standard: "UFS 4.0", fusion: "NVMe Gen 5" },
    { label: "ISP", standard: "18-bit Spectra", fusion: "Photonic Engine" },
  ];

  return (
    <section
      id="comparison"
      className="w-full py-40 bg-black text-white overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 space-y-24">
        {/* Header */}
        <div className="text-center space-y-8" data-aos="fade-up">
          <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase">
            Dual-Engine Processing
          </span>
          <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none text-balance-header">
            Raw Power. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Intelligent Beauty.
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            See the difference Fusion makes. Unprocessed RAW hardware output vs
            our proprietary Neural Engine processing.
          </p>
        </div>

        {/* Comparison Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image 1: Standard/Raw */}
          <div className="space-y-6 group" data-aos="fade-right">
            <div className="relative aspect-[4/5] md:aspect-video lg:aspect-square overflow-hidden rounded-[3rem] border border-white/10">
              <img
                src="/Images/comparison-1.jpg"
                alt="Standard Capture"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[30%]"
              />
              <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <span className="text-xs font-bold uppercase tracking-widest text-white">
                  Standard RAW
                </span>
              </div>
            </div>
            <div className="pl-4 border-l border-white/20">
              <h3 className="text-2xl font-bold text-white">Hardware Only</h3>
              <p className="text-gray-500 mt-2">108MP Sensor Output</p>
            </div>
          </div>

          {/* Image 2: Fusion/Processed */}
          <div className="space-y-6 group" data-aos="fade-left">
            <div className="relative aspect-[4/5] md:aspect-video lg:aspect-square overflow-hidden rounded-[3rem] border border-blue-500/30 shadow-[0_0_100px_rgba(59,130,246,0.2)]">
              <img
                src="/Images/comparison-2.jpg"
                alt="Fusion Processing"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 bg-blue-600/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                <span className="text-xs font-bold uppercase tracking-widest text-white">
                  Fusion Engine
                </span>
              </div>

              {/* Overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 mix-blend-overlay pointer-events-none"></div>
            </div>
            <div className="pl-4 border-l-2 border-blue-500">
              <h3 className="text-2xl font-bold text-white">
                Neural Processed
              </h3>
              <p className="text-gray-400 mt-2">A18 Bionic x Snapdragon ISP</p>
            </div>
          </div>
        </div>

        {/* Specs Table */}
        <div className="w-full max-w-4xl mx-auto pt-10" data-aos="fade-up">
          <div className="bg-neutral-900/50 rounded-[2.5rem] border border-white/10 p-8 md:p-12 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-8 text-center tracking-tight">
              Technical Breakdown
            </h3>
            <div className="space-y-6">
              {specs.map((spec, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 gap-4 py-4 border-b border-white/5 last:border-0 items-center"
                >
                  <div className="text-gray-400 font-medium text-sm md:text-base text-right pr-4">
                    {spec.standard}
                  </div>
                  <div className="text-gray-500 font-bold uppercase text-xs tracking-widest text-center border-x border-white/10">
                    {spec.label}
                  </div>
                  <div className="text-blue-400 font-bold text-base md:text-lg text-left pl-4">
                    {spec.fusion}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DirectComparison;
