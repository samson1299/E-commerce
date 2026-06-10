import connectDB from "@/lib/db";
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
      category: "clothing",
    },
    {
      title: "black shirt",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
      image: "https://picsum.photos/400/300",
      price: 29.99,
      category: "clothing"
    },
    {
      title: "White Sneakers",
      description: "Lightweight sneakers with modern design.",
      image: "https://picsum.photos/400/300",
      price: 59.99,
      category: "footwear"
    },
    {
      title: "Running Shoes",
      description: "Durable shoes designed for running and workouts.",
      image: "https://picsum.photos/400/300",
      price: 69.99,
      category: "footwear"
    },
    {
      title: "Denim Jacket",
      description: "Classic denim jacket for all seasons.",
      image: "https://picsum.photos/400/300",
      price: 49.99,
      category: "clothing"
    },
    {
      title: "Leather Wallet",
      description: "Premium leather wallet with multiple compartments.",
      image: "https://picsum.photos/400/300",
      price: 24.99,
      category: "accessories"
    },
    {
      title: "Smart Watch",
      description: "Track fitness and notifications on the go.",
      image: "https://picsum.photos/400/300",
      price: 129.99,
      category: "electronics"
    },
    {
      title: "Wireless Earbuds",
      description: "Crystal clear sound with long battery life.",
      image: "https://picsum.photos/400/300",
      price: 89.99,
      category: "electronics"
    },
    {
      title: "Gaming Mouse",
      description: "Ergonomic gaming mouse with RGB lighting.",
      image: "https://picsum.photos/400/300",
      price: 39.99,
      category: "electronics"
    },
    {
      title: "Mechanical Keyboard",
      description: "Responsive keyboard with tactile switches.",
      image: "https://picsum.photos/400/300",
      price: 79.99,
      category: "electronics"
    },
    {
      title: "Laptop Backpack",
      description: "Spacious backpack with laptop compartment.",
      image: "https://picsum.photos/400/300",
      price: 44.99,
      category: "bags"
    },
    {
      title: "Travel Bag",
      description: "Large capacity bag for short trips.",
      image: "https://picsum.photos/400/300",
      price: 54.99,
      category: "bags"
    },
    {
      title: "Sunglasses",
      description: "UV-protected stylish sunglasses.",
      image: "https://picsum.photos/400/300",
      price: 19.99,
      category: "accessories"
    },
    {
      title: "Baseball Cap",
      description: "Comfortable cap for outdoor activities.",
      image: "https://picsum.photos/400/300",
      price: 14.99,
      category: "accessories"
    },
    {
      title: "Formal Shoes",
      description: "Elegant shoes for office and events.",
      image: "https://picsum.photos/400/300",
      price: 74.99,
      category: "footwear"
    },
    {
      title: "Sports Trousers",
      description: "Flexible trousers for workouts and jogging.",
      image: "https://picsum.photos/400/300",
      price: 34.99,
      category: "clothing"
    },
    {
      title: "Hoodie",
      description: "Warm hoodie made from premium fabric.",
      image: "https://picsum.photos/400/300",
      price: 39.99,
      category: "clothing"
    },
    {
      title: "Bluetooth Speaker",
      description: "Portable speaker with deep bass.",
      image: "https://picsum.photos/400/300",
      price: 49.99,
      category: "electronics"
    },
    {
      title: "Phone Stand",
      description: "Adjustable stand for smartphones.",
      image: "https://picsum.photos/400/300",
      price: 9.99,
      category: "electronics"
    },
    {
      title: "Power Bank",
      description: "10000mAh portable charging solution.",
      image: "https://picsum.photos/400/300",
      price: 29.99,
      category: "electronics"
    },
    {
      title: "Coffee Mug",
      description: "Ceramic mug perfect for coffee lovers.",
      image: "https://picsum.photos/400/300",
      price: 12.99,
      category: "home"
    },
    {
      title: "Desk Lamp",
      description: "LED desk lamp with adjustable brightness.",
      image: "https://picsum.photos/400/300",
      price: 22.99,
      category: "home"
    },
    {
      title: "Water Bottle",
      description: "Reusable stainless steel water bottle.",
      image: "https://picsum.photos/400/300",
      price: 15.99,
      category: "home"
    },
    {
      title: "Yoga Mat",
      description: "Non-slip yoga mat for exercise routines.",
      image: "https://picsum.photos/400/300",
      price: 25.99,
      category: "fitness"
    },
    {
      title: "Dumbbell Set",
      description: "Adjustable dumbbells for strength training.",
      image: "https://picsum.photos/400/300",
      price: 99.99,
      category: "fitness"
    },
    {
      title: "Protein Shaker",
      description: "Leak-proof shaker bottle for supplements.",
      image: "https://picsum.photos/400/300",
      price: 11.99,
      category: "fitness"
    },
    {
      title: "Office Chair",
      description: "Ergonomic chair with lumbar support.",
      image: "https://picsum.photos/400/300",
      price: 149.99,
      category: "furniture"
    },
    {
      title: "Study Table",
      description: "Modern wooden study desk.",
      image: "https://picsum.photos/400/300",
      price: 199.99,
      category: "furniture"
    },
    {
      title: "Monitor Stand",
      description: "Raise your monitor for better posture.",
      image: "https://picsum.photos/400/300",
      price: 18.99,
      category: "furniture"
    },
    {
      title: "Gaming Headset",
      description: "Immersive sound with noise cancellation.",
      image: "https://picsum.photos/400/300",
      price: 69.99,
      category: "electronics"
    },
    {
      title: "USB Hub",
      description: "Expand connectivity with multiple ports.",
      image: "https://picsum.photos/400/300",
      price: 24.99,
      category: "electronics"
    },
    {
      title: "External SSD",
      description: "Fast and portable storage solution.",
      image: "https://picsum.photos/400/300",
      price: 119.99,
      category: "electronics"
    },
    {
      title: "Graphic T-Shirt",
      description: "Trendy graphic print cotton t-shirt.",
      image: "https://picsum.photos/400/300",
      price: 21.99,
      category: "clothing"
    },
    {
      title: "Cargo Pants",
      description: "Utility cargo pants with multiple pockets.",
      image: "https://picsum.photos/400/300",
      price: 42.99,
      category: "clothing"
    },
    {
      title: "Winter Jacket",
      description: "Heavy-duty jacket for cold weather.",
      image: "https://picsum.photos/400/300",
      price: 89.99,
      category: "clothing"
    },
    {
      title: "Beanie",
      description: "Soft knitted beanie for winter.",
      image: "https://picsum.photos/400/300",
      price: 13.99,
      category: "accessories"
    },
    {
      title: "Fitness Tracker",
      description: "Track steps, calories and sleep patterns.",
      image: "https://picsum.photos/400/300",
      price: 79.99,
      category: "fitness"
    },
    {
      title: "Wireless Charger",
      description: "Fast wireless charging pad.",
      image: "https://picsum.photos/400/300",
      price: 27.99,
      category: "electronics"
    },
    {
      title: "Tablet Stand",
      description: "Foldable stand for tablets and phones.",
      image: "https://picsum.photos/400/300",
      price: 16.99,
      category: "electronics"
    },
    {
      title: "Notebook Set",
      description: "Premium notebooks for notes and planning.",
      image: "https://picsum.photos/400/300",
      price: 17.99,
      category: "stationery"
    },
  ])
  return Response.json({ message: "Products seeded successfully" });
}