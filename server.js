const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const coinsRoutes = require("./routes/coinsRoutes.js");
const exchangeRoutes = require("./routes/exchangeRoutes.js");
const errorHandler = require("./middlewares/errorHandler.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use(errorHandler);

dotenv.config();

const port = process.env.PORT || 5000;

app.use("/coins", coinsRoutes);
app.use("/exchanges", exchangeRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
