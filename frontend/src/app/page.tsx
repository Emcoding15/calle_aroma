'use client';

import { useEffect, useState } from 'react';

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  is_available: boolean;
};

export default function Home() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/menu-items/')
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Coffee Shop Menu</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-4">
          {menu.map((item) => (
            <li key={item.id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p>{item.description}</p>
              <p className="font-bold">${item.price}</p>
              <p className={item.is_available ? 'text-green-600' : 'text-red-600'}>
                {item.is_available ? 'Available' : 'Not Available'}
              </p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}