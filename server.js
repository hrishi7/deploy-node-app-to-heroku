const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/health-checkup", (req, res) => {
  res.status(200).json({ success: true, message: "server is alive", 'database Url': process.env.MONGO_URI });
});

app.listen(process.env.PORT || 5000, () => console.log(`server is listening`));
