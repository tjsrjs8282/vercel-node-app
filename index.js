const express = require("express");
const product = require("./api/product");

const app = express();
const path = require("path");

const PORT = process.env.PORT || 5050;

// app.use("/api/product", product);
app.use(express.static(path.join(__dirname, "vercel-node-app/public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "vercel-node-app/public/index.html"));
});

// app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

module.exports = app;
