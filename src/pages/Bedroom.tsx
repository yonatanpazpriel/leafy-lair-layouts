
import Navigation from "../components/Navigation";
import PlantCard from "../components/PlantCard";
import { Bed } from "lucide-react";

const Bedroom = () => {
  const bedroomPlants = [
    {
      id: 1,
      name: "Snake Plant",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=600&fit=crop&crop=center",
      description: "Perfect for the bedroom, this air-purifying plant releases oxygen at night. Its striking upright leaves with yellow edges require minimal care and can tolerate low light conditions. Native to West Africa, it's known for improving sleep quality and air circulation."
    },
    {
      id: 2,
      name: "Peace Lily",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&h=600&fit=crop&crop=center",
      description: "Elegant white blooms and glossy green leaves make this a serene addition to any bedroom. It thrives in low to medium light and helps purify the air. This tropical plant from the Americas signals when it needs water by gently drooping its leaves."
    },
    {
      id: 3,
      name: "ZZ Plant",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=600&fit=crop&crop=center",
      description: "With its waxy, dark green leaves and tolerance for neglect, this plant is ideal for busy lifestyles. It can survive in low light and irregular watering, making it perfect for bedrooms. From eastern Africa, it's known for its resilience and modern appearance."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Bed className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Bedroom Sanctuary</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create a peaceful retreat with plants that purify the air and promote restful sleep. These gentle companions thrive in low light.
          </p>
        </div>

        <div className="space-y-8">
          {bedroomPlants.map((plant) => (
            <PlantCard 
              key={plant.id}
              name={plant.name}
              image={plant.image}
              description={plant.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bedroom;
