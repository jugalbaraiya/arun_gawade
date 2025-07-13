import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-xl font-bold">[Company Name]</h1>
      <nav className="space-x-4">
        <a href="#vision" className="hover:text-blue-500">Vision</a>
        <a href="#roadmap" className="hover:text-blue-500">Roadmap</a>
        <a href="#digital" className="hover:text-blue-500">Digital</a>
        <a href="#investor" className="hover:text-blue-500">Investors</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
      </nav>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Invest Now</button>
    </header>
  );
}
