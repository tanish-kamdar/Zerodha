const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  fullName: {
    type: String,
    required: [true, "Your username is required"],
  },
  phoneNumber : {
    type : Number,
    required : [true, "Phone number is required"]
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  modifiedAt : {
    type: Date,
    default: new Date()
  }
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
  this.modifiedAt=new Date();
});
userSchema.methods.comparePassword=async (password)=>{
  try{
  return await bcrypt.compare(password,this.password);
  }catch(err){
    next(err);
  }
}

module.exports = userSchema;