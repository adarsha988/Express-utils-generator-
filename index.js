const express = require("express");

const app = express();

app.get("/:fname/:lname", (req, res) => {
  const { fname, lname } = req.params;
  res.send("welcome " + fname + " " + lname);
});

app.listen(3001);
console.log("app is running on port 3001");
