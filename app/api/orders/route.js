import connectDB from "@/lib/db";
import Order from "@/app/models/Order";

export async function POST(request) {
  try {
    const data = await request.json();
    await connectDB();
    const order = await Order.create(data);
    return Response.json(order);
  } catch (err) {
    console.error("Order create error", err);
    return new Response(JSON.stringify({ error: "Failed to create order" }), { status: 500 });
  }
}
