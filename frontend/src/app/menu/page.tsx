"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  is_available: boolean;
  image?: string;
}

export default function MenuPage() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/menu-items/")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8ede3] via-[#f5e6ca] to-[#e4c59e] py-12 px-4">
      <h1 className="text-5xl font-bold text-center text-[#7c5e3c] mb-12 font-serif">Our Menu</h1>
      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {menu.map((item) => (
            <div key={item.id} className="bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform">
              {item.image && (
                <Image src={item.image} alt={item.name} width={120} height={120} className="rounded-full mb-4 shadow-lg object-cover" />
              )}
              <h2 className="text-2xl font-semibold mb-2 text-[#7c5e3c]">{item.name}</h2>
              <p className="text-[#a68a64] text-center mb-2">{item.description}</p>
              <p className="text-lg font-bold text-[#7c5e3c] mb-2">${item.price}</p>
              <span className={item.is_available ? "text-green-600" : "text-red-600"}>
                {item.is_available ? "Available" : "Not Available"}
              </span>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
