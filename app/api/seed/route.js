import connectDB from "@/lib/db";
import Products from "@/app/models/Products";
import OpenAI from "openai";
const openai = new OpenAI({apiKey:process.env.OPENAI_KEY});

async function genrateVector(text) {
  const response  = await openai.embeddings.create({
    model: "text - embedding-3-small",
    input:text,
  });
  return response.data[0].embedding;
}

export async function GET() {
  await connectDB();
  await Products.deleteMany();
  const products = [
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
    }, {
      title: "Premium Wireless Noise Cancelling Over-Ear Bluetooth Headphones with 40 Hour Battery Life",
      description: "Experience immersive audio with advanced active noise cancellation, deep bass sound, Bluetooth 5.3 connectivity, memory foam ear cushions, built-in microphone, and up to 40 hours of battery life for travel, work, gaming, and entertainment.",
      image: "https://picsum.photos/400/300",
      price: 149.99,
      category: "electronics"
    },
    {
      title: "Ultra Lightweight Men's Running Shoes for Gym Training Walking and Daily Exercise",
      description: "Designed for athletes and fitness enthusiasts, these breathable running shoes provide superior cushioning, excellent grip, lightweight comfort, and long-lasting durability for jogging, workouts, walking, and sports activities.",
      image: "https://picsum.photos/400/300",
      price: 84.99,
      category: "footwear"
    },
    {
      title: "Professional Ergonomic Mesh Office Chair with Adjustable Lumbar Support and Headrest",
      description: "Improve posture and productivity with this ergonomic office chair featuring breathable mesh fabric, adjustable armrests, lumbar support, reclining backrest, and a comfortable headrest for long working hours.",
      image: "https://picsum.photos/400/300",
      price: 219.99,
      category: "furniture"
    },
    {
      title: "Water Resistant Laptop Backpack with USB Charging Port and Anti Theft Design",
      description: "A spacious travel and business backpack with dedicated laptop compartment, multiple storage pockets, USB charging support, water-resistant material, and anti-theft features for students and professionals.",
      image: "https://picsum.photos/400/300",
      price: 59.99,
      category: "bags"
    },
    {
      title: "Smart Fitness Watch with Heart Rate Monitoring Sleep Tracking and Sports Modes",
      description: "Track your daily activity, heart rate, calories burned, sleep quality, workout sessions, and smartphone notifications with this advanced fitness smartwatch featuring a vibrant touch display.",
      image: "https://picsum.photos/400/300",
      price: 99.99,
      category: "fitness"
    },
    {
      title: "Portable Fast Charging 20000mAh Power Bank with USB-C and Dual USB Output",
      description: "Keep your devices powered throughout the day with this high-capacity power bank featuring fast charging technology, USB-C support, dual output ports, and compact travel-friendly design.",
      image: "https://picsum.photos/400/300",
      price: 49.99,
      category: "electronics"
    },
    {
      title: "Men's Premium Cotton Graphic Printed Oversized T-Shirt for Casual Everyday Wear",
      description: "Made from soft breathable cotton fabric, this oversized graphic t-shirt delivers maximum comfort and modern streetwear style, perfect for casual outings, travel, and daily wear.",
      image: "https://picsum.photos/400/300",
      price: 24.99,
      category: "clothing"
    },
    {
      title: "Adjustable Height LED Study Desk Lamp with Touch Controls and Eye Protection Technology",
      description: "Reduce eye strain while studying or working with this energy-efficient LED desk lamp featuring adjustable brightness levels, touch controls, flexible positioning, and eye-care lighting technology.",
      image: "https://picsum.photos/400/300",
      price: 34.99,
      category: "home"
    },
    {
      title: "Mechanical RGB Gaming Keyboard with Hot Swappable Switches and Customizable Lighting",
      description: "Enhance your gaming and typing experience with tactile mechanical switches, customizable RGB lighting effects, anti-ghosting technology, and durable keycaps designed for long-term performance.",
      image: "https://picsum.photos/400/300",
      price: 94.99,
      category: "electronics"
    },
    {
      title: "Premium Stainless Steel Vacuum Insulated Water Bottle for Travel Gym and Outdoor Activities",
      description: "Double-wall vacuum insulation keeps beverages hot or cold for extended periods, while the leak-proof design and durable stainless steel construction make it perfect for everyday use.",
      image: "https://picsum.photos/400/300",
      price: 22.99,
      category: "home"
    },
    {
      title: "Professional Adjustable Dumbbell Set for Home Gym Strength Training and Muscle Building",
      description: "Perform a wide range of exercises with this adjustable dumbbell set featuring durable construction, secure locking mechanism, and customizable weight options for effective home workouts.",
      image: "https://picsum.photos/400/300",
      price: 129.99,
      category: "fitness"
    },
    {
      title: "High Speed External Solid State Drive with USB-C Connectivity and Portable Design",
      description: "Transfer files quickly and securely with this compact external SSD offering high-speed performance, USB-C compatibility, shock resistance, and reliable storage for professionals and gamers.",
      image: "https://picsum.photos/400/300",
      price: 139.99,
      category: "electronics"
    },{
  title: "Advanced Smart Watch with Fitness Tracking Heart Rate Monitor and Smartphone Notifications",
  description: "Stay connected and monitor your health with this smartwatch featuring heart rate monitoring, sleep tracking, step counting, calorie tracking, workout modes, Bluetooth connectivity, call alerts, and smartphone notifications.",
  image: "https://picsum.photos/400/300",
  price: 129.99,
  category: "electronics"
},
{
  title: "True Wireless Bluetooth Earbuds with Noise Isolation and Long Battery Life",
  description: "Enjoy crystal clear audio, deep bass sound, Bluetooth connectivity, touch controls, noise isolation, charging case, and long-lasting battery performance for music, calls, gaming, and workouts.",
  image: "https://picsum.photos/400/300",
  price: 89.99,
  category: "electronics"
},
{
  title: "Professional RGB Gaming Mouse with Adjustable DPI and Ergonomic Design",
  description: "High-performance gaming mouse featuring RGB lighting, adjustable DPI settings, programmable buttons, ergonomic grip, precision optical sensor, and fast response time for gaming and productivity.",
  image: "https://picsum.photos/400/300",
  price: 39.99,
  category: "electronics"
},
{
  title: "Portable Bluetooth Speaker with Deep Bass Stereo Sound and Waterproof Design",
  description: "Wireless Bluetooth speaker delivering powerful stereo audio, deep bass, waterproof construction, long battery life, portable design, and seamless connectivity for indoor and outdoor use.",
  image: "https://picsum.photos/400/300",
  price: 49.99,
  category: "electronics"
},
{
  title: "Fast Charging Wireless Charger Pad Compatible with Android and iPhone Devices",
  description: "Convenient wireless charging solution with fast charging support, smart protection technology, USB-C connectivity, and compatibility with modern Android smartphones and iPhones.",
  image: "https://picsum.photos/400/300",
  price: 27.99,
  category: "electronics"
},
{
  title: "Professional Fitness Tracker Smart Band with Activity Monitoring and Sleep Analysis",
  description: "Track daily activity, calories burned, heart rate, sleep quality, fitness goals, workout performance, and smartphone notifications with this lightweight fitness tracker.",
  image: "https://picsum.photos/400/300",
  price: 79.99,
  category: "fitness"
},{
  title: "4K Ultra HD Smart Television with Voice Control and Streaming Applications",
  description: "Enjoy movies, sports, gaming, and streaming services with crystal-clear 4K resolution, HDR support, voice assistant integration, and smart connectivity features.",
  image: "https://picsum.photos/400/300",
  price: 599.99,
  category: "electronics"
},
{
  title: "Professional DSLR Camera for Photography Content Creation and Video Recording",
  description: "Capture stunning photos and videos with advanced autofocus, high-resolution image sensor, interchangeable lenses, and professional photography features.",
  image: "https://picsum.photos/400/300",
  price: 899.99,
  category: "electronics"
},
{
  title: "Electric Treadmill for Home Gym Cardio Training and Weight Loss Workouts",
  description: "Powerful treadmill with adjustable speed settings, fitness tracking display, cardio training programs, calorie monitoring, and foldable design for home workouts.",
  image: "https://picsum.photos/400/300",
  price: 499.99,
  category: "fitness"
},
{
  title: "Premium Recliner Sofa Chair with Adjustable Backrest and Foot Support",
  description: "Comfortable recliner chair designed for relaxation, movie watching, gaming, reading, and home entertainment with adjustable reclining positions.",
  image: "https://picsum.photos/400/300",
  price: 349.99,
  category: "furniture"
},
{
  title: "Professional Chef Knife Set with Stainless Steel Blades and Wooden Storage Block",
  description: "Complete kitchen knife collection featuring razor-sharp stainless steel blades, ergonomic handles, and wooden storage block for cooking enthusiasts.",
  image: "https://picsum.photos/400/300",
  price: 89.99,
  category: "home"
},
{
  title: "Portable Camping Tent for Outdoor Adventures Hiking and Family Trips",
  description: "Weather-resistant camping tent suitable for outdoor travel, hiking, trekking, backpacking, and family camping experiences.",
  image: "https://picsum.photos/400/300",
  price: 149.99,
  category: "outdoor"
}
  ];
  const productsWithVectors = await Promise.all(product.map(async(product) =>{
    const embedding = await genrateVector(`${product.description} ${product.catagory} ${product.title}`);
    return {...product,embedding}; 
  })) 
  const productsWithRandomImage = products.map((p) => ({
    ...p,
    image: `${p.image}?random=${Math.floor(Math.random() * 1e9)}`,
  }));

  await Products.insertMany(productsWithRandomImage);
  return Response.json({ message: "Products seeded successfully" });
}