import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MapPin, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);
  
  const rotatingTexts = [
    "Fuel your midnight grind",
    "Comfort food, delivered fast",
    "Late-night cravings solved"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 py-32 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center rounded-full border border-border bg-background/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-primary-foreground mb-6">
            <Zap className="mr-2 h-4 w-4 text-secondary" />
            Now serving across 50+ college campuses
          </div>
          
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-6">
            <span className="block">
              {rotatingTexts[currentText]}
            </span>
            <span className="text-accent-gradient">— hot meals, lightning fast.</span>
          </h1>
          
          <p className="mx-auto max-w-[700px] text-lg text-primary-foreground/80 md:text-xl mb-8">
            Student-first food delivery platform. Order comfort food from campus kitchens and get it delivered to your dorm in under 15 minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/menu">
              <Button variant="hero" size="xl" className="group">
                Order Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/menu">
              <Button variant="outline" size="xl" className="bg-background/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-background/20">
                Explore Menu
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 text-secondary mb-2" />
              <div className="text-2xl font-bold text-primary-foreground">15 min</div>
              <div className="text-sm text-primary-foreground/70">Average delivery</div>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-secondary mb-2" />
              <div className="text-2xl font-bold text-primary-foreground">50+</div>
              <div className="text-sm text-primary-foreground/70">Campus locations</div>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="h-8 w-8 text-secondary mb-2" />
              <div className="text-2xl font-bold text-primary-foreground">24/7</div>
              <div className="text-sm text-primary-foreground/70">Always open</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
}