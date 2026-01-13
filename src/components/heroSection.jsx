function HeroSection() {
  return (
    <section className="w-full min-h-[100vh] flex items-center pt-[80px] bg-white overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <div className="flex flex-col items-start gap-8 order-2 lg:order-1 py-12">
          <div className="space-y-4">
            <span
              className="block text-xs font-bold tracking-[0.3em] text-gray-400 uppercase border-l-2 border-black pl-4"
              data-aos="fade-right"
            >
              Designed by Apple • Engineered by Samsung
            </span>
            <h1
              className="text-5xl md:text-8xl font-bold text-black leading-[1.05] tracking-tight text-balance-header"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              The Perfect <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200">
                Fusion.
              </span>
            </h1>
          </div>

          <p
            className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg font-medium"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            California minimalism meets Korean innovation. The world's most
            advanced display technology encased in the purest form factor ever
            created.
          </p>

          <div
            className="flex flex-wrap gap-4 pt-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <button className="bg-black text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 hover:bg-neutral-800 transition-all duration-300 shadow-xl">
              Experience
            </button>
            <button className="bg-gray-100 text-black px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 hover:bg-gray-200 transition-all duration-300">
              Tech Specs
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div
          className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          <div className="relative w-full max-w-[600px] aspect-square lg:aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl hover:scale-[1.02] transition-transform duration-700">
            <img
              src="/Images/hero-2.webp"
              alt="Fusion Device"
              className="w-full h-full object-cover"
            />
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
          </div>

          {/* Floating UI Card */}
          <div
            className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md p-6 rounded-[2rem] shadow-2xl border border-white/20 hidden md:block"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white">
                <i className="fab fa-apple text-xl"></i>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="font-bold text-sm">
                <div className="text-gray-900">A18 Bionic</div>
                <div className="text-gray-400 text-xs">Meets Snapdragon 9</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
