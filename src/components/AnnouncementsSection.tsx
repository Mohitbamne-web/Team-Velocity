import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Pin } from "lucide-react";

const AnnouncementsSection = () => {
  const announcements = [
    {
      id: 1,
      title: "Fall Semester Registration Opens",
      category: "Academic",
      time: "2 hours ago",
      pinned: true,
      content: "Registration for Fall 2024 semester is now open. Visit the registrar's office or use the online portal to enroll.",
    },
    {
      id: 2,
      title: "Career Fair Next Week",
      category: "Events",
      time: "5 hours ago",
      pinned: false,
      content: "Meet top employers at our annual career fair. Bring your resume and professional attire.",
    },
    {
      id: 3,
      title: "Library Hours Extended",
      category: "Facilities",
      time: "1 day ago",
      pinned: false,
      content: "Main library will now be open until midnight during exam weeks. Additional study spaces available.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">Latest Announcements</h2>
          <Badge variant="secondary" className="text-sm">3 New</Badge>
        </div>

        <div className="grid gap-4">
          {announcements.map((announcement) => (
            <Card key={announcement.id} className="hover:shadow-medium transition-shadow duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {announcement.pinned && <Pin className="w-4 h-4 text-accent fill-accent" />}
                      <Badge variant="outline" className="text-xs">{announcement.category}</Badge>
                    </div>
                    <CardTitle className="text-xl">{announcement.title}</CardTitle>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {announcement.time}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{announcement.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;