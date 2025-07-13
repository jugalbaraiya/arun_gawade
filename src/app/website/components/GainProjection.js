import React from "react";

export default function GainProjection() {
  return (
    <section className="p-8">
      <h3 className="text-2xl font-bold mb-4">Investor Roadmap & Gain Projection</h3>
      <p className="mb-4">Projected gain = up to 1000x return based on a ₹10,000/unit investment and future valuation at ₹1 Lakh Crore.</p>
      <table className="w-full text-left border">
        <thead>
          <tr>
            <th className="border px-2 py-1">No. of Units</th>
            <th className="border px-2 py-1">Investment (₹)</th>
            <th className="border px-2 py-1">Future Value (₹)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-2 py-1">1</td><td className="border px-2 py-1">10,000</td><td className="border px-2 py-1">10,00,000</td></tr>
          <tr><td className="border px-2 py-1">5</td><td className="border px-2 py-1">50,000</td><td className="border px-2 py-1">50,00,000</td></tr>
          <tr><td className="border px-2 py-1">25</td><td className="border px-2 py-1">2,50,000</td><td className="border px-2 py-1">2,50,00,000</td></tr>
          <tr><td className="border px-2 py-1">125</td><td className="border px-2 py-1">12,50,000</td><td className="border px-2 py-1">12,50,00,000</td></tr>
        </tbody>
      </table>
    </section>
  );
}
