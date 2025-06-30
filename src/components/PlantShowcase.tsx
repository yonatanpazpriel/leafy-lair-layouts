
const PlantShowcase = () => {
  const featuredPlants = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=400&fit=crop&crop=center",
      room: "Living Room"
    },
    {
      id: 2,
      name: "Fiddle Leaf Fig",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400&h=400&fit=crop&crop=center",
      room: "Bedroom"
    },
    {
      id: 3,
      name: "Pothos Golden",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop&crop=center",
      room: "Kitchen"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {featuredPlants.map((plant) => (
        <div key={plant.id} className="plant-card group">
          <div className="aspect-square overflow-hidden">
            <img 
              src={plant.image} 
              alt={plant.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{plant.name}</h3>
            <p className="text-muted-foreground">{plant.room}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlantShowcase;
