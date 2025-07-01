
import Navigation from "../components/Navigation";
import InteractivePlantImage from "../components/InteractivePlantImage";
import { Home } from "lucide-react";

const LivingRoom = () => {
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

        <div className="flex justify-center">
          <InteractivePlantImage />
        </div>
      </div>
    </div>
  );
};

export default LivingRoom;
