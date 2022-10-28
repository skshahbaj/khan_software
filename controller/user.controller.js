import express   from "express";
import fs from "fs";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import users from "../models/user.models.js";


export const signup = async(req,res)=>{
   try{
   const existname = await users.findOne({username:req.body.username})
   if(existname){
      res.send({
         status:false,
         msg:"name is already exist",
         data:{}
      });
   }else{
      var data1 = (req.body)
      var passwordhash = await bcrypt.hash(req.body.password,10);
      data1.password = passwordhash
   var data = ({
      time:Date(),
      userid:"_id"
   });
   var token = await Jwt.sign(data,"data-token")
   data1.token = token
     
      const user = await users.create(req.body);
      res.send(user)
   }
}catch(err){
   res.send({
      status:false,
      msg:"something wrong",
      data:{}
   })
}
}

export const login = async(req,res)=>{
    var getuser = await users.findOne()
    res.send(getuser)
    if(getuser){
       var checkpassword = await bcrypt.compare(req.body.password,getuser.password)
       if(checkpassword){
          checkpassword.token = ({time:Date(),userid:getuser._id},"han-ka-token")
          res.send({
             status:true,
             msg:"Login Succesfully",
             data:getuser
          });
       }else{
          res.send({
            status:false,
            msg:"token is not correct",
            data:{}
          })
       }
    }else{
       res.send("nhi mila")
    }
 }

 export const allData = async(req,res)=>{
    var where = {}
    if (req.query.username){
      where.username = req.query.username
    }
    if (req.query.eamil){
      where.email = req.query.email
    }
    const data = await users.findOne(where)
   if(data.length > 0){
      res.send({
         status:true,
         msg:"User successfully.",
         data:data
      })
   }else{
      res.send({
         status:false,
         msg:"No data found",
         data:{}
      })
   }
   res.send(data)
}

 export const oneupdate = async(req,res)=>{
   try{
   const data = await users.findOneAndUpdate({mobile:req.params.mobile},req.params)
   
   if (data){
      res.send({
         status:true,
         msg:"update succesfully",
         data:data
      })
   }else{
      res.send({
         status:false,
         msg:"something wrong",
         data:{}
      })
   }
}catch(err){
   res.send({
      status:false,
      msg:"something wrong",
      data:{}
   })
}
 }

 export const update = async(req,res)=>{
   try{
   var data1 = await users.findByIdAndUpdate({_id:req.body.id},req.body)
   if(data1){
      res.send({
         status:true,
         msg:"update one succefull",
         data:data1
      })
   }else{
      res.send({
         status:false,
         msg:"update nhi ho sakta",
         data:data1
      })
   }


   }catch(err){
      res.send({
         status:false,
         msg:"wrong",
         data:{}
      })
   }
 }

 export const deletedata =async(req,res)=>{
try{
 var data = await users.findByIdAndDelete({_id:req.body.id},req.body)
//  res.send(data)
if(data){
   res.send({
      status:true,
      msg:"delete succfull",
      data:data
   })
}
}catch(err){
   res.send({
   status:false,
   msg:"something wrong",
   data:{}
})
}
 
}

export const paramsdelete = async(req,res)=>{
   try{
   var data = await users.findOneAndDelete({email:req.params.email},req.params)
   // res.send(data)
   if(data){
      res.send({
         status:true,
         msg:"delete succefull",
         data:data
      })
   }else{
      res.send({
         status:false,
         msg:"not found email",
         data:{}
      })
   }
   }catch(err){
      res.send({
         status:false,
         msg:"something wrong",
         data:{}
      })
   }
}
 