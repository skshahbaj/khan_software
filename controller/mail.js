import nodemailer from "nodemailer"
export const nodemailer1 = (req,res)=>{
const transport = nodemailer.createTransport({
    host:"smtp.gamil.com",
    port:3001,
    secure:false,
    requireTLS:true,
    auth:{
        user:'shahbaj090khan@gamil.com',
        pass:'khan123'
    }

});

const mailoption = {
    from:'shahbaj090khan@gamil.com',
    to:'shahbaj090khan@gamil.com',
    subject:"jaruri work hai ",
    text:"aaj ka work pura hua kya??"
}
transport.sendMail(mailoption,function(err,info){
 if(err){
    console.log(err)
 }else{
    console.log('email send',info.response)
 }
})

}