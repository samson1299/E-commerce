"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart");
      setCart(raw ? JSON.parse(raw) : []);
    } catch {
      setCart([]);
    }
  }, []);

  const total = cart.reduce((s, i) => s + (i.price || 0) * (i.quantity || 1), 0);

  async function placeOrder() {
    if (!name || !email || !address) {
      alert("Please fill name, email and address");
      return;
    }
    if (cart.length === 0) {
      alert("Your cart is empty");
      return;
    }

    const payload = {
      items: cart.map((i) => ({ _id: i._id, title: i.title, price: i.price, quantity: i.quantity || 1, image: i.image })),
      name,
      email,
      address,
      total,
    };

    try {
      setLoading(true);
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to create order");
      const result = await res.json();
      localStorage.removeItem("cart");
      window.dispatchEvent(new CustomEvent("cartUpdated", { detail: [] }));
      alert("Order placed successfully: " + (result._id || ""));
      alert("Thank you for your order!");
      router.push("/");
    } catch (err) {
      console.error(err);
      alert("Failed to place order");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
        <p className="text-gray-600 mb-4">Review your cart and complete payment.</p>

        <div className="border rounded p-4 mb-4">
          {cart.length === 0 ? (
            <p className="text-sm text-gray-500">Your cart is empty.</p>
          ) : (
            <div className="space-y-2">
              {cart.map((item) => (
                <div key={item._id} className="flex justify-between text-sm">
                  <div>{item.title} x {item.quantity || 1}</div>
                  <div>${((item.price || 0) * (item.quantity || 1)).toFixed(2)}</div>
                </div>
              ))}
              <div className="flex justify-between font-semibold pt-2 border-t"> <div>Total</div> <div>${total.toFixed(2)}</div> </div>
            </div>
          )}
        </div>

        <div className="space-y-3 mb-4">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className="w-full border p-2 rounded" />
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full border p-2 rounded" />
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Shipping address" className="w-full border p-2 rounded" />
        </div>

        <button disabled={loading} onClick={placeOrder} className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
          {loading ? "Placing order..." : "Proceed to payment"}
        </button>
      </div>
    </div>
  );
}
