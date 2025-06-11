export default function Shop() {
  return (
    <div>
      {/* Intro Text */}
      <div className="text-center pt-7 mt-7 text-2xl font-light text-gray-800">
        Clever ways to purchase your dream watches
      </div>

      {/* Product Sections */}
      <div className="py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Men's Best Sellers */}
          <ProductCategory
            image="/unsplash_i7NK5oUQchg.png"
            label="Men's Best Sellers"
          />

          {/* Women's Best Sellers */}
          <ProductCategory
            image="/unsplash_j8C66j15nAk.png"
            label="Women's Best Sellers"
          />

          {/* Couple's Best Sellers */}
          <ProductCategory
            image="/unsplash_Ymh6T-HAJEs@2x.png"
            label="Couple's Best Sellers"
          />
        </div>
      </div>

      {/* Fresh Additions */}
     <div className="bg-gradient-to-b from-white to-black py-10 text-white">
  <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
    <span className="text-black">
      FRESH ADDITIONS
    </span>
  </h2>

        <div className="flex justify-center gap-6 overflow-x-auto px-4 md:px-10 scrollbar-hide">
          <FreshCard
            image="/unsplash_12V36G17IbQ (1).png"
            text="SEE BEYOND, WATCH THE WORLD UNFOLD"
                        bg="bg-white-900"

          />
          <FreshCard
            image="/unsplash_12V36G17IbQ.png"
            text="LOKI"
            subtitle="Edition"
            bg="bg-white-900"
          />
          <FreshCard
            image="/unsplash_anUOLC3zMD4.png"
            text="VINTAGE"
            subtitle="LOOK"
            bg="bg-white-900"
          />
          <FreshCard
            image="/Image 2.png"
            text="SCHAFFHAUSEN"
            subtitle="BY IWC"
            textColor="bg-white-900"
            bg="bg-white-900"
          />
        </div>
      </div>

      {/* CHARTBUSTER Section */}
      <div className="bg-gradient-to-b from-gray-800 to-black py-10 px-4 text-white">
        <h2 className="text-3xl md:text-4xl font-semibold text-left mb-8 px-4">
          <span className="font-bold text-white">CHARTBUSTER</span>
        </h2>

        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button className="w-10 h-10 rounded-full bg-gray-600 hover:bg-gray-500 flex items-center justify-center text-white ml-2 z-10">
            &larr;
          </button>

          {/* Product Cards */}
          <div className="flex overflow-x-auto gap-6 px-4 scrollbar-hide">
            <ChartbusterCard
              image="/Rendering of smart home device.png"
              name="Fossil 10 ATM"
              price="₹9,999"
            />
            <ChartbusterCard
              image="/unsplash_u8isJQ6QjF4.png"
              name="Curran"
              price="₹8,999"
            />
            <ChartbusterCard
              image="/unsplash_brqTWpFkmSQ.png"
              name="Fossil 20 ATM"
              price="₹12,499"
            />
            <ChartbusterCard
              image="/unsplash_al6s6JpnZis.png"
              name="Rolex Oyster Perpetual"
              price="₹15,499"
            />

             <ChartbusterCard
              image="/unsplash_4R_WEmhx8og.png"
              name="Rolex Oyster Perpetual"
              price="₹15,499"
            />

             <ChartbusterCard
              image="/Close up on clock with time change (1).png"
              name="Rolex Oyster Perpetual"
              price="₹15,499"
            />

             <ChartbusterCard
              image="/Woman showing her nail art on fingernails with watch.png"
              name="Rolex lady's Watch"
              price="₹15,499"
            />
          </div>

          {/* Right Arrow */}
          <button className="w-10 h-10 rounded-full bg-gray-600 hover:bg-gray-500 flex items-center justify-center text-white ml-2 z-10">
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductCategory({ image, label }) {
  return (
    <div className="relative">
      <img src={image} alt={label} className="w-full h-auto object-cover" />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-center px-6 py-4">
        <p className="text-sm text-gray-700">{label}</p>
        <button className="text-lg text-black font-medium hover:underline">
          Shop Now
        </button>
      </div>
    </div>
  );
}

function FreshCard({ image, text, subtitle = "", bg = "bg-black", textColor = "text-white", subtitleColor = "text-white" }) {
  return (
    <div className={`min-w-[250px] ${bg} text-center p-4 rounded-lg shadow-lg`}>
      <img src={image} alt={text} className="mx-auto mb-4" />
      <p className={`text-lg md:text-xl font-serif ${textColor}`}>{text}</p>
      {subtitle && <p className={`text-sm ${subtitleColor}`}>{subtitle}</p>}
    </div>
  );
}

function ChartbusterCard({ image, name, price }) {
  return (
    <div className="min-w-[250px] text-center">
      <img src={image} alt={name} className="w-full h-auto mb-2" />
      <div className="text-sm font-medium">{name}</div>
      <div className="text-sm mb-2">{price}</div>
      <div className="flex justify-between gap-2">
        <button className="flex-1 bg-white text-black py-1 px-2 border border-white hover:bg-gray-100">
          Add to Cart
        </button>
        <button className="flex-1 border border-white py-1 px-2 hover:bg-gray-100 hover:text-black">
          View Details
        </button>
      </div>
    </div>
  );
}
