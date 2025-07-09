import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface StatsCardProps {
  title: string;
  value: string | number;
  Icon?: React.ComponentType<{ className?: string }>;
}

export const StatsCard = ({ title, value, Icon }: StatsCardProps) => (
  <Card className="border-none shadow-sm hover:shadow-md transition-shadow duration-200">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-lg font-medium text-muted">{title}</CardTitle>
      {Icon && <Icon className="size-6 text-muted" />}
    </CardHeader>
    <CardContent className="pt-0">
      <div className="text-4xl font-bold">{value}</div>
    </CardContent>
  </Card>
);
