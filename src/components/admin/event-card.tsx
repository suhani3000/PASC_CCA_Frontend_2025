import { Event } from "@/types/events";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { BarChart3, Edit, Users, Clock, FolderOpen, Image } from "lucide-react";

export const EventCard = (event: Event) => {
  const router = useRouter();
  
  const getStatusBadge = (status: Event["status"]) => {
    const variants: Record<string, string> = {
      UPCOMING: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      COMPLETED: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
      ONGOING: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    };
    return (
      <Badge className={variants[status] || "bg-gray-100 text-gray-800"}>
        {status}
      </Badge>
    );
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <Card className="mb-4 border border-border shadow-sm hover:shadow-md transition-shadow duration-200 bg-card">
      <CardContent className="pt-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-semibold text-lg text-foreground">{event.title}</h3>
              {getStatusBadge(event.status)}
            </div>
            <p className="text-sm text-muted-foreground mb-1">
              {formatDate(event.startDate)} - {formatDate(event.endDate)} • {event.location}
            </p>
            <p className="text-sm text-muted-foreground">
              {event.credits} credits • Capacity: {event.maxCapacity}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => router.push(`/admin/events/${event.id}/analytics`)}
              className="flex items-center gap-1"
            >
              <BarChart3 className="w-4 h-4" />
              Analytics
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => router.push(`/admin/events/${event.id}/sessions`)}
              className="flex items-center gap-1"
            >
              <Clock className="w-4 h-4" />
              Sessions
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => router.push(`/admin/events/${event.id}/resources`)}
              className="flex items-center gap-1"
            >
              <FolderOpen className="w-4 h-4" />
              Resources
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => router.push(`/admin/events/${event.id}/gallery`)}
              className="flex items-center gap-1"
            >
              <Image className="w-4 h-4" />
              Gallery
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => router.push(`/admin/editEvent/${event.id}`)}
              className="flex items-center gap-1"
            >
              <Edit className="w-4 h-4" />
              Edit
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.push(`/admin/attendance/${event.id}`)}
              className="flex items-center gap-1"
            >
              <Users className="w-4 h-4" />
              Attendance
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
