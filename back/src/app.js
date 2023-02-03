const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const character = require("./routes/characterRoute");
const favorite = require("./routes/favoriteRoute");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use("/", character);
app.use("/", favorite);

app.listen(3001, () => {
  console.log("serve on port 3001");
});
