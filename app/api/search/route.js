import OpenAI from "openai";
import connectDB from "@/lib/db";
import Products from "@/app/models/Products";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(request) {
  try {

    const { query } = await request.json();

    const QueryEmbedding = embeddingRes.data[0].embedding; 
    await connectDB();
    const products = await Products.find({
  $or: [
    ...keywords.map((k) => ({
      title: { $regex: k, $options: "i" },
    })),
    ...keywords.map((k) => ({
      description: { $regex: k, $options: "i" },
    })),
    ...keywords.map((k) => ({
      category: { $regex: k, $options: "i" },
    })),
  ],
}).limit(20);


    return Response.json(products);
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}