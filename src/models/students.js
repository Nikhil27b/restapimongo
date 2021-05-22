const mongoose = require("mongoose");

const valid = require("validator");

const studentSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
        minlength:3,
    },
    email :{
        type:String,
        required:true,
        unique:[true, "Email id already present"],
        validate(value){
            if(!valid.isEmail(value)){
                throw new Error("Invaild Email");
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
    },
    address:{
        type:String,
        required :true,
    }
})

const Student = new mongoose.model('Student',studentSchema);


module.exports = Student;