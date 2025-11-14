import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: NextRequest) {
  const form = await request.formData();

  const position = form.get("position")?.toString() || "";
  const portfolio = form.get("portfolio")?.toString() || "";
  const fullName = form.get("fullName")?.toString() || ""; // FIXED
  const email = form.get("email")?.toString() || "";
  const coverNote = form.get("coverNote")?.toString() || "";
  const cv = form.get("cv") as File | null;
  const originalName = cv?.name || "";
  const ext = originalName.substring(originalName.lastIndexOf(".") + 1);

  if (!cv) {
    return NextResponse.json({ error: "CV not uploaded" }, { status: 400 });
  }

  // Read file buffer
  const arrayBuffer = await cv.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const publicId = `careers/${fullName}-cv.${ext}`;

  // FIX: Upload PDF to Cloudinary using upload_stream + Promise
  const result = await new Promise<any>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { resource_type: "raw", public_id: publicId },
      (err, res) => (err ? reject(err) : resolve(res))
    );
    stream.end(buffer);
  });

  // Generate proper downloadable URL
  const directUrl = cloudinary.url(result.public_id, {
    resource_type: "raw",
    secure: true,
    flags: [],
  });

  try {
    const auth = await google.auth.getClient({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY!.replace(
          /\\n/g,
          "\n"
        ),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Insert new row after header
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: process.env.SHEET_ID_CAREER,
      requestBody: {
        requests: [
          {
            insertDimension: {
              range: {
                sheetId: 0,
                dimension: "ROWS",
                startIndex: 1,
                endIndex: 2,
              },
              inheritFromBefore: false,
            },
          },
        ],
      },
    });

    const now = new Date();
    const date = now.toLocaleDateString("en-GB");
    const time = now.toLocaleTimeString("en-GB");

    await sheets.spreadsheets.values.update({
      spreadsheetId: process.env.SHEET_ID_CAREER,
      range: "Sheet1!A2:H2",
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            position,
            fullName,
            email,
            portfolio,
            directUrl,
            coverNote,
            date,
            time,
          ],
        ],
      },
    });

    return NextResponse.json(
      { message: "Form submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
