const router=require("express").Router()
const QRcode=require("../modules/qrcode")
console.log(router)
router.get("/",(req,res)=>{
    res.send("hello")

})
router.get("/qr",async (req,res)=>{
const {qr}=req.query
   const qrdata= await QRcode.toDataURL(qr);
    res.send(`<img src=${qrdata}>`);

})
module.exports=router;