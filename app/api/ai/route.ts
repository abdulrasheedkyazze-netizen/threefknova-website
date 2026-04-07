import { NextResponse } from "next/server";
import { getOpenAIClient } from "@/lib/openai";

export const runtime = "nodejs";

const fallback = [
  {
    title: "ThreeFk Nova digital platform active",
    detail: "The website is live and ready to present products, services, and AI-led digital experiences.",
    tone: "Platform",
  },
  {
    title: "EduERP growth-ready",
    detail: "School management capabilities are positioned for institutions seeking structured digital transformation.",
    tone: "Education",
  },
  {
    title: "BizSuite business visibility",
    detail: "Business workflow tools are ready for organizations that need stronger process control and reporting.",
    tone: "Operations",
  },
];

export async function GET() {
  try {
    const client = getOpenAIClient();

    if (!client || !process.env.OPENAI_MODEL) {
      return NextResponse.json({
        items: fallback,
        source: "fallback",
        updatedAt: new Date().toISOString(),
      });
    }

    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL,
      input: [
        {
          role: "system",
          content:
            "You are generating concise homepage insight cards for ThreeFk Nova Technologies, a professional technology company focused on websites, business systems, education ERP, cloud services, and AI. Return valid JSON only.",
        },
        {
          role: "user",
          content:
            "Generate exactly 3 homepage insight cards. Each item must have title, detail, and tone. Keep them professional, short, modern, and relevant to product growth, AI readiness, cloud deployment, and digital transformation.",
        },
      ],
      text: {
        format: {
          type: "json_schema",
          name: "homepage_insights",
          schema: {
            type: "object",
            properties: {
              items: {
                type: "array",
                minItems: 3,
                maxItems: 3,
                items: {
                  type: "object",
                  properties: {
                    title: { type: "string" },
                    detail: { type: "string" },
                    tone: { type: "string" },
                  },
                  required: ["title", "detail", "tone"],
                  additionalProperties: false,
                },
              },
            },
            required: ["items"],
            additionalProperties: false,
          },
        },
      },
    });

    const output = JSON.parse(response.output_text);

    return NextResponse.json({
      items: output.items,
      source: "openai",
      updatedAt: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json({
      items: fallback,
      source: "fallback",
      updatedAt: new Date().toISOString(),
    });
  }
}
