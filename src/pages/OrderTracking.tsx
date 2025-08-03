import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  MapPin, 
  Clock, 
  Phone, 
  MessageCircle, 
  CheckCircle, 
  Package, 
  Car,
  User,
  Star
} from "lucide-react";

interface OrderStep {
  id: string;
  title: string;
  description: string;
  time: string;
  completed: boolean;
  active: boolean;
}

const mockOrder = {
  orderId: "NM789012",
  estimatedTime: "15-20 mins",
  actualTime: "12 mins",
  status: "out_for_delivery",
  rider: {
    name: "Vikash Kumar",
    phone: "+91 98765 43210",
    rating: 4.9,
    vehicle: "Bike - DL 8C AB 1234"
  },
  restaurant: {
    name: "Night Mess Kitchen - Block A",
    address: "IIT Delhi Campus Kitchen"
  },
  deliveryAddress: {
    name: "Student Hostel",
    address: "Room 204, Block A, IIT Delhi",
    landmark: "Near Main Gate"
  },
  items: [
    { name: "Midnight Biryani Special", quantity: 2, price: 298 },
    { name: "Crispy Samosa (4 pcs)", quantity: 1, price: 49 }
  ],
  total: 347
};

export default function OrderTracking() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [orderSteps, setOrderSteps] = useState<OrderStep[]>([
    {
      id: "confirmed",
      title: "Order Confirmed",
      description: "Your order has been confirmed and sent to the kitchen",
      time: "8:45 PM",
      completed: true,
      active: false
    },
    {
      id: "preparing",
      title: "Preparing Your Food",
      description: "Our chef is preparing your delicious meal",
      time: "8:47 PM",
      completed: true,
      active: false
    },
    {
      id: "ready",
      title: "Order Ready",
      description: "Your food is ready and being packed for delivery",
      time: "8:54 PM",
      completed: true,
      active: false
    },
    {
      id: "pickup",
      title: "Out for Delivery",
      description: "Vikash has picked up your order and is on the way",
      time: "8:56 PM",
      completed: false,
      active: true
    },
    {
      id: "delivered",
      title: "Delivered",
      description: "Enjoy your meal!",
      time: "Est. 9:10 PM",
      completed: false,
      active: false
    }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tighter mb-2">
            <span className="text-gradient">Track Your Order</span>
          </h1>
          <p className="text-muted-foreground">
            Order #{mockOrder.orderId} • Estimated delivery: {mockOrder.estimatedTime}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Progress */}
          <div className="lg:col-span-2 space-y-6">
            {/* Live Status */}
            <Card className="border-0 shadow-md bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-primary animate-pulse" />
                  Live Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                    <span className="font-medium">Out for Delivery</span>
                  </div>
                  <Badge variant="secondary">ETA: 3-5 mins</Badge>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>Current Location: Near Library Gate</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div className="bg-gradient-accent h-2 rounded-full w-4/5 transition-all duration-1000"></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Almost there! Your rider is approaching your delivery location.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Order Timeline */}
            <Card className="border-0 shadow-md bg-gradient-card">
              <CardHeader>
                <CardTitle>Order Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderSteps.map((step, index) => (
                    <div key={step.id} className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          step.completed 
                            ? "bg-success text-success-foreground" 
                            : step.active 
                              ? "bg-primary text-primary-foreground animate-pulse" 
                              : "bg-muted text-muted-foreground"
                        }`}>
                          {step.completed ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : (
                            <div className="w-2 h-2 rounded-full bg-current"></div>
                          )}
                        </div>
                        {index < orderSteps.length - 1 && (
                          <div className={`w-0.5 h-8 mt-2 ${
                            step.completed ? "bg-success" : "bg-border"
                          }`}></div>
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className={`font-medium ${step.active ? "text-primary" : ""}`}>
                            {step.title}
                          </h3>
                          <span className="text-sm text-muted-foreground">{step.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Delivery Partner */}
            <Card className="border-0 shadow-md bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Your Delivery Partner
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      VK
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold">{mockOrder.rider.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-secondary text-secondary" />
                      <span className="text-sm">{mockOrder.rider.rating}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{mockOrder.rider.vehicle}</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Phone className="h-4 w-4 mr-2" />
                    Call
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Details */}
            <Card className="border-0 shadow-md bg-gradient-card">
              <CardHeader>
                <CardTitle>Delivery Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">From</h4>
                  <p className="text-sm text-muted-foreground">{mockOrder.restaurant.name}</p>
                  <p className="text-xs text-muted-foreground">{mockOrder.restaurant.address}</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">To</h4>
                  <p className="text-sm text-muted-foreground">{mockOrder.deliveryAddress.address}</p>
                  <p className="text-xs text-muted-foreground">{mockOrder.deliveryAddress.landmark}</p>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Estimated: {mockOrder.estimatedTime}</span>
                </div>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card className="border-0 shadow-md bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  {mockOrder.items.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>{item.name} x{item.quantity}</span>
                      <span>₹{item.price}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span className="text-primary">₹{mockOrder.total}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}