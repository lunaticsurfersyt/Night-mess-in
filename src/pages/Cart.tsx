import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, Tag, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import biryaniImage from "@/assets/biryani.jpg";
import snacksImage from "@/assets/snacks.jpg";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  isVeg: boolean;
}

const mockCartItems: CartItem[] = [
  {
    id: "1",
    name: "Midnight Biryani Special",
    price: 149,
    quantity: 2,
    image: biryaniImage,
    isVeg: false
  },
  {
    id: "2",
    name: "Crispy Samosa (4 pcs)",
    price: 49,
    quantity: 1,
    image: snacksImage,
    isVeg: true
  }
];

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev => 
        prev.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "student20") {
      setAppliedCoupon("STUDENT20");
      setCouponCode("");
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = appliedCoupon ? Math.round(subtotal * 0.2) : 0;
  const deliveryFee = subtotal > 99 ? 0 : 25;
  const total = subtotal - discount + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">Add some delicious items to get started!</p>
          <Link to="/menu">
            <Button variant="cta" size="lg">
              Browse Menu
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tighter mb-2">
            <span className="text-gradient">My Cart</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Your midnight cravings are just a click away — comfort, warmth, and flavor delivered to your door.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="card-hover border-0 shadow-md bg-gradient-card">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold">{item.name}</h3>
                          <Badge variant={item.isVeg ? "default" : "destructive"} className="text-xs mt-1">
                            {item.isVeg ? "VEG" : "NON-VEG"}
                          </Badge>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-primary">₹{item.price}</span>
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Delivery Info */}
            <Card className="border-0 shadow-md bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Delivery Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2">Hostel Block A, Room 204</p>
                <p className="text-sm text-muted-foreground mb-3">IIT Delhi, New Delhi</p>
                <div className="flex items-center gap-2 text-sm text-success">
                  <Clock className="h-4 w-4" />
                  <span>Delivery in 15-20 mins</span>
                </div>
              </CardContent>
            </Card>

            {/* Coupon */}
            <Card className="border-0 shadow-md bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Tag className="h-5 w-5 text-primary" />
                  Apply Coupon
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <Button onClick={applyCoupon} variant="outline">
                    Apply
                  </Button>
                </div>
                {appliedCoupon && (
                  <div className="mt-3 p-2 bg-success/10 border border-success/20 rounded-lg">
                    <p className="text-sm text-success font-medium">
                      {appliedCoupon} applied! 20% off
                    </p>
                  </div>
                )}
                <p className="text-xs text-muted-foreground mt-2">
                  Try: STUDENT20 for 20% off
                </p>
              </CardContent>
            </Card>

            {/* Bill Summary */}
            <Card className="border-0 shadow-md bg-gradient-card">
              <CardHeader>
                <CardTitle>Bill Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-success">
                    <span>Discount ({appliedCoupon})</span>
                    <span>-₹{discount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span className={deliveryFee === 0 ? "text-success" : ""}>
                    {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                  </span>
                </div>
                {subtotal < 99 && (
                  <p className="text-xs text-muted-foreground">
                    Add ₹{99 - subtotal} more for free delivery
                  </p>
                )}
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">₹{total}</span>
                </div>
              </CardContent>
            </Card>

            {/* Checkout Button */}
            <Button variant="cta" size="lg" className="w-full group">
              Proceed to Checkout
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}