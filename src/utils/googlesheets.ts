import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SHEET_ID = '1mzyWjryUIp0s9bI55lgumq6rDlE4D9b9cToDSrOIi6I';

const auth = new JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
  scopes: SCOPES,
});

const sheets = google.sheets({ version: 'v4', auth });

export async function appendToSheet(email: string) {
  const timestamp = new Date().toISOString();
  
  console.log('Attempting to append to sheet:', { email, timestamp }); // Log

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'A:B', // appends to columns A and B
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[email, timestamp]],
      },
    });
    console.log('Successfully appended to sheet. Response:', response.data); // Log
  } catch (error) {
    console.error('Error appending to sheet:', error);
    throw error;
  }
}