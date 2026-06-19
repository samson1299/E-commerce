"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    load();
    function onCartUpdate() {
      load();
    }
    window.addEventListener("cartUpdated", onCartUpdate);
    window.addEventListener("storage", onCartUpdate);
    return () => {
      window.removeEventListener("cartUpdated", onCartUpdate);
      window.removeEventListener("storage", onCartUpdate);
    };
  }, []);

  function load() {
    try {
      const raw = localStorage.getItem("cart");
      setCart(raw ? JSON.parse(raw) : []);
    } catch {
      setCart([]);
    }
  }

  function updateQty(item, delta) {
    const next = cart.map((c) => {
      if (String(c._id) === String(item._id)) {
        const q = (c.quantity || 1) + delta;
        return { ...c, quantity: q > 0 ? q : 1 };
      }
      return c;
    });
    localStorage.setItem("cart", JSON.stringify(next));
    window.dispatchEvent(new CustomEvent("cartUpdated", { detail: next }));
    setCart(next);
  }

  function removeItem(item) {
    const next = cart.filter((c) => String(c._id) !== String(item._id));
    localStorage.setItem("cart", JSON.stringify(next));
    window.dispatchEvent(new CustomEvent("cartUpdated", { detail: next }));
    setCart(next);
  }

  const total = cart.reduce((s, i) => s + (i.price || 0) * (i.quantity || 1), 0).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
        {cart.length === 0 ? (
          <div className="py-8 text-center text-gray-600">
            Your cart is empty. <Link href="/">Continue shopping</Link>
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item._id} className="flex items-center gap-4 border rounded p-3">
                <div className="w-24 h-24 relative">
                  <Image src={item.image} alt={item.title} fill className="object-cover rounded" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">{item.title}</div>
                  <div className="text-sm text-gray-500">${item.price} x {item.quantity || 1}</div>
                  <div className="mt-2 flex items-center gap-2">
                    <button onClick={() => updateQty(item, -1)} className="px-2 py-1 bg-gray-100 rounded">-</button>
                    <button onClick={() => updateQty(item, 1)} className="px-2 py-1 bg-gray-100 rounded">+</button>
                    <button onClick={() => removeItem(item)} className="ml-4 text-sm text-red-600">Remove</button>
                  </div>
                </div>
                <div className="text-right font-semibold">${((item.price || 0) * (item.quantity || 1)).toFixed(2)}</div>
              </div>
            ))}

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="text-lg font-medium">Total</div>
              <div className="text-xl font-bold text-indigo-600">${total}</div>
            </div>

            <div className="pt-4">
              <Link href="/checkout" className="block w-full text-center bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">Proceed to Checkout</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
