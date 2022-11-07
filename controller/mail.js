 import nodemailer from "nodemailer";

 export const mail = (req,res)=>{

const transport = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    secure:false,
     requireTLS:true,
    auth:{
        user:'shahbaj090khan@gmail.com',
        pass:'hwgeubbsnqctcjyi'
    }

});

const mailoption = {
    from:'shahbaj090khan@gmail.com',
    to:'aarif.solankey@gmail.com',
    subject:"completed mail  ",
    text:"or bhaiya"
}
transport.sendMail(mailoption,function(err,info){
 if(err){
    console.log(err)
 }else{
    console.log('email send',info.response)
 }
})
 }