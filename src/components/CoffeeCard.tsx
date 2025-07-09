import { useState } from "react";

interface CoffeeCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  imageSize?: string;
  iconUrl?:{default:string,active:string}[];
  onIconClick?:(index:number, iconsrc:string)=>void; // Optional Tailwind width like 'w-20', 'w-32'
}

export function CoffeeCard({
  title,description,price,imageUrl,imageSize = "w-24",iconUrl, onIconClick// default size
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
         className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${imageSize} h-auto object-contain"
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
              className="w-8 h-8 flex items-center justify-center hover:scale-110 transition"
            >
              <img
                src={activeIcons[i] ? iconPair.active : iconPair.default}
                alt="icon-${i}"
                className="w-6 h-6"
              />
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