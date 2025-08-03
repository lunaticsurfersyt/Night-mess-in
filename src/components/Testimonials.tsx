import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    college: "IIT Delhi",
    year: "3rd Year CSE",
    rating: 5,
    content: "Night Mess saved my semester! When I'm pulling all-nighters, they deliver hot biryani right to my hostel. Quality is amazing and super affordable.",
    avatar: "PS"
  },
  {
    id: 2,
    name: "Rahul Gupta",
    college: "DU - LSR",
    year: "2nd Year Commerce",
    rating: 5,
    content: "The delivery speed is insane! Ordered at 2 AM and got my food in 12 minutes. Their chai is perfect for late-night study sessions.",
    avatar: "RG"
  },
  {
    id: 3,
    name: "Sneha Patel",
    college: "BITS Pilani",
    year: "Final Year",
    rating: 5,
    content: "Finally, a food service that understands student life! Pocket-friendly prices, quality food, and they're open when we actually need them.",
    avatar: "SP"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            What Students Are Saying
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Real reviews from real students across India's top colleges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="relative card-hover bg-gradient-card border-0 shadow-md"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-secondary/30 mb-4" />
                
                <p className="text-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.college}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.year}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}