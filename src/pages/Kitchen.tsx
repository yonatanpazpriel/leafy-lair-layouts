
import Navigation from "../components/Navigation";
import PlantCard from "../components/PlantCard";
import { ChefHat } from "lucide-react";

const Kitchen = () => {
  const kitchenPlants = [
    {
      id: 1,
      name: "Pothos Golden",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=600&fit=crop&crop=center",
      description: "A cascading beauty that thrives in the humid kitchen environment. Its heart-shaped leaves with golden variegation trail elegantly from shelves or hanging baskets. This hardy vine from French Polynesia tolerates various light conditions and helps filter kitchen air."
    },
    {
      id: 2,
      name: "Spider Plant",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&h=600&fit=crop&crop=center",
      description: "Perfect for kitchen counters or hanging above the sink, this plant produces charming baby plantlets called 'spiderettes'. It loves the humidity from cooking and helps remove formaldehyde from the air. Originally from South Africa, it's incredibly easy to propagate."
    },
    {
      id: 3,
      name: "Herbs Collection",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=600&fit=crop&crop=center",
      description: "Fresh basil, mint, and rosemary bring life and flavor to your culinary space. These aromatic herbs thrive on a sunny kitchen windowsill and provide fresh ingredients for cooking. Nothing beats the satisfaction of seasoning your meals with home-grown herbs."
    },
    {
      id: 4,
      name: "Aloe Vera",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=600&fit=crop&crop=center",
      description: "A practical and beautiful succulent that serves as a natural first-aid kit. Its gel-filled leaves provide soothing relief for minor burns and cuts. This desert plant from the Arabian Peninsula requires minimal water and thrives in bright kitchen windows."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <ChefHat className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kitchen Garden</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bring life to your culinary space with plants that love humidity and bright light. From air purifiers to fresh herbs for cooking.
          </p>
        </div>

        <div className="space-y-8">
          {kitchenPlants.map((plant) => (
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

export default Kitchen;
