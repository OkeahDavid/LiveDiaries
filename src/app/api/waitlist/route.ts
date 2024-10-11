// app/api/waitlist/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();

  try {
    // Here you would typically:
    // 1. Validate the email
    // 2. Save the email to a database
    // 3. Perhaps send a confirmation email

    // For now, let's just log it
    console.log(`Email submitted: ${email}`);

    return NextResponse.json({ message: 'Email received' }, { status: 200 });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ message: 'Error processing request' }, { status: 500 });
  }
}