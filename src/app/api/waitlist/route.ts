import { NextResponse } from 'next/server';
import { appendToSheet } from '../../../utils/googlesheets';

export async function POST(request: Request) {
  console.log('Received POST request to /api/waitlist');
  const { email } = await request.json();
  console.log('Email received:', email);

  try {
    await appendToSheet(email);
    console.log('Email successfully appended to sheet');
    return NextResponse.json({ message: 'Email received and added to waitlist' }, { status: 200 });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ message: 'Error processing request', error: String(error) }, { status: 500 });
  }
}