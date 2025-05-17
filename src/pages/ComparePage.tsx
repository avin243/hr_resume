import React from 'react';

function ComparePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Compare Candidates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Candidate 1</h2>
          <p className="text-gray-600">Select a candidate to compare</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Candidate 2</h2>
          <p className="text-gray-600">Select a candidate to compare</p>
        </div>
      </div>
    </div>
  );
}

export default ComparePage;