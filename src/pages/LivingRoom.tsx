
import Navigation from "../components/Navigation";
import PlantCard from "../components/PlantCard";
import { Home } from "lucide-react";

const LivingRoom = () => {
  const livingRoomPlants = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      image: "/lovable-uploads/54ef53eb-391b-4585-a755-839e0796347b.png",
      description: "The Swiss Cheese Plant is a stunning centerpiece with its iconic split leaves. This tropical beauty thrives in bright, indirect light and adds a bold architectural element to any living space. Native to Central America, it's known for its dramatic fenestrations that develop as the plant matures. With proper care, this magnificent plant can grow quite large, making it a true statement piece that transforms any room into a tropical paradise."
    },
    {
      id: 2,
      name: "Fiddle Leaf Fig",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&h=600&fit=crop&crop=center",
      description: "A statement plant with large, glossy leaves that command attention. This tree requires consistent watering and bright, filtered light. Originally from western Africa, it has become a modern interior design staple, bringing elegance and height to living rooms worldwide. Its violin-shaped leaves create dramatic shadows and add architectural interest to any space, making it a favorite among interior designers."
    },
    {
      id: 3,
      name: "Bird of Paradise",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=600&fit=crop&crop=center",
      description: "With its paddle-shaped leaves and tropical appearance, this plant brings paradise indoors. It loves bright light and regular watering, rewarding proper care with impressive size and occasional orange and blue flowers. A true conversation starter from South Africa. The large, banana-like leaves create a dramatic tropical atmosphere and can grow quite tall, making it perfect for corners that need a bold green statement."
    },
    {
      id: 4,
      name: "Rubber Plant",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=600&fit=crop&crop=center",
      description: "Known for its thick, glossy leaves and tree-like growth, this hardy plant is perfect for beginners. It adapts well to various light conditions and adds a classic, timeless look to any room. Originally from India, it's been a houseplant favorite for generations. The deep green, waxy leaves reflect light beautifully and the plant can be pruned to maintain your desired size and shape."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Home className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Living Room Collection</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The heart of the home deserves the most spectacular plants. These statement pieces create a lush, welcoming atmosphere.
          </p>
        </div>

        <div className="space-y-12">
          {livingRoomPlants.map((plant) => (
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

export default LivingRoom;
