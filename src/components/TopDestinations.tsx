import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Star } from "lucide-react";

const destinations = [
  { name: "Bali, Indonesia", bookings: 24, rating: 4.8 },
  { name: "Maldives", bookings: 19, rating: 4.9 },
  { name: "Santorini, Greece", bookings: 17, rating: 4.7 },
  { name: "Kyoto, Japan", bookings: 14, rating: 4.8 },
];

export function TopDestinations() {
  return (
    <Card className="animate-fade-in" style={{ animationDelay: "0.35s" }}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-heading">Top Destinations</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {destinations.map((dest, i) => (
          <div key={dest.name} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 text-accent font-bold text-sm">
              {i + 1}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <p className="text-sm font-medium truncate">{dest.name}</p>
              </div>
              <p className="text-xs text-muted-foreground">{dest.bookings} bookings</p>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Star className="w-3.5 h-3.5 fill-accent text-accent" />
              {dest.rating}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
