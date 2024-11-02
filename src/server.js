const express = require("express");
const env = require("dotenv");
env.config();
const app = express();
app.use("/", (req, res) => {
  res.send("Hello, World! two how are you");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
