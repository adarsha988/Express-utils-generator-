const express = require("express");
const indexrouter=require("./routes")
const app = express();
app.use(express.json())
app.use("/",indexrouter)
app.listen(3001);
console.log("app is running on port 3001");
