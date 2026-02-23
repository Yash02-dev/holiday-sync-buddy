import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Sep", bookings: 32 },
  { month: "Oct", bookings: 45 },
  { month: "Nov", bookings: 38 },
  { month: "Dec", bookings: 62 },
  { month: "Jan", bookings: 55 },
  { month: "Feb", bookings: 71 },
];

export function BookingChart() {
  return (
    <Card className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-heading">Booking Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="bookingGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(174, 62%, 38%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(174, 62%, 38%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(200, 15%, 90%)" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(210, 10%, 50%)" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(210, 10%, 50%)" />
              <Tooltip
                contentStyle={{
                  background: "hsl(0, 0%, 100%)",
                  border: "1px solid hsl(200, 15%, 90%)",
                  borderRadius: "0.5rem",
                  fontSize: "0.875rem",
                }}
              />
              <Area
                type="monotone"
                dataKey="bookings"
                stroke="hsl(174, 62%, 38%)"
                strokeWidth={2}
                fill="url(#bookingGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
