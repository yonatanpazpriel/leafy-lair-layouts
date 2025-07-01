
import { useState } from "react";

interface PlantRegion {
  id: string;
  name: string;
  description: string;
  bounds: {
    left: string;
    top: string;
    width: string;
    height: string;
  };
  textPosition: {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
  };
}

const InteractivePlantImage = () => {
  const [hoveredPlant, setHoveredPlant] = useState<string | null>(null);

  const plantRegions: PlantRegion[] = [
    {
      id: "center-monstera",
      name: "Monstera Deliciosa",
      description: "The Swiss Cheese Plant is a stunning centerpiece with its iconic split leaves. This tropical beauty thrives in bright, indirect light and adds dramatic architectural interest to your living space.",
      bounds: {
        left: "35%",
        top: "25%",
        width: "30%",
        height: "50%"
      },
      textPosition: {
        left: "5%",
        top: "30%"
      }
    },
    {
      id: "left-plant",
      name: "Fiddle Leaf Fig",
      description: "A statement plant with large, glossy leaves that command attention. This elegant tree brings modern sophistication to any living room corner.",
      bounds: {
        left: "15%",
        top: "20%",
        width: "20%",
        height: "60%"
      },
      textPosition: {
        right: "5%",
        top: "25%"
      }
    },
    {
      id: "right-plant",
      name: "Bird of Paradise",
      description: "With its paddle-shaped leaves and tropical appearance, this plant brings paradise indoors. A true conversation starter that loves bright light.",
      bounds: {
        left: "65%",
        top: "30%",
        width: "25%",
        height: "45%"
      },
      textPosition: {
        left: "5%",
        bottom: "20%"
      }
    },
    {
      id: "small-left",
      name: "Snake Plant",
      description: "Hardy and architectural, this low-maintenance beauty purifies air while adding vertical interest with its striking upright leaves.",
      bounds: {
        left: "5%",
        top: "40%",
        width: "15%",
        height: "40%"
      },
      textPosition: {
        right: "10%",
        bottom: "30%"
      }
    },
    {
      id: "small-right",
      name: "Rubber Plant",
      description: "Known for its thick, glossy leaves, this classic houseplant adapts well to various conditions and adds timeless elegance.",
      bounds: {
        left: "85%",
        top: "45%",
        width: "12%",
        height: "35%"
      },
      textPosition: {
        left: "10%",
        top: "45%"
      }
    }
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Image */}
      <img 
        src="/lovable-uploads/b58fa7ba-714d-4ee7-ad9b-59f80d42244c.png" 
        alt="Living Room Plant Collection"
        className={`w-full h-auto object-contain transition-all duration-500 ${
          hoveredPlant ? 'brightness-50' : 'brightness-100'
        }`}
      />
      
      {/* Overlay Darken Effect */}
      {hoveredPlant && (
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-500" />
      )}
      
      {/* Interactive Plant Regions */}
      {plantRegions.map((plant) => (
        <div
          key={plant.id}
          className="absolute cursor-pointer transition-all duration-300 hover:bg-primary/10"
          style={{
            left: plant.bounds.left,
            top: plant.bounds.top,
            width: plant.bounds.width,
            height: plant.bounds.height,
          }}
          onMouseEnter={() => setHoveredPlant(plant.id)}
          onMouseLeave={() => setHoveredPlant(null)}
        />
      ))}
      
      {/* Text Overlays */}
      {plantRegions.map((plant) => (
        hoveredPlant === plant.id && (
          <div
            key={`text-${plant.id}`}
            className="absolute bg-background/90 backdrop-blur-sm border border-border/50 rounded-xl p-6 max-w-xs shadow-2xl transition-all duration-500 animate-fade-in z-10"
            style={plant.textPosition}
          >
            <h3 className="text-2xl font-bold text-primary mb-3">{plant.name}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {plant.description}
            </p>
          </div>
        )
      ))}
    </div>
  );
};

export default InteractivePlantImage;
