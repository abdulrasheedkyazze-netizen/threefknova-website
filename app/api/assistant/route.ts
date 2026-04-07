import { NextRequest, NextResponse } from "next/server";
import { getOpenAIClient } from "@/lib/openai";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "A valid message is required." },
        { status: 400 }
      );
    }

    const client = getOpenAIClient();

    if (!client || !process.env.OPENAI_MODEL) {
      return NextResponse.json({
        reply:
          "The ThreeFk Nova assistant is not fully connected yet. For now, please explore our Products, Services, AI Studio, and Contact pages.",
      });
    }

    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL,
      input: [
        {
          role: "system",
          content:
            "You are the website assistant for ThreeFk Nova Technologies. Answer briefly, professionally, and helpfully. Focus on products, services, AI, cloud deployment, business systems, and education ERP.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    return NextResponse.json({
      reply: response.output_text,
    });
  } catch {
    return NextResponse.json(
      {
        reply:
          "The assistant is temporarily unavailable. Please try again shortly.",
      },
      { status: 200 }
    );
  }
}
