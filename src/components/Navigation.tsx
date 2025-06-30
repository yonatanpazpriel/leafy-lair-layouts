
import { Link, useLocation } from "react-router-dom";
import { Leaf, Home, Bed, ChefHat, Grid3X3 } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
            <Leaf className="w-8 h-8" />
            PlantFolio
          </Link>
          
          <div className="flex items-center gap-8">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'text-primary' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/all-plants" 
              className={`nav-link flex items-center gap-2 ${isActive('/all-plants') ? 'text-primary' : ''}`}
            >
              <Grid3X3 className="w-4 h-4" />
              All Plants
            </Link>
            <Link 
              to="/living-room" 
              className={`nav-link flex items-center gap-2 ${isActive('/living-room') ? 'text-primary' : ''}`}
            >
              <Home className="w-4 h-4" />
              Living Room
            </Link>
            <Link 
              to="/bedroom" 
              className={`nav-link flex items-center gap-2 ${isActive('/bedroom') ? 'text-primary' : ''}`}
            >
              <Bed className="w-4 h-4" />
              Bedroom
            </Link>
            <Link 
              to="/kitchen" 
              className={`nav-link flex items-center gap-2 ${isActive('/kitchen') ? 'text-primary' : ''}`}
            >
              <ChefHat className="w-4 h-4" />
              Kitchen
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
