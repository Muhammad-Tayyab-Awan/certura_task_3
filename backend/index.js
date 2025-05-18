/* eslint-disable no-undef */
import "dotenv/config"
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
    console.clear();
    console.log(`Server is running on http://localhost:${port}`);
});