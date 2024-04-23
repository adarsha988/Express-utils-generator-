const router=require("express").Router();
const qrController=require("./qr.controller")
router.post("/",async (req,res)=>{
 try{
    const{name:qr}=req.body;
 const result=await qrController.createQr(qr)
    res.send(`<img src=${result}>`);
 
}
catch(e){
    res.send("something went wrong....")
}})

router.get("/",(req,res)=>{
    res.send(" Q api is working")
})

module.exports=router;