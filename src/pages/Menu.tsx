import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Star, Plus, Filter, Leaf, ChefHat } from "lucide-react";
import biryaniImage from "@/assets/biryani.jpg";
import snacksImage from "@/assets/snacks.jpg";
import drinksImage from "@/assets/drinks.jpg";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  isVeg: boolean;
  category: string;
  isPopular?: boolean;
  preparationTime: string;
}

const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Midnight Biryani Special",
    description: "Aromatic basmati rice with tender chicken, perfectly spiced",
    price: 149,
    originalPrice: 199,
    image: biryaniImage,
    rating: 4.8,
    isVeg: false,
    category: "tiffins",
    isPopular: true,
    preparationTime: "20-25 min"
  },
  {
    id: "2",
    name: "Veg Biryani Delight",
    description: "Fragrant vegetable biryani with raita and pickle",
    price: 129,
    originalPrice: 169,
    image: biryaniImage,
    rating: 4.6,
    isVeg: true,
    category: "tiffins",
    preparationTime: "15-20 min"
  },
  {
    id: "3",
    name: "Crispy Samosa (4 pcs)",
    description: "Golden, crispy samosas with mint and tamarind chutney",
    price: 49,
    originalPrice: 70,
    image: snacksImage,
    rating: 4.7,
    isVeg: true,
    category: "snacks",
    isPopular: true,
    preparationTime: "10-15 min"
  },
  {
    id: "4",
    name: "Mixed Pakora Plate",
    description: "Assorted vegetable pakoras with spicy chutney",
    price: 69,
    image: snacksImage,
    rating: 4.5,
    isVeg: true,
    category: "snacks",
    preparationTime: "15-20 min"
  },
  {
    id: "5",
    name: "Midnight Chai Special",
    description: "Strong, aromatic tea blend perfect for study sessions",
    price: 29,
    image: drinksImage,
    rating: 4.9,
    isVeg: true,
    category: "drinks",
    isPopular: true,
    preparationTime: "5-10 min"
  },
  {
    id: "6",
    name: "Cold Coffee Boost",
    description: "Chilled coffee with ice cream for energy boost",
    price: 79,
    image: drinksImage,
    rating: 4.6,
    isVeg: true,
    category: "drinks",
    preparationTime: "5-10 min"
  },
  {
    id: "7",
    name: "Study Fuel Combo",
    description: "Biryani + Chai + Samosa - perfect study companion",
    price: 179,
    originalPrice: 249,
    image: biryaniImage,
    rating: 4.8,
    isVeg: false,
    category: "combos",
    isPopular: true,
    preparationTime: "20-25 min"
  },
  {
    id: "8",
    name: "Midnight Munchies",
    description: "Samosa, pakora, chai and sweet lassi combo",
    price: 129,
    originalPrice: 180,
    image: snacksImage,
    rating: 4.5,
    isVeg: true,
    category: "combos",
    preparationTime: "15-20 min"
  }
];

const categories = [
  { id: "all", label: "All Items", icon: ChefHat },
  { id: "tiffins", label: "Tiffins", icon: ChefHat },
  { id: "snacks", label: "Snacks", icon: ChefHat },
  { id: "drinks", label: "Drinks", icon: ChefHat },
  { id: "combos", label: "Combos", icon: ChefHat },
];

export default function Menu() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filterVeg, setFilterVeg] = useState(false);
  const [cart, setCart] = useState<Record<string, number>>({});

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesVeg = !filterVeg || item.isVeg;
    
    return matchesSearch && matchesCategory && matchesVeg;
  });

  const addToCart = (itemId: string) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tighter mb-4">
            <span className="text-gradient">Our Menu</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delicious comfort food crafted for students, available 24/7 with lightning-fast delivery
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for your favorite food..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-4">
            <Button
              variant={filterVeg ? "cta" : "outline"}
              onClick={() => setFilterVeg(!filterVeg)}
              className="gap-2"
            >
              <Leaf className="h-4 w-4" />
              Veg Only
            </Button>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <TabsList className="grid w-full grid-cols-5 lg:w-fit lg:grid-cols-5">
            {categories.map(category => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card key={item.id} className="card-hover overflow-hidden border-0 shadow-md bg-gradient-card">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      {item.isPopular && (
                        <Badge variant="secondary" className="font-semibold">
                          Popular
                        </Badge>
                      )}
                      <Badge variant={item.isVeg ? "default" : "destructive"} className="text-xs">
                        {item.isVeg ? "VEG" : "NON-VEG"}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <div className="flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                        <Star className="h-3 w-3 fill-secondary text-secondary" />
                        <span>{item.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-primary">₹{item.price}</span>
                        {item.originalPrice && (
                          <>
                            <span className="text-sm text-muted-foreground line-through">₹{item.originalPrice}</span>
                            <Badge variant="secondary" className="text-xs">
                              {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                            </Badge>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{item.preparationTime}</span>
                      <Button
                        onClick={() => addToCart(item.id)}
                        variant="cta"
                        size="sm"
                        className="group"
                      >
                        <Plus className="h-4 w-4 mr-1 transition-transform group-hover:rotate-90" />
                        Add
                        {cart[item.id] && (
                          <Badge variant="secondary" className="ml-2">
                            {cart[item.id]}
                          </Badge>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No items found matching your search.</p>
          </div>
        )}
      </div>

      {/* Floating Cart Button */}
      {getTotalItems() > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button variant="hero" size="lg" className="shadow-lg">
            View Cart ({getTotalItems()})
          </Button>
        </div>
      )}
    </div>
  );
}