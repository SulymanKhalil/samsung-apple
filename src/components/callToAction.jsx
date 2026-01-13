function CallToAction() {
  return (
    <section className="w-full py-32 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <div
          className="relative w-full bg-black rounded-[3rem] overflow-hidden px-8 py-24 md:p-32 text-center text-white flex flex-col items-center gap-12"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div className="space-y-8 relative z-10">
            <h2 className="text-5xl md:text-9xl font-bold tracking-tighter leading-none">
              Switch to <br /> Fusion.
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-medium">
              The best of both worlds. Finally in one device.
            </p>
          </div>

          <button className="relative z-10 bg-white text-black px-14 py-6 rounded-full text-lg font-bold uppercase tracking-widest hover:scale-105 hover:bg-gray-100 transition-all duration-300 shadow-2xl">
            Pre-Order Now
          </button>

          {/* Background Decor */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900/10 z-0"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
