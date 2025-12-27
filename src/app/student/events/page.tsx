'use client'
import React from "react";
import { EventsTab } from "@/components/student/event-tab";
import { useFetchEventsForStudentRsvp } from "@/hooks/events";
import { EventWithRsvp } from "@/types/events";
import { Calendar, Search } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function EventsPage() {
  const { events, loading, error } = useFetchEventsForStudentRsvp();
  const eventsWithRsvp = events;
  const totalEvents = eventsWithRsvp.length;
  const activeEvents = eventsWithRsvp.filter(
    (e: EventWithRsvp) => e.event.status === "ONGOING" || e.event.status === "UPCOMING"
  ).length;

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-8">
          <Skeleton className="h-10 w-64 mb-2" />
          <Skeleton className="h-5 w-96" />
        </div>
        <Skeleton className="h-12 w-full mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <Skeleton key={i} className="h-64 w-full rounded-xl" />
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 text-center">
          <p className="text-red-600 dark:text-red-400 font-medium">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Calendar className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">
            CCA Events
          </h1>
        </div>
        <p className="text-muted-foreground">
          Discover and participate in co-curricular activities
        </p>
        
        {/* Quick Stats */}
        <div className="flex gap-4 mt-4">
          <div className="px-4 py-2 bg-card border border-border rounded-lg">
            <span className="text-2xl font-bold text-foreground">{totalEvents}</span>
            <span className="text-muted-foreground ml-2 text-sm">Total Events</span>
          </div>
          <div className="px-4 py-2 bg-card border border-border rounded-lg">
            <span className="text-2xl font-bold text-green-600 dark:text-green-400">{activeEvents}</span>
            <span className="text-muted-foreground ml-2 text-sm">Active</span>
          </div>
        </div>
      </div>

      {/* Events Tab Section */}
      <EventsTab eventsWithRsvp={eventsWithRsvp} />
    </section>
  );
}
