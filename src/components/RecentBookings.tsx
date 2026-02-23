import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const bookings = [
  { id: "SH-1042", customer: "Emma Thompson", destination: "Bali, Indonesia", dates: "Mar 15 – Mar 22", guests: 2, status: "confirmed" as const, amount: "$3,450" },
  { id: "SH-1041", customer: "James Rivera", destination: "Santorini, Greece", dates: "Apr 2 – Apr 9", guests: 4, status: "pending" as const, amount: "$6,200" },
  { id: "SH-1040", customer: "Sarah Chen", destination: "Maldives", dates: "Mar 28 – Apr 4", guests: 2, status: "confirmed" as const, amount: "$8,900" },
  { id: "SH-1039", customer: "Michael Brown", destination: "Kyoto, Japan", dates: "May 10 – May 17", guests: 3, status: "pending" as const, amount: "$5,100" },
  { id: "SH-1038", customer: "Olivia Davis", destination: "Amalfi Coast, Italy", dates: "Jun 1 – Jun 8", guests: 2, status: "cancelled" as const, amount: "$4,750" },
];

const statusStyles: Record<string, string> = {
  confirmed: "bg-success/10 text-success border-success/20",
  pending: "bg-warning/10 text-warning border-warning/20",
  cancelled: "bg-destructive/10 text-destructive border-destructive/20",
};

export function RecentBookings() {
  return (
    <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-heading">Recent Bookings</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left font-medium text-muted-foreground px-5 py-3">Booking</th>
                <th className="text-left font-medium text-muted-foreground px-5 py-3">Customer</th>
                <th className="text-left font-medium text-muted-foreground px-5 py-3 hidden lg:table-cell">Destination</th>
                <th className="text-left font-medium text-muted-foreground px-5 py-3 hidden xl:table-cell">Dates</th>
                <th className="text-left font-medium text-muted-foreground px-5 py-3">Status</th>
                <th className="text-right font-medium text-muted-foreground px-5 py-3">Amount</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="px-5 py-3 font-medium">{booking.id}</td>
                  <td className="px-5 py-3">{booking.customer}</td>
                  <td className="px-5 py-3 hidden lg:table-cell text-muted-foreground">{booking.destination}</td>
                  <td className="px-5 py-3 hidden xl:table-cell text-muted-foreground">{booking.dates}</td>
                  <td className="px-5 py-3">
                    <Badge variant="outline" className={statusStyles[booking.status]}>
                      {booking.status}
                    </Badge>
                  </td>
                  <td className="px-5 py-3 text-right font-medium">{booking.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
