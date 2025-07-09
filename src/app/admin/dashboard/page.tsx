"use client";
import React, { useState } from "react";
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Users, Plus } from "lucide-react";
import { EVENTS } from "@/data/events";
import { StatsCard } from "@/components/admin/stats-card";
import { EventsList } from "@/components/admin/event-list";
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("All Events");

  const totalEvents = EVENTS.length;
  const activeEvents = EVENTS.filter(
    (event) => event.status === "Ongoing" || event.status === "Upcoming"
  ).length;
  const totalStudents = 1250;

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-muted-foreground">
              Admin Dashboard
            </h1>
            <p className="text-muted text-lg mt-1">
              Manage events, attendance, and student activities
            </p>
          </div>
          <Button
            size={"lg"}
            className="bg-blue-500 text-lg self-end mt-3 md:mt-0 py-2 px-1 text-white hover:bg-blue-600"
          >
            <Plus className="h-6 w-6 mr-2" />
            Create Event
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard title="Total Events" value={totalEvents} Icon={Calendar} />
          <StatsCard title="Active Events" value={activeEvents} />
          <StatsCard
            title="Total Students"
            value={totalStudents}
            Icon={Users}
          />
        </div>

        {/* Events Section */}
        <Card className="border-none bg-background shadow-none">
          <CardHeader>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4 bg-gray-200  rounded-md text-lg ">
                <TabsTrigger
                  value="All Events"
                  className={
                    activeTab === "All Events" ? "bg-blue-500 text-white" : ""
                  }
                >
                  All Events
                </TabsTrigger>
                <TabsTrigger
                  value="Upcoming"
                  className={
                    activeTab === "Upcoming" ? "bg-blue-500 text-white" : ""
                  }
                >
                  Upcoming
                </TabsTrigger>
                <TabsTrigger
                  value="Ongoing"
                  className={
                    activeTab === "Ongoing" ? "bg-blue-500 text-white" : ""
                  }
                >
                  Ongoing
                </TabsTrigger>
                <TabsTrigger
                  value="Completed"
                  className={
                    activeTab === "Completed" ? "bg-blue-500 text-white" : ""
                  }
                >
                  Completed
                </TabsTrigger>
              </TabsList>

              <TabsContent value="All Events" className="mt-6">
                <EventsList events={EVENTS} filterStatus="All Events" />
              </TabsContent>
              <TabsContent value="Upcoming" className="mt-6">
                <EventsList events={EVENTS} filterStatus="Upcoming" />
              </TabsContent>
              <TabsContent value="Ongoing" className="mt-6">
                <EventsList events={EVENTS} filterStatus="Ongoing" />
              </TabsContent>
              <TabsContent value="Completed" className="mt-6">
                <EventsList events={EVENTS} filterStatus="Completed" />
              </TabsContent>
            </Tabs>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
