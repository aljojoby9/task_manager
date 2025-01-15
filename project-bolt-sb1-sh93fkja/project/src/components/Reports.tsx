import React from 'react';
import { BarChart, LineChart, PieChart, TrendingUp } from 'lucide-react';

const Reports = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Sales Overview</h3>
            <select className="border rounded-md px-2 py-1">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
            <BarChart className="h-8 w-8 text-gray-400" />
            <span className="ml-2 text-gray-500">Sales Chart</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Inventory Status</h3>
            <button className="text-blue-600 hover:text-blue-800">Export</button>
          </div>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
            <PieChart className="h-8 w-8 text-gray-400" />
            <span className="ml-2 text-gray-500">Stock Distribution</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Revenue Trends</h3>
            <select className="border rounded-md px-2 py-1">
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
            <LineChart className="h-8 w-8 text-gray-400" />
            <span className="ml-2 text-gray-500">Revenue Chart</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Top Selling Items</h3>
            <button className="text-blue-600 hover:text-blue-800">View All</button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Product {item}</p>
                    <p className="text-sm text-gray-500">Category</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">$1,234</p>
                  <p className="text-sm text-green-600">+12%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;