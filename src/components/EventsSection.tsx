import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Tech Workshop: AI & Machine Learning",
      date: "Mar 15, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Engineering Building, Room 305",
      attendees: 45,
      maxAttendees: 60,
      category: "Workshop",
    },
    {
      id: 2,
      title: "Student Government Elections",
      date: "Mar 20, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Student Center",
      attendees: 234,
      maxAttendees: null,
      category: "Campus Event",
    },
    {
      id: 3,
      title: "Guest Lecture: Industry Insights",
      date: "Mar 22, 2024",
      time: "3:00 PM - 5:00 PM",
      location: "Main Auditorium",
      attendees: 89,
      maxAttendees: 200,
      category: "Academic",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Upcoming Events</h2>
          <p className="text-muted-foreground">Don't miss out on exciting campus activities</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">{event.category}</Badge>
                <CardTitle className="text-xl">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date} • {event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>
                    {event.attendees} attending
                    {event.maxAttendees && ` • ${event.maxAttendees - event.attendees} spots left`}
                  </span>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  Register
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;