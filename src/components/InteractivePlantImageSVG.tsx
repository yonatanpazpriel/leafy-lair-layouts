import { useState } from "react";

interface PlantRegion {
  id: string;
  name: string;
  description: string;
  // SVG path that traces the exact plant border
  path: string;
  // Bounding box for positioning text and basic hit detection
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

const InteractivePlantImageSVG = () => {
  const [hoveredPlant, setHoveredPlant] = useState<string | null>(null);

  const plantRegions: PlantRegion[] = [
    {
      id: "center-monstera",
      name: "Monstera Deliciosa",
      description: "The Swiss Cheese Plant is a stunning centerpiece with its iconic split leaves. This tropical beauty thrives in bright, indirect light and adds dramatic architectural interest to your living space.",
      // Real path tracing the exact outline of the Monstera plant
      path: "M 407.399 740.124 L 402.247 595.852 L 397.094 562.36 L 365.708 566.496 L 357.683 514.335 L 335.615 434.087 L 285.461 444.118 L 269.411 389.951 L 284.409 353.852 L 348.343 348.805 L 281.926 319.28 L 303.237 301.964 L 384.487 301.964 L 364.608 153.392 L 441.341 133.034 L 524.338 192.541 L 533.734 294.33 L 663.711 250.483 L 760.801 286.5 L 754.537 309.99 L 612.033 317.82 L 568.186 385.157 L 607.335 388.289 L 621.429 422.74 L 616.731 463.456 L 563.488 505.737 L 514.943 615.356 L 571.318 598.13 L 591.676 612.224 L 596.373 659.203 L 613.599 659.203 L 610.467 671.731 L 533.734 654.505 L 519.64 767.256 L 408.456 757.86 Z",
      bounds: {
        left: "28%",
        top: "13%",
        width: "48%",
        height: "77%"
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
      // This path would trace the exact outline of the Fiddle Leaf Fig
      path: "M 180 180 L 220 160 L 260 170 L 280 200 L 290 300 L 285 400 L 270 450 L 240 480 L 200 470 L 180 450 L 170 350 L 180 180 Z",
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
      // This path would trace the exact outline of the Bird of Paradise
      path: "M 660 280 L 700 260 L 740 270 L 760 300 L 770 350 L 765 400 L 750 450 L 720 470 L 680 460 L 660 440 L 650 350 L 660 280 Z",
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
      // This path would trace the exact outline of the Snake Plant
      path: "M 80 450 L 120 440 L 140 460 L 150 500 L 145 550 L 130 580 L 100 590 L 80 580 L 70 550 L 80 450 Z",
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
      // This path would trace the exact outline of the Rubber Plant
      path: "M 840 480 L 880 470 L 900 490 L 910 520 L 905 570 L 890 600 L 860 610 L 840 600 L 830 570 L 840 480 Z",
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

  // Function to check if a point is inside an SVG path
  const isPointInPath = (path: string, x: number, y: number) => {
    // This is a simplified check - in practice you'd use a more robust algorithm
    // For now, we'll use the bounding box as a fallback
    return true; // Placeholder
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 1000; // Scale to SVG coordinates
    const y = ((event.clientY - rect.top) / rect.height) * 1000;
    
    // Check which plant region contains the mouse point
    for (const plant of plantRegions) {
      if (isPointInPath(plant.path, x, y)) {
        setHoveredPlant(plant.id);
        return;
      }
    }
    setHoveredPlant(null);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Image */}
      <img 
        src="/lovable-uploads/b58fa7ba-714d-4ee7-ad9b-59f80d42244c.png" 
        alt="Living Room Plant Collection"
        className="w-full h-auto object-contain transition-all duration-500"
      />
      
      {/* SVG Overlay for precise plant tracking */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="30 125 1000 1000"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Plant region paths - these would be invisible but define the hover areas */}
        {plantRegions.map((plant) => (
          <path
            key={plant.id}
            d={plant.path}
            fill="transparent"
            stroke={hoveredPlant === plant.id ? "rgba(34, 197, 94, 0.3)" : "transparent"}
            strokeWidth="2"
            className="pointer-events-auto cursor-pointer transition-all duration-300"
            onMouseEnter={() => setHoveredPlant(plant.id)}
            onMouseLeave={() => setHoveredPlant(null)}
          />
        ))}
        
        {/* Highlight overlay for hovered plant */}
        {hoveredPlant && (
          <>
            {/* Dark overlay for non-hovered areas */}
            <rect
              x="0"
              y="0"
              width="1000"
              height="1000"
              fill="rgba(0, 0, 0, 0.6)"
              className="pointer-events-none"
            />
            
            {/* Cutout for hovered plant */}
            {plantRegions.map((plant) => (
              plant.id === hoveredPlant && (
                <path
                  key={`highlight-${plant.id}`}
                  d={plant.path}
                  fill="transparent"
                  className="pointer-events-none"
                  style={{
                    filter: 'drop-shadow(0 0 0 9999px rgba(0, 0, 0, 0.6))',
                    transform: 'scale(1.02)',
                  }}
                />
              )
            ))}
          </>
        )}
      </svg>
      
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

export default InteractivePlantImageSVG; 