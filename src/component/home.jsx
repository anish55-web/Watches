import React, { useState, useEffect, useRef } from 'react';
import { Search, User, Heart, ShoppingBag, Box } from 'lucide-react';
import CustomSlider from './Scrollbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Shop from '../component/shop';

export default function TitanHeader() {
  const navLinks = [
    {
      name: 'NEW',
      suggestions: ['Mens New Arrivals', 'Womens New Arrivals', 'Couples New Arrivels'],
    },
    {
      name: 'Watches',
      suggestions: ['Trending', 'Men', 'Women', 'Collection'],
    },
    {
      name: 'SMART WATCHES',
      suggestions: ['Shop By Feature', 'Shop By Brand', 'Shop By Color', 'Shop By Price', 'Shop By Gender'],
    },
    {
      name: 'Sale',
      suggestions: ['Shop By Discount', 'Upto 20% Off', '20%-30% Off', '30%-40% Off', '40%-50% Off'],
    },
    {
      name: 'Gifts',
      suggestions: ['Gifts For Men', 'Gifts For Women', 'Gifts For Kids', 'Gifts For Sports', 'Shop By Gender'],
    },
  ];

  const fullPlaceholders = [
    'Search Titan',
    'Search watches',
    'Search smartwatches',
    'Search gifts',
    'Search sale items',
  ];

  const [placeholder, setPlaceholder] = useState('');
  const [fullTextIndex, setFullTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const hideTimeoutRef = useRef(null);

  useEffect(() => {
    const currentText = fullPlaceholders[fullTextIndex];
    if (charIndex <= currentText.length) {
      const timeout = setTimeout(() => {
        setPlaceholder(currentText.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const delay = setTimeout(() => {
        setCharIndex(0);
        setFullTextIndex((prev) => (prev + 1) % fullPlaceholders.length);
      }, 2000);
      return () => clearTimeout(delay);
    }
  }, [charIndex, fullTextIndex]);

  const handleMouseEnter = (index) => {
    clearTimeout(hideTimeoutRef.current);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setActiveIndex(null);
    }, 200);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white border border-gray-200 shadow z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
          <div className="flex-shrink-0">
            <span className="text-5xl font-bold relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-black after:w-0 hover:after:w-full after:transition-all after:duration-500">
              TICKZ
            </span>
          </div>

          <div className="flex-1 mx-4 relative">
            <input
              type="text"
              placeholder={placeholder}
              className="w-full border border-gray-300 rounded-md py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-black-500"
            />
            <button
              aria-label="Search"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              <Search className="w-5 h-5 text-gray-500 hover:text-dark cursor-pointer " />
            </button>
          </div>

          <div className="flex items-center space-x-10">
            {[User, Heart, ShoppingBag, Box].map((Icon, i) => (
              <button
                key={i}
                aria-label="Icon"
                className="flex flex-col items-center space-y-1 text-gray-700 hover:text-black cursor-pointer"
              >
                <Icon className="w-5 h-5" />
                <span className="relative font-bold text-sm after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-black after:w-0 hover:after:w-full after:transition-all after:duration-500">
                  {['Account', 'Wishlist', 'Cart', 'Track Order'][i]}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="w-full bg-white border-t border-gray-100 shadow z-40">
          <nav className="max-w-7xl mx-5">
            <ul className="flex justify-between py-2 relative">
              {navLinks.map((link, index) => (
                <li
                  key={link.name}
                  className="flex flex-col items-center text-sm font-medium text-gray-800 cursor-pointer px-3"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onTouchStart={() => handleMouseEnter(index)}
                >
                  <span
                    className="
                      relative
                      cursor-pointer
                      after:content-['']
                      after:absolute after:left-0 after:bottom-0
                      after:h-[3px] after:bg-current
                      after:w-0
                      hover:after:w-full
                      after:transition-all after:duration-500
                      after:rounded-md
                    "
                  >
                    {link.name}
                  </span>

                  {activeIndex === index && (
                    <div
                      className="absolute left-0 top-full mt-2 w-screen bg-white border-t shadow-md z-50"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="max-w-7xl mx-4 p-3 grid grid-cols-4 gap-4">
                      <ul className="col-span-3 space-y-2">
  {link.suggestions.map((suggestion) => (
    <li
      key={suggestion}
      className="
        text-gray-700
        hover:bg-gray-100
        py-2
        cursor-pointer
        rounded
      "
      onClick={() => alert(`Clicked: ${suggestion}`)}
    >
      <span
        className="
          relative
          after:content-['']
          after:absolute
          after:left-0
          after:bottom-0
          after:h-[2px]
          after:bg-current
          after:w-0
          hover:after:w-full
          after:transition-all
          after:duration-500
        "
      >
        {suggestion}
      </span>
    </li>
  ))}
</ul>


                        {(link.name === 'Watches' ||
                          link.name === 'NEW' ||
                          link.name === 'SMART WATCHES' ||
                          link.name === 'Gifts') && (
                          <div className="col-span-1">
                            <img
                              src={`watches${
                                link.name === 'NEW'
                                  ? 1
                                  : link.name === 'Watches'
                                  ? 2
                                  : link.name === 'SMART WATCHES'
                                  ? 3
                                  : 4
                              }.png`}
                              alt="Watches Preview"
                              className="w-60 h-60 rounded"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Slider Section */}
      <CustomSlider />
      <Shop />
    </>
  );
}
