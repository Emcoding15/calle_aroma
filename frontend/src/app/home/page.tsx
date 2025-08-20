"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-200 flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-cover bg-center" style={{backgroundImage: 'url(/coffee-hero.jpg)'}}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4 drop-shadow">Aesthetic Brew</h1>
          <p className="text-xl mb-6 drop-shadow">Welcome to your neighborhood coffee haven</p>
          <Link href="/menu">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-brown-900 font-bold px-8 py-3 rounded-lg shadow-lg transition">Explore Menu</button>
          </Link>
        </div>
      </section>

      {/* Featured Drinks */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-brown-900 mb-8 text-center">Featured Drinks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <Image src="/featured1.jpg" alt="Cappuccino Delight" width={120} height={120} className="rounded-full mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cappuccino Delight</h3>
            <p className="text-brown-700 text-center">Rich espresso topped with a cloud of frothy milk.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <Image src="/featured2.jpg" alt="Iced Mocha Bliss" width={120} height={120} className="rounded-full mb-4" />
            <h3 className="text-xl font-semibold mb-2">Iced Mocha Bliss</h3>
            <p className="text-brown-700 text-center">Decadent espresso and chilled cocoa with a touch of cream.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <Image src="/featured3.jpg" alt="Matcha Magic" width={120} height={120} className="rounded-full mb-4" />
            <h3 className="text-xl font-semibold mb-2">Matcha Magic</h3>
            <p className="text-brown-700 text-center">Smooth and earthy matcha balanced with creamy milk.</p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="max-w-5xl mx-auto pb-16 px-4">
        <h2 className="text-3xl font-bold text-brown-900 mb-8 text-center">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Coffee Tasting Weekend</h3>
            <p className="text-brown-700 mb-2">Join us for a weekend of exploration and discovery of new coffee flavors.</p>
            <span className="text-brown-500 text-sm">Aug 30 - Sep 1</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Barista Workshop</h3>
            <p className="text-brown-700 mb-2">Enhance your coffee-making skills with our expert baristas.</p>
            <span className="text-brown-500 text-sm">Sep 10</span>
          </div>
        </div>
      </section>
    </main>
  );
}
