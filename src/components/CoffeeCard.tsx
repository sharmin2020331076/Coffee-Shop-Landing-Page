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
    <div className="relative bg-white/50 rounded-4xl pt-20 pb-14 px-4 w-full sm:w-72 mx-auto shadow-2xl">
      {/* Overlapping Image */}
      <img
        src={imageUrl}
         className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${imageSize} h-auto overflow-visible hover:scale-100 transition"
      />

      {/* Card Content */}
      <h3 className="text-lg font-sans font-bold text-center text-coffee mt-6">{title}</h3>
      <p className="text-sm text-center text-coffee mt-2">{description}</p>

      {/* Toggleable PNG Icons */}
      {iconUrl && iconUrl.length > 0 && (
        <div className="flex justify-center gap-4 mt-4">
          {iconUrl.map((iconPair, i) => (
            <button
              key={i}
              onClick={() => toggleIcon(i)}
              className="flex items-center justify-center hover:scale-120 transition"
            >
              <div className="flex items-center justify-center bg-white/50 rounded-xl shadow-2xl w-10 h-10 border-2 border-coffee">
                <img
                src={activeIcons[i] ? iconPair.active : iconPair.default}
                alt="icon-${i}"
                className="w-6 h-6 cursor-pointer"
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
    <div className="relative bg-white/50 rounded-2xl pt-9 lg:pt-14 md:pt-11 pb-4 w-full shadow-2xl">
      {/* Overlapping Image */}
      <img
        src={imageUrl}
         className="absolute w-25 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-visible hover:scale-100 transition"
      />

      {/* Card Content */}
      <h3 className="text-[12px] md:text-xs font-sans font-bold text-center text-coffee">{title}</h3>
      <p className="text-[10px] md:text-xs text-center text-coffee mt-2">{description}</p>

      {/* Toggleable PNG Icons */}
      {iconUrl && iconUrl.length > 0 && (
        <div className="flex justify-center gap-4 mt-4">
          {iconUrl.map((iconPair, i) => (
            <button
              key={i}
              onClick={() => toggleIcon(i)}
              className="flex items-center justify-center hover:scale-120 transition"
            >
              <div className="flex items-center justify-center bg-white/50 rounded-xl shadow-2xl md:w-8 w-6 h-5 md:h-7 border-1 md:border-2 border-coffee">
                <img
                src={activeIcons[i] ? iconPair.active : iconPair.default}
                alt="icon-${i}"
                className="w-2 h-2 md:w-4 md:h-4 cursor-pointer"
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