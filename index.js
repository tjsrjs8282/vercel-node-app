const express = require("express");
const product = require("./api/product");

const app = express();

const PORT = process.env.PORT || 5050;

// app.use("/api/product", product);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "public") });
});

// app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

module.exports = app;
