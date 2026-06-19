"use client";
import { useState } from "react";

export default function AddToCartButton({ product }) {
  const [added, setAdded] = useState(false);

  function addToCart() {
    try {
      const raw = localStorage.getItem("cart");
      let cart = raw ? JSON.parse(raw) : [];
      const existing = cart.find((i) => String(i._id) === String(product._id));
      if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      window.dispatchEvent(new CustomEvent("cartUpdated", { detail: cart }));
      setAdded(true);
      setTimeout(() => setAdded(false), 1200);
    } catch (err) {
      console.error("Add to cart error", err);
    }
  }

  return (
    <button
      onClick={addToCart}
      className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
    >
      {added ? "Added" : "Add to cart"}
    </button>
  );
}
