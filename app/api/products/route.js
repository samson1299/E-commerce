import connectDB from "@/lib/db"; 
import Products from "@/app/models/Products";

export async function GET(){
    await connectDB();
    const products = await Products.find();
    return Response.json(products)
}