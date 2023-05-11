const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cryptocurrencyRoutes = require("./routes/cryptocurrencyRoutes.js");

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const port = process.env.PORT || 5000;

app.use("/", cryptocurrencyRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
