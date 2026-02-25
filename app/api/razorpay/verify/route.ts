import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const keySecret = process.env.RAZORPAY_KEY_SECRET;

export async function POST(request: NextRequest) {
  if (!keySecret) {
    return NextResponse.json(
      { error: 'Razorpay is not configured.' },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const { orderId, paymentId, signature, donor } = body;

    if (!orderId || !paymentId || !signature) {
      return NextResponse.json(
        { error: 'Missing orderId, paymentId, or signature.' },
        { status: 400 }
      );
    }

    const payload = `${orderId}|${paymentId}`;
    const expectedSignature = crypto
      .createHmac('sha256', keySecret)
      .update(payload)
      .digest('hex');

    if (expectedSignature !== signature) {
      return NextResponse.json(
        { error: 'Payment verification failed.' },
        { status: 400 }
      );
    }

    // Optionally store donor + paymentId in DB or send email. For now we just confirm.
    return NextResponse.json({
      success: true,
      message: 'Thank you for your donation.',
      paymentId,
      donor: donor || null,
    });
  } catch (err) {
    console.error('Razorpay verify error:', err);
    return NextResponse.json(
      { error: 'Verification failed. Please contact us with your payment details.' },
      { status: 500 }
    );
  }
}
