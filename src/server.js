require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json({ extended: false }));
app.get("/", (req, res) => {
  res.send("App running....");
});

app.use("/send-message", require("./router"));

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});

