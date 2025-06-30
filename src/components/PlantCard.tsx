
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
      className="plant-card group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4 text-primary">{name}</h3>
          
          <div className={`transition-all duration-500 ${
            isHovered 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-4 md:opacity-0'
          }`}>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
          
          {!isHovered && (
            <div className="hidden md:block text-sm text-muted-foreground/60 italic">
              Hover to learn more about this plant...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
