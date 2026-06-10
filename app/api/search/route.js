import OpenAI from "openai";
import connectDB from "@/lib/db";
import Products from "@/app/models/Products";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(request) {
  try {
  
    const {query}  = await request.json();

   const completion = await client.chat.completions.create({
  model: "llama-3.3-70b-versatile",
  messages: [
    { role: "system", content: "Extract only the products keyword . Return only the keyword and nothing else" },
    {
      role:"user",
      content:query,
    },
  ],
});
console.log(completion.choices[0].message.content);
const keyword = completion.choices[0].message.content.trim();

    await connectDB();
    const products = await Products.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
      ],
    });

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