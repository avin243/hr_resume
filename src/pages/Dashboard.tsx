import React from 'react';
import { Card } from '../components/ui/card';
import { CandidateCard } from '../components/dashboard/CandidateCard';
import { JobCard } from '../components/dashboard/JobCard';
import { StatCard } from '../components/dashboard/StatCard';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard title="Total Candidates" value="0" />
          <StatCard title="Jobs Posted" value="0" />
          <StatCard title="Matches Made" value="0" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Candidates</h2>
            <div className="space-y-4">
              <p className="text-gray-500">No candidates yet</p>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Active Jobs</h2>
            <div className="space-y-4">
              <p className="text-gray-500">No jobs posted yet</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;