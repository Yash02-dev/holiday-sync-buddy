import { DashboardSidebar } from "@/components/DashboardSidebar";
import { StatsCard } from "@/components/StatsCard";
import { RecentBookings } from "@/components/RecentBookings";
import { BookingChart } from "@/components/BookingChart";
import { TopDestinations } from "@/components/TopDestinations";
import { Calendar, Users, DollarSign, Clock, Search, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const stats = [
  { title: "Total Bookings", value: "284", change: "+12% from last month", changeType: "positive" as const, icon: Calendar },
  { title: "Revenue", value: "$142,580", change: "+8.2% from last month", changeType: "positive" as const, icon: DollarSign },
  { title: "Active Customers", value: "1,247", change: "+5.4% from last month", changeType: "positive" as const, icon: Users },
  { title: "Pending Approvals", value: "18", change: "3 urgent", changeType: "neutral" as const, icon: Clock },
];

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-background">
      <DashboardSidebar />

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden" onClick={() => setSidebarOpen(false)}>
          <div className="absolute inset-0 bg-foreground/40" />
          <div className="relative w-64 h-full" onClick={(e) => e.stopPropagation()}>
            <DashboardSidebar />
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border px-4 md:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <div>
                <h2 className="text-xl font-heading font-bold">Dashboard</h2>
                <p className="text-sm text-muted-foreground">Welcome back, Agent</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 max-w-sm flex-1">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search bookings..." className="pl-9" />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-4 md:p-8 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={stat.title} style={{ animationDelay: `${i * 0.08}s` }}>
                <StatsCard {...stat} />
              </div>
            ))}
          </div>

          {/* Charts & Destinations */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <BookingChart />
            </div>
            <TopDestinations />
          </div>

          {/* Recent Bookings */}
          <RecentBookings />
        </div>
      </main>
    </div>
  );
};

export default Index;
