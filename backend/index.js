/* eslint-disable no-undef */
import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;

const products = [
  { id: 1, name: "IPhone 13 pro max", price: 100000 },
  { id: 2, name: "IPhone 14", price: 120000 },
  { id: 3, name: "IPhone 14 pro max", price: 150000 },
  { id: 4, name: "IPhone 15", price: 130000 },
  { id: 5, name: "IPhone 15 pro max", price: 170000 },
  { id: 6, name: "IPhone 16", price: 140000 },
  { id: 7, name: "IPhone 16 pro max", price: 180000 },
  { id: 8, name: "Techno Spark 20", price: 33000 },
  { id: 9, name: "Techno Spark 18", price: 18000 },
  { id: 10, name: "Redmi 12C", price: 24000 },
];

app.get("/", (req, res) => {
  try {
    res.status(200).json({
      resStatus: true,
      products,
    });
  } catch (error) {
    res.status(500).json({
      resStatus: false,
      error: "Server error found",
      message: error.message,
    });
  }
});

app.all(/.*/, (req, res) => {
  res.status(404).json({ result: "Not Found" });
});

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.clear();
  console.log(`Server is running on http://localhost:${port}`);
});
