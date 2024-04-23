const router = require("express").Router();
const qrRouter=require("../modules/qrcode/qr.api")
        router.get("/", (req, res) => {
        res.send("API is working");
      });
      router.use("/qr",qrRouter)

module.exports=router;
