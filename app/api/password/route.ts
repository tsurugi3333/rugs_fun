// app/api/hello/route.ts
import { NextRequest, NextResponse } from "next/server";
const correctPassword = process.env.PASSWORD;


export async function POST(request: NextRequest) {
  try {
    // Parse the JSON body from the request
    const body = await request.json();
    const { password } = body;

    // Check if password was provided
    if (!password) {
      return NextResponse.json(
        { success: false, message: "Password is required" },
        { status: 400 }
      );
    }

    // Validate password
    const isValid = password === correctPassword;

    if (!isValid) {
      // Add a small delay to slow down brute force attempts
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    // Return response with validation result
    return NextResponse.json({
      success: isValid,
      message: isValid ? "Password is valid" : "Invalid password",
    });
  } catch (error) {
    console.error("Password validation error:", error);
    return NextResponse.json(
      { success: false, message: "Invalid request format" },
      { status: 400 }
    );
  }
}
