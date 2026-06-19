"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

function getCartCount() {
  try {
    const raw = localStorage.getItem("cart");
    if (!raw) return 0;
    const cart = JSON.parse(raw);
    return cart.reduce((s, i) => s + (i.quantity || 1), 0);
  } catch {
    return 0;
  }
}

export default function Navbar() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(getCartCount());

    function onCartUpdate(e) {
      setCount(getCartCount());
    }

    window.addEventListener("cartUpdated", onCartUpdate);
    window.addEventListener("storage", onCartUpdate);
    return () => {
      window.removeEventListener("cartUpdated", onCartUpdate);
      window.removeEventListener("storage", onCartUpdate);
    };
  }, []);

  return (
    <header className="w-full bg-white  shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-indigo-600">Marketplace</Link>
        <nav className="flex items-center gap-4">
          <Link href="/" className="text-sm text-gray-700 hover:text-indigo-600">Home</Link>
          <Link href="/cart" className="text-sm text-gray-700 hover:text-indigo-600 flex items-center gap-2">Cart
            <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-xs">{count}</span>
          </Link>
          <Link href="/checkout" className="text-sm text-gray-700 hover:text-indigo-600">Checkout</Link>
          <Link href="/about" className="text-sm text-gray-700 hover:text-indigo-600">About</Link>
          <Link href="/account" className="text-sm text-gray-700 hover:text-indigo-600">Account</Link>
        </nav>
      </div>
    </header>
  );
}
