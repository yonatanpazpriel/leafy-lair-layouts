
import { useState } from "react";

interface PlantCardProps {
  name: string;
  image: string;
  description: string;
}

const PlantCard = ({ name, image, description }: PlantCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full h-96 flex items-center justify-center overflow-hidden rounded-xl transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Plant Image */}
      <div className={`transition-all duration-500 ${
        isHovered ? 'scale-90' : 'scale-100'
      }`}>
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-contain max-h-80"
        />
      </div>
      
      {/* Text Content - appears on hover */}
      <div className={`absolute inset-0 flex items-center transition-all duration-500 ${
        isHovered 
          ? 'opacity-100' 
          : 'opacity-0 pointer-events-none'
      }`}>
        {/* Left side text */}
        <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 max-w-xs transition-all duration-500 ${
          isHovered 
            ? 'translate-x-0 opacity-100' 
            : '-translate-x-8 opacity-0'
        }`}>
          <h3 className="text-2xl font-semibold mb-4 text-primary">{name}</h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {description.split(' ').slice(0, 25).join(' ')}...
          </p>
        </div>
        
        {/* Right side text */}
        <div className={`absolute right-4 top-1/2 transform -translate-y-1/2 max-w-xs transition-all duration-500 ${
          isHovered 
            ? 'translate-x-0 opacity-100' 
            : 'translate-x-8 opacity-0'
        }`}>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {description.split(' ').slice(25).join(' ')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
