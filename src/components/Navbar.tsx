import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  cartItems?: number;
  isDark?: boolean;
  onThemeToggle?: () => void;
}

export default function Navbar({ cartItems = 0, isDark = false, onThemeToggle }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
    { href: "/track", label: "Track Order" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-accent flex items-center justify-center">
              <span className="text-primary font-bold text-xl">N</span>
            </div>
            <span className="hidden font-bold text-xl text-gradient sm:inline-block">
              Night Mess
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80 relative",
                  isActive(item.href) 
                    ? "text-foreground font-medium after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-secondary after:rounded-full" 
                    : "text-foreground/60"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>

        {/* Mobile logo */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Link to="/" className="mr-6 flex items-center space-x-2 md:hidden">
            <div className="h-8 w-8 rounded-lg bg-gradient-accent flex items-center justify-center">
              <span className="text-primary font-bold text-xl">N</span>
            </div>
            <span className="font-bold text-lg text-gradient">Night Mess</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onThemeToggle}
              className="h-9 w-9"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            <Link to="/cart">
              <Button variant="floating" size="icon" className="relative">
                <ShoppingCart className="h-4 w-4" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-secondary text-xs font-bold text-primary flex items-center justify-center">
                    {cartItems > 9 ? "9+" : cartItems}
                  </span>
                )}
                <span className="sr-only">Shopping cart</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] w-full grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden bg-background/95 backdrop-blur">
          <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
            <nav className="grid grid-flow-row auto-rows-max text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                    isActive(item.href) ? "text-foreground bg-accent" : "text-foreground/60"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}