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
  category: string;
}


export default function MenuPage() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const groupedMenu: { [category: string]: MenuItem[] } = {};

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/menu-items/")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  }, []);

  const filteredMenu = menu.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())

  );

  filteredMenu.forEach((item) => {
    if (!groupedMenu[item.category]) {
      groupedMenu[item.category] = [];
    }
    groupedMenu[item.category].push(item);
  });


  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8ede3] via-[#f5e6ca] to-[#e4c59e] py-12 px-4">
      <h1 className="text-5xl font-bold text-center text-[#7c5e3c] mb-8 font-serif">Our Menu</h1>
      <div className="flex justify-center mb-10">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a drink or food..."
          className="w-full max-w-md px-4 py-2 rounded-lg border border-[#e4c59e] shadow focus:outline-none focus:ring-2 focus:ring-[#e4c59e]"
        />
      </div>
      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : filteredMenu.length === 0 ? (
        <p className="text-center text-lg text-[#a68a64]">No menu items found.</p>
      ) : (
        <div className="max-w-6xl mx-auto space-y-12">
          {Object.entries(groupedMenu).map(([category, items]) => (
            <section key={category}>
              <h2 className="text-3xl font-bold text-[#a68a64] mb-6 mt-8 font-serif capitalize border-b-2 border-[#e4c59e] pb-2">{category.replace(/_/g, ' ')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {items.map((item) => (
                  <div key={item.id} className="bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform">
                    {item.image && (
                      <Image src={item.image} alt={item.name} width={120} height={120} className="rounded-full mb-4 shadow-lg object-cover" />
                    )}
                    <h3 className="text-2xl font-semibold mb-2 text-[#7c5e3c]">{item.name}</h3>
                    <p className="text-[#a68a64] text-center mb-2">{item.description}</p>
                    <p className="text-lg font-bold text-[#7c5e3c] mb-2">${item.price}</p>
                    <span className={item.is_available ? "text-green-600" : "text-red-600"}>
                      {item.is_available ? "Available" : "Not Available"}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </main>
  );
}

