
import { Link } from "react-router-dom";
import { Leaf, Home, Bed, ChefHat } from "lucide-react";
import PlantShowcase from "../components/PlantShowcase";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Leaf className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Yon and Kaia Plants
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Yon and Kaia plants 
            Plants (yon and kaia)
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/living-room" 
              className="flex items-center gap-3 bg-card/70 backdrop-blur-sm border border-border/50 px-8 py-4 rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              Living Room
            </Link>
            <Link 
              to="/bedroom" 
              className="flex items-center gap-3 bg-card/70 backdrop-blur-sm border border-border/50 px-8 py-4 rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
            >
              <Bed className="w-5 h-5" />
              Bedroom
            </Link>
            <Link 
              to="/kitchen" 
              className="flex items-center gap-3 bg-card/70 backdrop-blur-sm border border-border/50 px-8 py-4 rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
            >
              <ChefHat className="w-5 h-5" />
              Kitchen
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Plants Showcase */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Plants</h2>
          <PlantShowcase />
        </div>
      </section>
    </div>
  );
};

export default Index;
