function Footer() {
  return (
    <footer className="w-full bg-gray-50 pt-24 pb-12 text-sm">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-8" data-aos="fade-up">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tighter">
                SAMSUNG
              </span>
              <span className="text-2xl font-light text-gray-300">|</span>
              <span className="text-2xl font-medium tracking-tighter">
                Apple
              </span>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed font-medium">
              We define the future by merging the world's most powerful
              ecosystems into one unified experience.
            </p>
            <div className="flex gap-4">
              {["twitter", "instagram", "facebook-f", "youtube"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shadow-sm hover:scale-110 hover:shadow-md transition-all duration-300"
                >
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div
            className="lg:col-span-2 space-y-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h4 className="font-bold text-black uppercase text-xs tracking-[0.2em]">
              Hardware
            </h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li>
                <a
                  href="#"
                  className="hover:text-black hover:pl-2 transition-all duration-200 block"
                >
                  Fusion Phone
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-black hover:pl-2 transition-all duration-200 block"
                >
                  Fusion Pad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-black hover:pl-2 transition-all duration-200 block"
                >
                  Fusion Mac
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-black hover:pl-2 transition-all duration-200 block"
                >
                  Wearables
                </a>
              </li>
            </ul>
          </div>

          <div
            className="lg:col-span-2 space-y-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4 className="font-bold text-black uppercase text-xs tracking-[0.2em]">
              Services
            </h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li>
                <a
                  href="#"
                  className="hover:text-black hover:pl-2 transition-all duration-200 block"
                >
                  Fusion Cloud
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-black hover:pl-2 transition-all duration-200 block"
                >
                  Apple TV+
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-black hover:pl-2 transition-all duration-200 block"
                >
                  Galaxy Pass
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-black hover:pl-2 transition-all duration-200 block"
                >
                  Care+
                </a>
              </li>
            </ul>
          </div>

          <div
            className="lg:col-span-3 space-y-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h4 className="font-bold text-black uppercase text-xs tracking-[0.2em]">
              Stay Updated
            </h4>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-all font-medium"
              />
              <button className="bg-black text-white px-6 py-3 rounded-lg font-bold uppercase tracking-wider hover:scale-105 transition-transform duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-bold uppercase tracking-wider">
          <p>© 2026 SAMSUNG | Apple Inc. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-black hover:scale-105 transition-all"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-black hover:scale-105 transition-all"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
