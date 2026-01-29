import { useState } from "react";

interface CoffeeCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  iconUrl?:{default:string,active:string}[];
}

export function CoffeeCard({
  title,description,price,imageUrl,iconUrl
}: CoffeeCardProps) {
  
  // Track toggled state for each icon
  const [activeIcons, setActiveIcons] = useState<boolean[]>(
    iconUrl?.map(() => false) || []
  );

  const toggleIcon = (index: number) => {
    setActiveIcons((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

  return (
    <div className="relative bg-white/50 rounded-4xl pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-14 px-4 w-full max-w-[280px] sm:max-w-xs md:max-w-sm mx-auto shadow-2xl transition-all duration-300">
      {/* Overlapping Image */}
      <img
        src={imageUrl}
         className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-40 md:w-48 lg:w-56 h-auto overflow-visible hover:scale-110 transition duration-500 ease-in-out"
      />

      {/* Card Content */}
      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-sans font-bold text-center text-coffee mt-6 sm:mt-8">{title}</h3>
      <p className="text-xs sm:text-sm md:text-base text-center text-coffee mt-2">{description}</p>

      {/* Toggleable PNG Icons */}
      {iconUrl && iconUrl.length > 0 && (
        <div className="flex justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
          {iconUrl.map((iconPair, i) => (
            <button
              key={i}
              onClick={() => toggleIcon(i)}
              className="flex items-center justify-center hover:scale-110 transition"
            >
              <div className="flex items-center justify-center bg-white/50 rounded-xl shadow-2xl w-8 h-8 sm:w-10 sm:h-10 border-2 border-coffee">
                <img
                src={activeIcons[i] ? iconPair.active : iconPair.default}
                alt={`icon-${i}`}
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 cursor-pointer"
              />
              </div>
            </button>
          ))}
        </div>
      )}




      {/* Bottom Badge */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <span className="bg-coffee text-white text-xs sm:text-sm md:text-base px-4 py-1.5 rounded-xl shadow-md whitespace-nowrap">
          {price}
        </span>
      </div>
    </div>
  );
}






export function CoffeeCard2({
  title,description,price,imageUrl ,iconUrl// default size
}: CoffeeCardProps) {
  
  // Track toggled state for each icon
  const [activeIcons, setActiveIcons] = useState<boolean[]>(
    iconUrl?.map(() => false) || []
  );

  const toggleIcon = (index: number) => {
    setActiveIcons((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

  return (
    <div className="relative bg-white/50 rounded-2xl pt-7 sm:pt-9 md:pt-11 lg:pt-14 pb-3 sm:pb-4 w-full shadow-2xl">
      {/* Overlapping Image */}
      <img
        src={imageUrl}
         className="absolute w-28 sm:w-32 md:w-36 lg:w-44 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-visible hover:scale-110 transition"
      />

      {/* Card Content */}
      <h3 className="text-[11px] sm:text-[12px] md:text-xs lg:text-xs font-sans font-bold text-center text-coffee">{title}</h3>
      <p className="text-[9px] sm:text-[10px] md:text-xs text-center text-coffee mt-1 sm:mt-2">{description}</p>

      {/* Toggleable PNG Icons */}
      {iconUrl && iconUrl.length > 0 && (
        <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mt-2 sm:mt-3 md:mt-4">
          {iconUrl.map((iconPair, i) => (
            <button
              key={i}
              onClick={() => toggleIcon(i)}
              className="flex items-center justify-center hover:scale-110 transition"
            >
              <div className="flex items-center justify-center bg-white/50 rounded-xl shadow-2xl w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-7 lg:w-8 lg:h-8 border-1 sm:border-2 border-coffee">
                <img
                src={activeIcons[i] ? iconPair.active : iconPair.default}
                alt="icon-${i}"
                className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 cursor-pointer"
              />
              </div>
            </button>
          ))}
        </div>
      )}




      {/* Bottom Badge */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <span className="bg-coffee text-white text-xs sm:text-sm px-3 py-1 rounded-xl shadow-md">
          {price}
        </span>
      </div>
    </div>
  );
}