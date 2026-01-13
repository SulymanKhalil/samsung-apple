function Comparison() {
  const ecosystem = [
    {
      id: 1,
      device: "Fusion Phone",
      tag: "Dynamic",
      description: "Dynamic Island paired with Edge display.",
      icon: <i className="fas fa-mobile-alt text-4xl"></i>,
    },
    {
      id: 2,
      device: "Fusion Tab",
      tag: "Canvas",
      description: "S-Pen precision on a Liquid Retina XDR screen.",
      icon: <i className="fas fa-tablet-alt text-4xl"></i>,
    },
    {
      id: 3,
      device: "Fusion Watch",
      tag: "Vitals",
      description: "Rotating bezel with watchOS fluidity.",
      icon: <i className="fas fa-stopwatch text-4xl"></i>,
    },
    {
      id: 4,
      device: "Fusion Book",
      tag: "Power",
      description: "MacOS power with a touchscreen interface.",
      icon: <i className="fas fa-laptop text-4xl"></i>,
    },
  ];

  return (
    <section id="ecosystem" className="w-full py-32 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="space-y-6" data-aos="fade-right">
            <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase">
              Ecosystem
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-black tracking-tight leading-none">
              AirDrop meets <br /> Quick Share.
            </h2>
          </div>
          <p
            className="text-xl text-gray-500 max-w-lg pb-2 font-medium"
            data-aos="fade-left"
          >
            The walls are broken. Seamlessly transfer, control, and extend your
            workspace across all platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ecosystem.map((item, index) => (
            <div
              key={item.id}
              className="group bg-gray-50 rounded-[2.5rem] p-10 flex flex-col justify-between h-[340px] hover:bg-black hover:text-white transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2 cursor-pointer border border-transparent hover:border-gray-800"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-gray-900 group-hover:text-white transition-colors duration-500">
                {item.icon}
              </div>

              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest opacity-50">
                  {item.tag}
                </span>
                <h3 className="text-3xl font-bold tracking-tight">
                  {item.device}
                </h3>
                <p className="text-base opacity-70 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Comparison;
