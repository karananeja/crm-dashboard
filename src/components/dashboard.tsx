import { Activity, DollarSign, TrendingUp, Users } from "lucide-react";

import { Header } from "./header";
import { MetricCard } from "./metric-card";
import { SalesTable } from "./sales-table";

export function Dashboard() {
  return (
    <div className="flex-1 space-y-4 p-6">
      <Header />

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <MetricCard
          title="New sales"
          value="1.345"
          icon={TrendingUp}
          color="text-blue-600"
          bgColor="bg-blue-100"
        />

        <MetricCard
          title="New leads"
          value="2.890"
          icon={Users}
          color="text-green-600"
          bgColor="bg-green-100"
        />

        <MetricCard
          title="Income per lead"
          value="$1.870"
          icon={DollarSign}
          color="text-yellow-600"
          bgColor="bg-yellow-100"
        />

        <MetricCard
          title="Conversion rate"
          value="5.10%"
          icon={Activity}
          color="text-purple-600"
          bgColor="bg-purple-100"
        />
      </div>

      <SalesTable />
    </div>
  );
}
