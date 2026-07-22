import mongoose from 'mongoose';

const userSchema = new mongoose.Schema( {
    name: String,
    age : Number,
    DOB : Date,

})

const userModel = mongoose.model('User', userSchema);

export default userModel;