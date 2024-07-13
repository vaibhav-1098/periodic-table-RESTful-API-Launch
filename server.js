const express = require("express");
const app = express();
require("dotenv").config();
const Element = require("./database");

// middleware
app.use(express.json());

/* routes */

app.get("/",(req,res)=>{
  res.send("Periodic Table API")
})

app.get("/api/elements", async (req, res) => {
  try {
    const myData = await Element.find(req.query, { _id: 0 });
    res.status(200).json(myData);
  } catch (error) {
    res.status(500).json({ message: "an error occurred" });
  }
});

app.get("/api/elements/:number", async (req, res) => {
  try {
    const myData = await Element.find({ atomic_number: req.params.number }, { _id: 0 });
    if (myData.length == 0) {
      return res.status(404).json({ message: "Element not found" });
    }
    res.status(200).json(myData);
  } catch (error) {
    res.status(500).json({ message: "an error occurred" });
  }
});

app.get("/api/elements/symbol/:symbol", async (req, res) => {
  try {
    const myData = await Element.find({ symbol: req.params.symbol }, { _id: 0 });
    if (myData.length == 0) {
      return res.status(404).json({ message: "Element not found" });
    }
    res.status(200).json(myData);
  } catch (error) {
    res.status(500).json({ message: "an error occurred" });
  }
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server started");
});
