import React, { useEffect, useState } from 'react';

const slides = [
  {
    image: 'sliderwatch3.png',
    titleTop: 'HUELOT',
    centertitle: 'BY',
    subtitle: 'A GENEVE',
    headlineTop: 'BIG BANG',
    headlineBottom: 'KING POWER',
    buttonText: 'SHOP NOW',
    buttonLink: '#',
  },
  {
    image: 'sliderwatch2.png',
    titleTop: 'BOYADKA',
    centertitle: '',
    subtitle: '',
    headlineTop: 'CAR RIM',
    headlineBottom: 'HUB DESIGN',
    buttonText: 'SHOP NOW',
    buttonLink: '#',
  },
  {
    image: 'sliderwatch1.png',
    titleTop: 'ROLEX',
    centertitle: '',
    subtitle: 'OYSTER PERPETUAL',
    headlineTop: 'MILGAUSS',
    headlineBottom: '',
    buttonText: 'SHOP NOW',
    buttonLink: '#',
  },
];

export default function SlidingSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-screen h-[700px] overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="w-screen h-[700px] flex-shrink-0 relative">
            <img src={slide.image} alt={`slide-${i}`} className="w-full h-full object-cover" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-end pr-20">
              <div className="text-white text-right max-w-md space-y-4">
                <h2 className="text-5xl font-extrabold">{slide.titleTop}</h2>

                {slide.centertitle && (
                  <p className="text-2xl tracking-widest uppercase text-center mx-auto w-fit">
                    {slide.centertitle}
                  </p>
                )}

                {slide.subtitle && (
                  <p className="text-3xl tracking-widest uppercase">{slide.subtitle}</p>
                )}

                <div className="text-6xl leading-tight font-light">
                  {slide.headlineTop && (
                    <p>
                      <span className="font-normal">
                        {slide.headlineTop.split(' ')[0]}{' '}
                      </span>
                      <span className="font-bold">
                        {slide.headlineTop.split(' ')[1] || ''}
                      </span>
                    </p>
                  )}

                  {slide.headlineBottom && (
                    <p>
                      <span className="font-bold">
                        {slide.headlineBottom.split(' ')[0]}{' '}
                      </span>
                      <span className="font-normal">
                        {slide.headlineBottom.split(' ')[1] || ''}
                      </span>
                    </p>
                  )}
                </div>

                {/* Animated Button */}
                <button
                  className="relative cursor-pointer py-4  px-8 text-start font-barlow inline-flex justify-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4
                   focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden mt-6 mx-auto"
                >
                  <span className="relative z-20 mx-10">{slide.buttonText}</span>

                  <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>

                  <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
                  <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
                  <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
                  <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>



  );
}
