const QRcode=require('qrcode');
const createQr=async(qr)=>{
    const qrdata= await QRcode.toDataURL(qr);
   return qrdata
   
};
module.exports={createQr}