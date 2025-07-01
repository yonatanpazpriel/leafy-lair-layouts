
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
        left: "38%",
        top: "22%",
        width: "24%",
        height: "55%"
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
        left: "18%",
        top: "18%",
        width: "16%",
        height: "62%"
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
        left: "66%",
        top: "28%",
        width: "20%",
        height: "48%"
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
        left: "8%",
        top: "45%",
        width: "12%",
        height: "35%"
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
        left: "84%",
        top: "48%",
        width: "13%",
        height: "32%"
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
        className="w-full h-auto object-contain transition-all duration-500"
      />
      
      {/* Dark overlay for non-hovered areas */}
      {hoveredPlant && (
        <>
          {/* Full dark overlay */}
          <div className="absolute inset-0 bg-black/60 transition-opacity duration-500 pointer-events-none" />
          
          {/* Highlighted region cutout */}
          {plantRegions.map((plant) => (
            plant.id === hoveredPlant && (
              <div
                key={`highlight-${plant.id}`}
                className="absolute bg-transparent transition-all duration-500 pointer-events-none"
                style={{
                  left: plant.bounds.left,
                  top: plant.bounds.top,
                  width: plant.bounds.width,
                  height: plant.bounds.height,
                  boxShadow: `0 0 0 9999px rgba(0, 0, 0, 0.6)`,
                  transform: 'scale(1.05)',
                  zIndex: 5
                }}
              />
            )
          ))}
        </>
      )}
      
      {/* Interactive Plant Regions */}
      {plantRegions.map((plant) => (
        <div
          key={plant.id}
          className="absolute cursor-pointer transition-all duration-500 z-10"
          style={{
            left: plant.bounds.left,
            top: plant.bounds.top,
            width: plant.bounds.width,
            height: plant.bounds.height,
            transform: hoveredPlant === plant.id ? 'scale(1.05)' : 'scale(1)',
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
            className="absolute bg-background/95 backdrop-blur-sm border border-border/50 rounded-xl p-6 max-w-xs shadow-2xl transition-all duration-500 animate-fade-in z-20"
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
