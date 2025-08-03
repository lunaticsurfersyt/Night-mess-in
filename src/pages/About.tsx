import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Target, 
  Heart, 
  Users, 
  Clock, 
  MapPin, 
  DollarSign, 
  ChefHat,
  GraduationCap,
  Zap,
  Shield
} from "lucide-react";

const founders = [
  {
    name: "Arjun Patel",
    role: "Co-Founder & CEO",
    background: "IIT Bombay, Ex-Swiggy",
    avatar: "AP",
    bio: "Former Computer Science student who understood the struggle of late-night food cravings during exam seasons."
  },
  {
    name: "Priya Sharma",
    role: "Co-Founder & Head Chef",
    background: "Culinary Institute, 8+ years",
    avatar: "PS",
    bio: "Professional chef passionate about creating affordable, nutritious meals specifically designed for student lifestyles."
  },
  {
    name: "Rahul Kumar",
    role: "Co-Founder & CTO",
    background: "IIT Delhi, Ex-Zomato",
    avatar: "RK",
    bio: "Tech enthusiast who built the lightning-fast delivery system that gets food to students in under 15 minutes."
  }
];

const differentiators = [
  {
    icon: GraduationCap,
    title: "Student-First Approach",
    description: "Built by students, for students. We understand your schedule, budget, and cravings."
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "30-40% cheaper than mainstream apps. Quality food that doesn't break your budget."
  },
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "15-minute average delivery time within campus. No waiting around during study breaks."
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Open round the clock because we know student life doesn't follow regular schedules."
  },
  {
    icon: MapPin,
    title: "Campus-Focused",
    description: "Exclusive campus delivery. We know every hostel block, library, and study area."
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Fresh ingredients, hygienic preparation, and taste-tested recipes by our chef co-founder."
  }
];

const partnerships = [
  { name: "IIT Delhi", students: "11,000+" },
  { name: "DU - LSR", students: "8,500+" },
  { name: "BITS Pilani", students: "15,000+" },
  { name: "IIT Bombay", students: "13,000+" },
  { name: "Jadavpur University", students: "12,000+" },
  { name: "SRCC", students: "3,000+" }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">
            About <span className="text-accent-gradient">Night Mess</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground mb-8">
            We're revolutionizing late-night food delivery for students across India. 
            Fast, affordable, and always available when you need us most.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              50+ Campus Partners
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              100,000+ Happy Students
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              15 Min Avg Delivery
            </Badge>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="card-hover border-0 shadow-md bg-gradient-card">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become India's most trusted late-night food delivery platform, 
                ensuring no student ever has to compromise on quality food due to 
                time constraints or budget limitations.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover border-0 shadow-md bg-gradient-card">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To fuel the dreams and ambitions of students by providing 
                nutritious, delicious, and affordable meals whenever they need them, 
                delivered with lightning speed and genuine care.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* How We're Different */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              How We're Different from <span className="text-primary">Swiggy & Zomato</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              While mainstream apps serve everyone, we're laser-focused on students. 
              Every feature, every price point, every service is designed with student life in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <Card 
                key={item.title} 
                className="card-hover border-0 shadow-md bg-gradient-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Founders & Team */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Meet Our <span className="text-accent-gradient">Founders</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A unique blend of technology, culinary expertise, and deep understanding of student life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <Card 
                key={founder.name} 
                className="card-hover border-0 shadow-md bg-gradient-card text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarFallback className="bg-primary text-primary-foreground text-lg font-bold">
                      {founder.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-bold text-lg mb-1">{founder.name}</h3>
                  <p className="text-primary font-medium mb-2">{founder.role}</p>
                  <p className="text-sm text-muted-foreground mb-3">{founder.background}</p>
                  <p className="text-sm leading-relaxed">{founder.bio}</p>
                  {index === 1 && (
                    <Badge variant="secondary" className="mt-3">
                      <ChefHat className="h-3 w-3 mr-1" />
                      Chef Co-founder
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* College Partnerships */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Our <span className="text-accent-gradient">Campus Partners</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Officially partnered with India's top educational institutions for seamless campus delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerships.map((college, index) => (
              <Card 
                key={college.name} 
                className="card-hover border-0 shadow-md bg-gradient-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{college.name}</h3>
                  <p className="text-2xl font-bold text-primary mb-1">{college.students}</p>
                  <p className="text-sm text-muted-foreground">Active Students</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="bg-gradient-hero rounded-2xl p-8 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Night Mess by Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">100K+</div>
              <div className="text-sm text-primary-foreground/80">Orders Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">50+</div>
              <div className="text-sm text-primary-foreground/80">Campus Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">15 min</div>
              <div className="text-sm text-primary-foreground/80">Avg Delivery Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">4.8★</div>
              <div className="text-sm text-primary-foreground/80">Student Rating</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}