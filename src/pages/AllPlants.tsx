
import Navigation from "../components/Navigation";

const AllPlants = () => {
  const allPlants = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=200&h=200&fit=crop&crop=center",
      room: "Living Room"
    },
    {
      id: 2,
      name: "Fiddle Leaf Fig",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=200&h=200&fit=crop&crop=center",
      room: "Bedroom"
    },
    {
      id: 3,
      name: "Pothos Golden",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=200&h=200&fit=crop&crop=center",
      room: "Kitchen"
    },
    {
      id: 4,
      name: "Snake Plant",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=200&fit=crop&crop=center",
      room: "Bedroom"
    },
    {
      id: 5,
      name: "Rubber Plant",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=200&h=200&fit=crop&crop=center",
      room: "Living Room"
    },
    {
      id: 6,
      name: "Peace Lily",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=200&h=200&fit=crop&crop=center",
      room: "Kitchen"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">All Plants</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allPlants.map((plant) => (
            <div key={plant.id} className="plant-card group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={plant.image} 
                  alt={plant.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{plant.name}</h3>
                <p className="text-sm text-muted-foreground">{plant.room}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPlants;
