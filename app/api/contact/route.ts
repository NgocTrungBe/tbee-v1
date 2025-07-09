import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    if (!data)
      return NextResponse.json({ error: "Internal error" }, { status: 500 });

    const formData = {
      access_key: process.env.WEB3FORM_ACCESS_KEY,
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      message: data.message,
      subject: "Tbee – Someone wants to contact you",
      from_name: "Tbee Portfolio",
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (!res.ok) {
      return NextResponse.json({ error: result.message }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Sent successfully!" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        error: {
          type: "Internal error",
          detail: err instanceof Error ? err.message : String(err),
        },
      },
      { status: 500 }
    );
  }
}
