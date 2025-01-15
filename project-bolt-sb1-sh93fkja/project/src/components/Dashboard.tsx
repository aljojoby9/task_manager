import React from 'react';
import { Activity, Package, DollarSign, Users } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, trend }: {
  icon: any;
  label: string;
  value: string;
  trend: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{label}</p>
        <p className="text-2xl font-semibold mt-1">{value}</p>
      </div>
      <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
    </div>
    <p className="text-sm text-gray-500 mt-2">
      {trend}
    </p>
  </div>
);

const Dashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={DollarSign}
          label="Total Sales"
          value="$12,426"
          trend="+16% from last month"
        />
        <StatCard
          icon={Package}
          label="Low Stock Items"
          value="23"
          trend="5 items need reorder"
        />
        <StatCard
          icon={Activity}
          label="Prescriptions Today"
          value="48"
          trend="12 pending review"
        />
        <StatCard
          icon={Users}
          label="Active Customers"
          value="1,205"
          trend="+18 new this week"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Sales</h3>
          {/* Add sales chart or table here */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Inventory Status</h3>
          {/* Add inventory status chart here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;