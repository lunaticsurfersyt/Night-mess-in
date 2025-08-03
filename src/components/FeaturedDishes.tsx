import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Star, Plus } from "lucide-react";
import biryaniImage from "@/assets/biryani.jpg";
import snacksImage from "@/assets/snacks.jpg";
import drinksImage from "@/assets/drinks.jpg";

const featuredDishes = [
  {
    id: 1,
    name: "Midnight Biryani Special",
    description: "Aromatic basmati rice with tender chicken, perfectly spiced for late-night cravings",
    price: 149,
    originalPrice: 199,
    image: biryaniImage,
    rating: 4.8,
    isVeg: false,
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "Crispy Snack Combo",
    description: "Golden samosas, pakoras, and chutneys - perfect study break treats",
    price: 89,
    originalPrice: 120,
    image: snacksImage,
    rating: 4.6,
    isVeg: true,
    badge: "Student Favorite"
  },
  {
    id: 3,
    name: "Power Study Drinks",
    description: "Fresh chai, coffee, and energy drinks to fuel your all-nighters",
    price: 49,
    originalPrice: 70,
    image: drinksImage,
    rating: 4.7,
    isVeg: true,
    badge: "Energy Boost"
  }
];

export default function FeaturedDishes() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredDishes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredDishes.length) % featuredDishes.length);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            <span className="text-gradient">Midnight Favorites</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Our most loved dishes, crafted specially for students who burn the midnight oil
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredDishes.map((dish) => (
                <div key={dish.id} className="w-full flex-shrink-0">
                  <Card className="border-0 shadow-lg bg-gradient-card">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative h-64 md:h-80">
                          <img
                            src={dish.image}
                            alt={dish.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge variant="secondary" className="font-semibold">
                              {dish.badge}
                            </Badge>
                          </div>
                          <div className="absolute top-4 right-4">
                            <Badge variant={dish.isVeg ? "default" : "destructive"} className="text-xs">
                              {dish.isVeg ? "VEG" : "NON-VEG"}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="p-8 flex flex-col justify-center">
                          <div className="flex items-center gap-2 mb-3">
                            <Star className="h-4 w-4 fill-secondary text-secondary" />
                            <span className="text-sm font-medium">{dish.rating}</span>
                            <span className="text-xs text-muted-foreground">(200+ reviews)</span>
                          </div>
                          
                          <h3 className="text-2xl font-bold mb-3">{dish.name}</h3>
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {dish.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl font-bold text-primary">₹{dish.price}</span>
                              <span className="text-lg text-muted-foreground line-through">₹{dish.originalPrice}</span>
                              <Badge variant="secondary" className="text-xs">
                                {Math.round(((dish.originalPrice - dish.price) / dish.originalPrice) * 100)}% OFF
                              </Badge>
                            </div>
                            
                            <Button variant="cta" className="group">
                              <Plus className="h-4 w-4 mr-2 transition-transform group-hover:rotate-90" />
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex gap-2 items-center">
              {featuredDishes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}