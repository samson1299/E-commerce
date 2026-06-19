import connectDB from "@/lib/db";
import Products from "@/app/models/Products";
import Image from "next/image";
import AddToCartButton from "@/app/components/AddToCartButton";

export default async function ProductPage({ params }) {
  const { id } = params;
  await connectDB();
  const prod = await Products.findById(id).lean();
  if (!prod) return <div className="p-6">Product not found</div>;
  const product = JSON.parse(JSON.stringify(prod));

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="w-full h-80 relative">
          <Image src={product.image} alt={product.title} fill className="object-cover rounded" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="text-xl font-bold text-indigo-600 mb-4">${product.price}</div>
          <div className="text-sm text-gray-500 mb-4">Category: {product.category}</div>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
