import mongoose from 'mongoose';

var userSchema = new mongoose.Schema({
  name:{
      type:String,
      trim:true,
      required:true,
      max:32
   } ,
   email: {
       type:String,
       required:true,
    },
    password:{
        type:String,
        required:true,
    },
    resetLink:{
        data:String,
        default:''
    }, 
    role:{
        type:String,
        default:'student'
    },
    branch:{
        type:String,
        default:'Information Science and Engineering'
    },
    section:{
        type:String,
        default:'C'
    },
    semester:{
        type:String,
        default:'5'
    },
    gender:{
        type:String,
        default:'Female'
    },
    phno :{
        type:String,
        default:''
    },
    bloodgroup :{
        type:String,
        default:''
    },
    fatherName :{
        type:String,
        default:''
    },
    motherName :{
        type:String,
        default:''
    },
    fatherPhone :{
        type:String,
        default:''
    },
    motherPhone :{
        type:String,
        default:''
    },
},{timestamps:true})

var User = mongoose.model('User', userSchema);
export default User;
