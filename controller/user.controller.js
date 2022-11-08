import express from "express";
import fs from "fs";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import users from "../models/user.models.js";


export const signup = async (req, res) => {
   try {
      const existname = await users.findOne({ username: req.body.username })
      if (existname) {
         res.send({
            status: false,
            msg: "name is already exist",
            data: {}
         });
      } else {
         var data1 = (req.body)
         var passwordhash = await bcrypt.hash(req.body.password, 10);
         data1.password = passwordhash
         var data = ({
            time: Date(),
            userid: "_id"
         });
         var token = await Jwt.sign(data, "data-token")
         data1.token = token

         const user = await users.create(req.body);
         res.send({
            status: true,
            msg: "signup succefull ",
            data: user
         })
      }
   } catch (err) {
      res.send({
         status: false,
         msg: "something wrong",
         data: err
      });
   }
}

export const login = async (req, res) => {
   try {
      var getuser = await users.findOne({ username: req.body.username })
      //   res.send(getuser)
      if (getuser) {
         const password = await bcrypt.compare(req.body.password, getuser.password)
         if (password) {
             console.log(password)
            var token = await Jwt.sign({ time: Date(), userid: getuser._id }, "data-token")

             console.log(token)
            res.send({
               status: true,
               msg: "login succefull ",
               data: getuser
            })
         } else {
            res.send({
               status: false,
               msg: "passwor wrong ",
               data: {}
            })
         }
      } else {
         res.send({
            status: false,
            msg: "username wrong",
            data: {}
         })
      }


   } catch (err) {
      res.send({
         status: false,
         msg: "something wrong  ",
         data: err
      })
   }

}
// export const allData = async (req, res) => {
//  var where = {}
//  if (req.query.username){
//    where.username = req.query.username
//  }
//  if (req.query.eamil){
//    where.email = req.query.email
//  }
//    const data = await users.find()
//    if (data.length > 0) {
//       res.send({
//          status: true,
//          msg: "User successfully.",
//          data: data
//       })
//    } else {
//       res.send({
//          status: false,
//          msg: "No data found",
//          data: {}
//       })
//    }
//    res.send(data)
// }

//  export const oneupdate = async(req,res)=>{
//    try{
//    const data = await users.findOneAndUpdate({mobile:req.body.mobile},req.body)

//    if (data){
//       res.send({
//          status:true,
//          msg:"update succesfully",
//          data:data
//       })
//    }else{
//       res.send({
//          status:false,
//          msg:"something wrong",
//          data:{}
//       })
//    }
// }catch(err){
//    res.send({
//       status:false,
//       msg:"something wrong",
//       data:{}
//    })
// }
//  }

export const update = async (req, res) => {
   try {
      var data1 = await users.findByIdAndUpdate({ _id: req.body.id }, req.body)
      if (data1) {
         res.send({
            status: true,
            msg: "update one succefull",
            data: data1
         })
      } else {
         res.send({
            status: false,
            msg: "update nhi ho sakta",
            data: data1
         })
      }


   } catch (err) {
      res.send({
         status: false,
         msg: "wrong",
         data: {}
      })
   }
}

export const deletedata = async (req, res) => {
   try {
      var data = await users.findByIdAndDelete({ _id: req.body.id }, req.body)
      //  res.send(data)
      if (data) {
         res.send({
            status: false,
            msg: "delete succfull",
            data: data
         })
      } else {
         res.send({
            status: true,
            msg: "delete succfull",
            data: data
         })
      }
   } catch (err) {
      res.send({
         status: false,
         msg: "something wrong",
         data: {}
      })
   }

}

// export const paramsdelete = async(req,res)=>{
//    try{
//    var data = await users.findOneAndDelete({email:req.body.email},req.body)
//    // res.send(data)
//    if(data){
//       res.send({
//          status:true,
//          msg:"delete succefull",
//          data:data
//       })
//    }else{
//       res.send({
//          status:false,
//          msg:"not found email",
//          data:{}
//       })
//    }
//    }catch(err){
//       res.send({
//          status:false,
//          msg:"something wrong",
//          data:{}
//       })
//    }
// }


export const resendOTP = async (req, res) => {
   var val = Math.floor(1000 + Math.random() * 9000);
   console.log(val);
   req.body.otp = val

   const data = await users.findByIdAndUpdate({ _id: req.body.id }, req.body)
   if (data) {
      res.send({
         status: true,
         msg: "succefull",
         data: data
      })
   } else {
      res.send("'shi nhi hai")
   }
}