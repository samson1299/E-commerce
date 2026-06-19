import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold mb-4">About Marketplace</h1>
        <p className="text-gray-700 mb-6">
          Marketplace is a demo e-commerce storefront showcasing products, cart
          handling, and ordering. This About page contains placeholder copy
          and images pulled from Unsplash for visual demo purposes.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded as a simple demo project, Marketplace highlights a minimal
            shopping experience built with Next.js and MongoDB. We focus on a
            clean UI, fast performance, and a developer-friendly codebase.
          </p>
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80&auto=format&fit=crop"
            alt="Team working"
            className="w-full h-64 object-cover rounded mb-2"
          />
          <div className="text-sm text-gray-500">Team collaborating on product ideas</div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Mission</h2>
          <p className="text-gray-600 mb-4">
            Our mission is to provide a simple, extendable example app for
            learning modern web development patterns. Use the codebase as a
            starting point for your own projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <img
                src="https://images.unsplash.com/photo-1505685296765-3a2736de412f?w=800&q=80&auto=format&fit=crop"
                alt="Office"
                className="w-full h-40 object-cover rounded"
              />
              <div className="text-sm text-gray-500 mt-2">Our office space</div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&q=80&auto=format&fit=crop"
                alt="Product showcase"
                className="w-full h-40 object-cover rounded"
              />
              <div className="text-sm text-gray-500 mt-2">Sample product showcase</div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p className="text-gray-600">For demo purposes, reach out at demo@example.com</p>
        </section>
      </div>
    </div>
  );
}
