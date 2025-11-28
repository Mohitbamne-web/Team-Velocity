import { Home, Megaphone, BookOpen, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: Megaphone, label: "Announcements" },
    { icon: BookOpen, label: "Resources" },
    { icon: Calendar, label: "Events" },
    { icon: Users, label: "Community" },
  ];

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">CC</span>
            </div>
            <span className="font-semibold text-lg text-foreground">Campus Connect</span>
          </div>
          
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant={item.active ? "default" : "ghost"}
                size="sm"
                className="gap-2"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Button>
            ))}
          </div>

          <Button variant="outline" size="sm">
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;