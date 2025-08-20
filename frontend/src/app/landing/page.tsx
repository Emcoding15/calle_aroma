"use client";

import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-300">
      <section className="text-center p-8 rounded-lg shadow-lg bg-white/80 max-w-2xl">
        <h1 className="text-5xl font-bold mb-4 text-brown-900">Welcome to Brewed Bliss</h1>
        <p className="text-xl mb-6 text-brown-700">Your neighborhood coffee shop for the perfect cup, every time.</p>
        <Image
          src="/coffee-hero.jpg"
          alt="Coffee Shop Hero"
          width={500}
          height={300}
          className="mx-auto rounded-lg mb-6 shadow"
        />
        <Link href="/menu">
          <button className="bg-brown-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-brown-800 transition">View Menu</button>
        </Link>
      </section>
      <section className="mt-12 max-w-xl text-center">
        <h2 className="text-2xl font-bold mb-2 text-brown-800">About Us</h2>
        <p className="text-brown-700 mb-4">At Brewed Bliss, we believe in quality, community, and comfort. Enjoy our hand-crafted drinks, cozy atmosphere, and friendly service. Whether you’re here to work, relax, or catch up with friends, we’re happy to serve you!</p>
      </section>
    </main>
  );
}
