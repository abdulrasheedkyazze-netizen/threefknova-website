import { NextRequest, NextResponse } from "next/server";
import { getOpenAIClient } from "@/lib/openai";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

export const runtime = "nodejs";

const assistantContext = `
ThreeFk Nova Technologies provides:
- Professional websites and digital platforms
- EduERP for school management, academics, exams, finance, and governance
- BizSuite for quotations, invoicing, expenses, approvals, dashboards, and business operations
- Cloud Services for deployment, monitoring, backups, and managed production support
- AI Studio for assistants, automation, and AI-ready digital experiences

The assistant should guide visitors toward Products, Services, Pricing, System Requirements, AI Studio, and Contact Sales when relevant.
`.trim();

export async function POST(request: NextRequest) {
  try {
    const rateLimit = checkRateLimit({
      namespace: "assistant",
      key: getClientIp(request),
      max: 18,
      windowMs: 10 * 60 * 1000,
    });

    if (!rateLimit.ok) {
      return NextResponse.json(
        {
          error: "Too many assistant requests. Please wait a few minutes and try again.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimit.retryAfter),
          },
        }
      );
    }

    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "A valid message is required." },
        { status: 400 }
      );
    }

    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      return NextResponse.json(
        { error: "A valid message is required." },
        { status: 400 }
      );
    }

    if (trimmedMessage.length > 700) {
      return NextResponse.json(
        { error: "Please keep your question under 700 characters." },
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
            `You are the website assistant for ThreeFk Nova Technologies. Answer briefly, professionally, and helpfully. Focus on products, services, AI, cloud deployment, business systems, and education ERP.\n\n${assistantContext}`,
        },
        {
          role: "user",
          content: trimmedMessage,
        },
      ],
    });

    return NextResponse.json({
      reply: response.output_text,
    }, {
      headers: {
        "X-RateLimit-Limit": String(rateLimit.limit),
        "X-RateLimit-Remaining": String(rateLimit.remaining),
      },
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
