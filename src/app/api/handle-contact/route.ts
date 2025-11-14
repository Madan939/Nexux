import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { fullName, email, phone, message } = body;
  try {

  const auth = await google.auth.getClient({
    credentials: {
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY!.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

 await sheets.spreadsheets.batchUpdate({
    spreadsheetId: process.env.SHEET_ID_CONTACT,
    requestBody: {
      requests: [
        {
          insertDimension: {
            range: {
              sheetId: 0, // 0 = first sheet, adjust if needed
              dimension: "ROWS",
              startIndex: 1, // 0 = header row, insert below it
              endIndex: 2,
            },
            inheritFromBefore: false,
          },
        },
      ],
    },
  });

  
 const now = new Date();
  const date = now.toLocaleDateString("en-GB"); // dd/mm/yyyy
  const time = now.toLocaleTimeString("en-GB"); // hh:mm:ss

  await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.SHEET_ID_CONTACT,
    range: "Sheet1!A2:F2", // adjust number of columns
    valueInputOption: "RAW",
    requestBody: {
      values: [[fullName, email, phone, message, date, time]],
    },
  });

  return NextResponse.json(
    { message: "Form submitted successfully!" },
    { status: 200 }
  );
} catch(error){
  console.log(error)
  return NextResponse.json(
    { message: "Internal Server Error" },
    { status: 400 }
  );
}
}
