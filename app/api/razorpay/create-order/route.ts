import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
const keySecret = process.env.RAZORPAY_KEY_SECRET;

export async function POST(request: NextRequest) {
  if (!keyId || !keySecret) {
    return NextResponse.json(
      { error: 'Razorpay is not configured. Set NEXT_PUBLIC_RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET.' },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const amountPaise = Math.round(Number(body.amount) * 100); // amount in rupees -> paise
    const currency = (body.currency || 'INR').toUpperCase();
    const receipt = body.receipt || `donate_${Date.now()}`;

    if (!amountPaise || amountPaise < 100) {
      return NextResponse.json(
        { error: 'Minimum amount is ₹1.' },
        { status: 400 }
      );
    }

    const instance = new Razorpay({ key_id: keyId, key_secret: keySecret });
    const order = await instance.orders.create({
      amount: amountPaise,
      currency,
      receipt,
      notes: body.notes || {},
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key: keyId,
    });
  } catch (err) {
    console.error('Razorpay create order error:', err);
    return NextResponse.json(
      { error: 'Could not create payment order. Please try again.' },
      { status: 500 }
    );
  }
}
