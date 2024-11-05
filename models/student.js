const mongoose=require("mongoose");
const Schema=mongoose.Schema;


const studentSchema = new Schema({
    S_id:{
        type:String,
        required:true,
        unique: true // Ensures student_id is unique
    }    
    ,
    S_name :{
        type:String,
        required:true,
    }    
    ,
    F_name:{
        type:String,
        required:true,
    }    
    ,
    
    Aadhar_no:{
        type:Number,
        required:true,
    },
    Dob:{
        type:Date,
        required:true,
    }    
    ,
    Phone:{
        type:Number,
        required:true,
    }    
    ,
    Course_name:{
        type:String,
        required:true,
    }    
    ,
    Join_date:{
        type:Date,
        required:true
    }
    ,
    Password:{
        type:String,
        required:true,
    } 

});

const Student =mongoose.model("student",studentSchema);
module.exports=Student;