import {OAuth2Client} from 'google-auth-library'
import express, { response } from 'express';
import mongoose from 'mongoose';

import _ from 'lodash'
import User from '../models/user.js';
import jwt from 'jsonwebtoken'
import expressJWT from 'express-jwt';

const router = express.Router();

const client= new OAuth2Client("36235614900-hvg42mg4i5fo7gi25v2i5oardb0lcoci.apps.googleusercontent.com");

export const getUsers = async (req, res) => { 
    try {
        const allUsers = await User.find().where('role').equals('student');  
        console.log("get Users controller",allUsers);
    
         console.log("result of all students", allUsers)
        res.status(200).json(allUsers);

    } catch (error) {
        res.status(404).json({ message: "Some Error" });
    }
}

export const updateMyDetails = async (req, res) => {
    const { id } = req.params;
    const { phno, bloodgroup, fatherName, motherName, fatherPhone,motherPhone } = req.body.userData;
    console.log("In Update Details req.body",req.body)
   // if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const updatedUser = {phno :phno, bloodgroup:bloodgroup, fatherName:fatherName, motherName:motherName, fatherPhone:fatherPhone,motherPhone:motherPhone};

       let upd =await User.findByIdAndUpdate(id, updatedUser, { new: true },function (err, docs) {
        if (err){
            console.log("Stupid error",err)
        }
        else{
            console.log("Updated User : ", docs);  res.status(200).json(docs);
        }});
      
}

export const googleLogin = async (req, res) => {
    const { email } = req.body;

   // console.log(req.body);

   // client.verifyIdToken({idToken :tokenId,audience:"36235614900-hvg42mg4i5fo7gi25v2i5oardb0lcoci.apps.googleusercontent.com"}).then(
   //     response =>{
  //          const {email_verified,name,email}=response.payload;
   //         if(email_verified){

                User.findOne({email}).exec((err,user) =>{
                    if(err){
                        return res.status(400).json({
                            error:"Something Went Wrong"
                        })
                    }
                    else {
                        if(user){
                            res.status(201).json(user);
                        }
                        else{
                                    let password=email+"abcdefgh";
                                    let newUser= new User({name,email,password});
                                    newUser.save((err,data) =>{
                                        if(err){
                                            return res.status(400).json({
                                                error:"Something Went Wrong"
                                            })
                                        }  
                                        res.status(201).json(newUser );
                                        console.log("LOGIN SUCCESSFUL");
                                    })
                        }
                    }
                })
           // }
        //}
//)
}


export default router;