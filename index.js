const express = require("express");

const app = express();

app.get("/:fname/:lname", (req, res) => {
  const { fname, lname } = req.params;
  const {address,phone} = req.query;
  res.send("welcome " + fname + " " +
   lname+"\nMy address is "+
   address+" and phone no is "+ phone);
});

app.listen(3001);
console.log("app is running on port 3001");
