import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AnnouncementsSection from "@/components/AnnouncementsSection";
import ResourcesSection from "@/components/ResourcesSection";
import EventsSection from "@/components/EventsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <AnnouncementsSection />
      <ResourcesSection />
      <EventsSection />
      
      <footer className="bg-card border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Campus Connect. Built for students, by students.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;