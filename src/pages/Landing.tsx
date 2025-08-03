import Hero from "@/components/Hero";
import FeaturedDishes from "@/components/FeaturedDishes";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, Zap, Heart, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Clock,
    title: "Lightning Fast",
    description: "Average delivery time of 15 minutes across campus"
  },
  {
    icon: Shield,
    title: "Student Prices",
    description: "Affordable pricing designed for student budgets"
  },
  {
    icon: Zap,
    title: "24/7 Service",
    description: "Always open when you need us most"
  },
  {
    icon: Heart,
    title: "Quality Food",
    description: "Fresh, hygienic, and delicious every time"
  }
];

export default function Landing() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedDishes />
      
      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Why Students <span className="text-accent-gradient">Love Us</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Built by students, for students. We understand your late-night cravings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="text-center card-hover bg-gradient-card border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            Ready to Fuel Your Midnight Grind?
          </h2>
          <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-lg mb-8">
            Join thousands of students who trust Night Mess for their late-night food cravings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button variant="hero" size="xl">
                Order Now
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="xl" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm">Serving 50+ campuses across India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-sm">24/7 Support: 1800-NIGHTMESS</span>
              </div>
            </div>
            <Link to="/track">
              <Button variant="outline">Track Your Order</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}