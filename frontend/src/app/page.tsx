"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8ede3] via-[#f5e6ca] to-[#e4c59e] flex flex-col">
      {/* Navigation Bar */}
      <nav className="w-full flex justify-between items-center px-8 py-4 bg-white/80 shadow-sm sticky top-0 z-20">
        <span className="text-2xl font-bold text-[#7c5e3c] tracking-wide">Calle Aroma</span>
        <div className="space-x-6">
          <Link href="/" className="text-[#7c5e3c] font-medium hover:underline">Home</Link>
          <Link href="/menu" className="text-[#7c5e3c] font-medium hover:underline">Menu</Link>
          <Link href="/contact" className="text-[#7c5e3c] font-medium hover:underline">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[420px] flex items-center justify-center bg-cover bg-center rounded-b-3xl shadow-lg mx-2 mt-2" style={{backgroundImage: 'url(/coffee-hero.jpg)'}}>
        <div className="absolute inset-0 bg-gradient-to-t from-[#7c5e3c]/80 to-transparent rounded-b-3xl" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg tracking-tight font-serif">Calle Aroma</h1>
          <p className="text-2xl mb-8 drop-shadow font-light">Where every cup is a work of art</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link href="/menu">
              <button className="bg-[#e4c59e] hover:bg-[#d2b48c] text-[#7c5e3c] font-bold px-10 py-4 rounded-full shadow-xl text-lg transition-all duration-200">Explore Menu</button>
            </Link>
            <button className="bg-[#7c5e3c] hover:bg-[#a68a64] text-white font-bold px-10 py-4 rounded-full shadow-xl text-lg transition-all duration-200">Order Now</button>
          </div>
        </div>
      </section>

      {/* About & Location Section */}
      <section className="max-w-4xl mx-auto py-16 px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#7c5e3c] mb-4 font-serif">About Calle Aroma</h2>
          <p className="text-[#a68a64] mb-4 text-lg">
            Calle Aroma is more than just a coffee shop—it&apos;s a cozy haven for coffee lovers and friends. Our mission is to serve the finest brews, delicious pastries, and create a welcoming space for the community. Whether you&apos;re here to work, relax, or catch up, you&apos;ll always find a warm smile and the aroma of freshly ground beans.
          </p>
          <p className="text-[#a68a64] text-lg">
            <span className="font-semibold">Open Hours:</span> Mon–Sat: 7am–8pm, Sun: 8am–6pm
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <h3 className="text-xl font-semibold text-[#7c5e3c] mb-2">Visit Us</h3>
          <p className="text-[#a68a64] mb-2">123 Coffee Lane, Brewtown</p>
          <iframe
            title="Calle Aroma Location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=121.0000%2C14.5000%2C121.0100%2C14.5100&amp;layer=mapnik"
            className="w-full h-48 rounded-lg border-2 border-[#e4c59e] shadow"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Featured Drinks */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-[#7c5e3c] mb-10 text-center font-serif">Featured Drinks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform">
            <Image src="/featured1.jpg" alt="Cappuccino Delight" width={120} height={120} className="rounded-full mb-4 shadow-lg" />
            <h3 className="text-2xl font-semibold mb-2 text-[#7c5e3c]">Cappuccino Delight</h3>
            <p className="text-[#a68a64] text-center">Rich espresso topped with a cloud of frothy milk.</p>
          </div>
          <div className="bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform">
            <Image src="/featured2.jpg" alt="Iced Mocha Bliss" width={120} height={120} className="rounded-full mb-4 shadow-lg" />
            <h3 className="text-2xl font-semibold mb-2 text-[#7c5e3c]">Iced Mocha Bliss</h3>
            <p className="text-[#a68a64] text-center">Decadent espresso and chilled cocoa with a touch of cream.</p>
          </div>
          <div className="bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform">
            <Image src="/featured3.jpg" alt="Matcha Magic" width={120} height={120} className="rounded-full mb-4 shadow-lg" />
            <h3 className="text-2xl font-semibold mb-2 text-[#7c5e3c]">Matcha Magic</h3>
            <p className="text-[#a68a64] text-center">Smooth and earthy matcha balanced with creamy milk.</p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="max-w-6xl mx-auto pb-20 px-4">
        <h2 className="text-4xl font-bold text-[#7c5e3c] mb-10 text-center font-serif">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white/90 rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-2 text-[#7c5e3c]">Coffee Tasting Weekend</h3>
            <p className="text-[#a68a64] mb-2">Join us for a weekend of exploration and discovery of new coffee flavors.</p>
            <span className="text-[#bfa074] text-sm">Aug 30 - Sep 1</span>
          </div>
          <div className="bg-white/90 rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-2 text-[#7c5e3c]">Barista Workshop</h3>
            <p className="text-[#a68a64] mb-2">Enhance your coffee-making skills with our expert baristas.</p>
            <span className="text-[#bfa074] text-sm">Sep 10</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-6 bg-white/80 text-[#a68a64] font-medium tracking-wide shadow-inner mt-auto">
  &copy; {new Date().getFullYear()} Calle Aroma. All rights reserved.
      </footer>
    </main>
  );
}

  