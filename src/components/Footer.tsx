import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center">
                <span className="text-primary font-bold text-xl">N</span>
              </div>
              <span className="font-bold text-xl">Night Mess</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Student-first late-night food delivery platform. Hot meals, lightning fast delivery across college campuses.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/menu" className="text-primary-foreground/80 hover:text-secondary transition-colors">Menu</Link></li>
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/track" className="text-primary-foreground/80 hover:text-secondary transition-colors">Track Order</Link></li>
              <li><Link to="/cart" className="text-primary-foreground/80 hover:text-secondary transition-colors">My Cart</Link></li>
            </ul>
          </div>

          {/* Campus Locations */}
          <div>
            <h3 className="font-semibold mb-4">Top Campuses</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>IIT Delhi</li>
              <li>DU - LSR</li>
              <li>BITS Pilani</li>
              <li>IIT Bombay</li>
              <li>Jadavpur University</li>
              <li><span className="text-secondary">+45 more campuses</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>1800-NIGHTMESS</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@nightmess.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Available 24/7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 Night Mess. All rights reserved. Made with ❤️ for students.</p>
        </div>
      </div>
    </footer>
  );
}