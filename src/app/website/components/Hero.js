import React from "react";

export default function Hero() {
  return (
    <section className="text-center bg-cover bg-center h-96 flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: "url('https://source.unsplash.com/1600x600/?food,restaurant')" }}>
      <h2 className="text-4xl font-bold mb-4">Building India’s Most Trusted Food Chain</h2>
      <p className="mb-6">Join us as we open 5,000 outlets across India in the next 10 years</p>
      <div className="space-x-4">
        <button className="bg-blue-500 px-4 py-2 rounded">Discover Our Vision</button>
        <button className="bg-white text-blue-500 px-4 py-2 rounded">Become an Investor</button>
      </div>
    </section>
  );
}
