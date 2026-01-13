function Lifestyle() {
  return (
    <section
      id="lifestyle"
      className="relative w-full h-[900px] bg-black overflow-hidden flex items-center justify-center"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="/Images/lifestyle-2.mp4" type="video/mp4" />
      </video>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] px-6 md:px-12 text-center text-white space-y-12">
        <h2
          className="text-7xl md:text-9xl font-bold tracking-tighter leading-none"
          data-aos="zoom-out"
        >
          Shot on <br />{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Fusion.
          </span>
        </h2>
        <p
          className="text-xl md:text-3xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed tracking-tight"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Cinematic mode meets 8K Space Zoom. Capture your world with the
          clarity of a studio and the intelligence of AI.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <button className="bg-white text-black px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 hover:bg-gray-100 transition-all duration-300 shadow-2xl">
            Watch The Film
          </button>
        </div>
      </div>
    </section>
  );
}

export default Lifestyle;
