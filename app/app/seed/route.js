import connectDB from "@/lib/lb";
import Products from "@/app/models/Products";
export async function GET() {
  await connectDB();
  const products = await Products.find();
  await Products.deleteMany();

  await Products.insertMany([
    {
      title: "Blue T-shirt",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
      image: "https://picsum.photos/400/300",
      price: 19.99,
      category: "clothing"
    },
    {
      title: "black shirt",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
      image: "https://picsum.photos/400/300",
      price: 29.99,
      category: "clothing"
    },
  ])
  return Response.json({ message: "Products seeded successfully" });
}