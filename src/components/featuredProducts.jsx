function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Galaxy Pro Max",
      tag: "Hybrid",
      image: "/Images/product-1.avif",
      price: "$1,199",
    },
    {
      id: 2,
      name: "Vision Ultra",
      tag: "Foldable",
      image: "/Images/product-2.jpg",
      price: "$1,399",
    },
    {
      id: 3,
      name: "Air Note",
      tag: "Computing",
      image: "/Images/product-3.jpg",
      price: "$1,899",
    },
  ];

  return (
    <section id="products" className="w-full py-32 bg-gray-50">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="space-y-6" data-aos="fade-right">
            <h2 className="text-5xl md:text-6xl font-bold text-black tracking-tight leading-none">
              Two Giants. <br /> One Lineup.
            </h2>
            <p className="text-lg text-gray-500 max-w-md font-medium">
              The seamless integration of iOS fluidity with Galaxy's hardware
              superiority.
            </p>
          </div>
          <a
            href="#"
            className="hidden md:block text-sm font-bold uppercase tracking-widest text-black hover:text-gray-600 transition-all"
            data-aos="fade-left"
          >
            Compare Models &rarr;
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-[2.5rem] p-8 flex flex-col gap-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-full aspect-[4/5] bg-gray-100 rounded-[2rem] overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                  {product.tag}
                </div>
              </div>

              <div className="flex flex-col gap-4 flex-grow">
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-black tracking-tight">
                    {product.name}
                  </h3>
                  <div className="text-sm font-bold text-gray-400">
                    {product.price}
                  </div>
                </div>

                <button className="mt-auto w-full bg-black text-white px-6 py-4 rounded-full text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-500 shadow-lg">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
