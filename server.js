const { google } = require("googleapis");
const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Tải thông tin xác thực từ tệp JSON
const credentials = require("./username-441814-be9e24b3c54c.json");
const { client_email, private_key } = credentials;

// Thiết lập Google Sheets API
const auth = new google.auth.JWT(
  client_email,
  null,
  private_key,
  ["https://www.googleapis.com/auth/spreadsheets"]
);

const sheets = google.sheets({ version: "v4", auth });

const SPREADSHEET_ID = "1h1NVlZO6blmPm-zoz23neq0OPC3gUFmMUm7a1BuUBvI"; // Thay bằng ID của bảng tính Google Sheets

app.post("/save", async (req, res) => {
  const { userName } = req.body;

  if (!userName) {
    return res.status(400).json({ message: "Tên người dùng không hợp lệ!" });
  }

  try {
    // Ghi dữ liệu vào Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A:A", // Thay "Sheet1" bằng tên trang tính của bạn
      valueInputOption: "RAW",
      requestBody: {
        values: [[userName]],
      },
    });

    res.status(200).json({ message: "Dữ liệu đã được lưu thành công!" });
  } catch (error) {
    console.error("Lỗi khi lưu dữ liệu:", error);
    res.status(500).json({ message: "Lỗi khi lưu dữ liệu!" });
  }
});

app.listen(PORT, () => {
  console.log(`Máy chủ đang chạy tại http://localhost:${PORT}`);
});
