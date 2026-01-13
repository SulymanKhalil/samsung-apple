function Innovation() {
  return (
    <section
      id="innovation"
      className="w-full py-40 bg-neutral-950 text-white overflow-hidden relative"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
        {/* Text */}
        <div className="flex flex-col items-start gap-12">
          <div className="space-y-8">
            <span
              className="text-xs font-bold tracking-[0.4em] text-blue-400 uppercase"
              data-aos="fade-right"
            >
              M Series • Snapdragon 9
            </span>
            <h2
              className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none text-balance-header"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Titanium <br />
              <span className="text-gray-600">Alloy.</span>
            </h2>
            <p
              className="text-2xl text-gray-400 leading-tight font-light max-w-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Forged from the same titanium used in spacecraft, powered by the
              neural engine of tomorrow.
            </p>
          </div>

          <div
            className="flex flex-wrap gap-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <button className="bg-white text-black px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 hover:bg-gray-200 transition-all duration-300 shadow-xl shadow-white/5">
              Material Science
            </button>
            <button className="bg-transparent border border-white/20 text-white px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 hover:bg-white/10 transition-all duration-300">
              Performance
            </button>
          </div>
        </div>

        {/* Visual Abstract */}
        <div
          className="relative flex justify-center lg:justify-end"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="w-full max-w-[500px] aspect-square bg-gradient-to-br from-gray-900 to-black rounded-[4rem] border border-white/10 flex items-center justify-center relative overflow-hidden group hover:scale-[1.02] transition-transform duration-700 shadow-2xl">
            <div className="absolute inset-0 bg-[url('/Images/innovation-1.jpg')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>

            <div className="relative z-10 text-center space-y-2">
              <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800">
                M4
              </div>
              <div className="text-xs font-bold tracking-[0.5em] text-blue-400 uppercase">
                Chipset
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Innovation;
