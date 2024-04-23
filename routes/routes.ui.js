const router = require("express").Router();

router.get ("/",(req,res)=>{
    res.send("ui is working...");
});
module.exports = router;
