import { Event } from "@/types/events";
import { EventCard } from "@/components/admin/event-card";

interface EventsListProps {
  events: Event[];
  filterStatus: "All Events" | "Upcoming" | "Completed" | "Ongoing";
}
export const EventsList = ({ events, filterStatus }: EventsListProps) => {
  const filteredEvents =
    filterStatus === "All Events"
      ? events
      : events.filter((event) => event.status === filterStatus);

  return (
    <div className="space-y-4">
      {filteredEvents.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  );
};
