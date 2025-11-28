import { useCallback, useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, MapPin } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/api";

export default function Resources() {
  const { token } = useAuth();
  const [resources, setResources] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);

  const fetchResources = useCallback(async () => {
    if (!token) return;
    try {
      const data = await apiRequest<any[]>("/common/resources", { token });
      setResources(data);
    } catch (error) {
      console.error("Failed to load resources", error);
    }
  }, [token]);

  const fetchMyBookings = useCallback(async () => {
    if (!token) return;
    try {
      const data = await apiRequest<any[]>("/common/bookings", { token });
      setBookings(data);
    } catch (error) {
      console.error("Failed to load bookings", error);
    }
  }, [token]);

  useEffect(() => {
    fetchResources();
    fetchMyBookings();
  }, [fetchResources, fetchMyBookings]);

  const handleBook = async (resourceId: string) => {
    try {
      if (!token) {
        throw new Error("Missing session. Please sign in again.");
      }
      await apiRequest("/common/bookings", {
        method: "POST",
        token,
        body: {
          resourceId,
          purpose: "General use",
        },
      });
      toast({ title: "Success", description: "Booking request submitted" });
      fetchMyBookings();
    } catch (error: any) {
      toast({ variant: "destructive", title: "Error", description: error.message });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Resources</h1>
        <p className="text-muted-foreground mt-1">Book campus resources and equipment</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <Card key={resource.id} className="transition-smooth hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <Badge variant="outline">{resource.resource_type}</Badge>
              </div>
              <CardTitle>{resource.name}</CardTitle>
              <CardDescription className="line-clamp-2">{resource.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {resource.location && (
                <p className="text-sm text-muted-foreground flex items-center gap-1 mb-4">
                  <MapPin className="h-4 w-4" />
                  {resource.location}
                </p>
              )}
              <Button onClick={() => handleBook(resource.id)} className="w-full">
                <Calendar className="mr-2 h-4 w-4" />
                Request Booking
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>My Bookings</CardTitle>
          <CardDescription>Your resource booking history</CardDescription>
        </CardHeader>
        <CardContent>
          {bookings.length === 0 ? (
            <p className="text-sm text-muted-foreground">No bookings yet</p>
          ) : (
            <div className="space-y-2">
              {bookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{booking.resource?.name}</p>
                    <p className="text-sm text-muted-foreground">{booking.purpose}</p>
                  </div>
                  <Badge variant={booking.status === "approved" ? "default" : "secondary"}>
                    {booking.status}
                  </Badge>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
