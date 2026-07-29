import mongoose from "mongoose"


const DataSchema = mongoose.Schema({
    email : {type: String , required: true, unique: true , lowercase : true},
    password : { type : String , required : true},
    firstname : { type : String , required : true},
    lastname : {type : String , required : true},
    phone : { type: String , required : true},
},{
   timestamps: true,
   versionKey: false,
});


const userModel = mongoose.model("users" , DataSchema);

export default userModel;
