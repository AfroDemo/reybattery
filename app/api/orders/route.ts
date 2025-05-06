import { NextResponse } from "next/server";
import { saveOrder } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.address) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Prepare order data
    const orderData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      message: data.message || "",
      product_id: data.product_id,
      product_name: data.product_name,
      product_price: data.product_price,
      quantity: data.quantity || 1,
    };

    const result = saveOrder(orderData);

    return NextResponse.json({
      success: true,
      orderId: result.lastInsertRowid,
    });
  } catch (error) {
    console.error("Error saving order:", error);
    
    let errorMessage = "Failed to save order";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    
    return NextResponse.json(
      { error: "Failed to save order", details: errorMessage },
      { status: 500 }
    );
  }
}