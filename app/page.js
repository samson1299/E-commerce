"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    }
    load();
  }, []);

const handleSearch = async () => {
  try {
    setLoading(true);
    const res = await fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const data = await res.json();
    setProducts(data);
  } catch (err) {
    console.log("Search error:", err);
  }finally{
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-gray-100 p-6 ">
      <h1 className="text-3xl font-semibold mb-6 text-center">Products</h1>
      <div className="flex justify-center items-center gap-3 mb-6">
        <input onChange={(e) => setQuery(e.target.value)} type="text" value={query} placeholder="Search products..." className="w-full max-w-md rounded-lg border border-slate-400 bg-white p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300" />
        <button onClick={handleSearch} className="rounded-lg bg-gray-500 px-4 py-2 text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 cursor-pointer " disabled={loading} >{loading ? "Searching...":"Search"}</button>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products && products.length > 0 ? (
            products.map((p) => (
              <div
                key={p._id}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-medium mb-1">{p.title}</h2>
                  <p className="text-sm text-gray-500 mb-2 line-clamp-2">{p.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-indigo-600 font-semibold">${p.price}</span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{p.category}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600">Loading products...</p>
          )}
        </div>
      </div>
    </div>
  );
}
