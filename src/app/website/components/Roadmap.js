import React from "react";

export default function Roadmap() {
  return (
    <section id="roadmap" className="p-8 bg-gray-50">
      <h3 className="text-2xl font-bold mb-6">10-Year Roadmap</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h4 className="font-semibold">Pan-India Presence</h4>
          <p>5,000 outlets nationwide in major cities and towns.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h4 className="font-semibold">Public Listing Goal</h4>
          <p>To be listed on the Indian Stock Exchange by 2030.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h4 className="font-semibold">Outlet Business Target</h4>
          <p>Each outlet aims for average daily business of ₹200,000.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h4 className="font-semibold">Valuation Target</h4>
          <p>$100 Billion company valuation by year 10.</p>
        </div>
      </div>
    </section>
  );
}
