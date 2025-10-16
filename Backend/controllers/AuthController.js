const User = require("../models/User");
const {
  createRefreshToken,
  createAccessToken,
} = require("../util/SecretToken");
const bcrypt = require("bcryptjs");
const existingUserSchema = require("../util/existingUserZodSchema");
const newUserSchema = require("../util/newUserZodSchema");

module.exports.Signup = async (req, res, next) => {
  try {
    console.log('Received input',req.body);
    let user = newUserSchema.safeParse(req.body);
    if (!user.success) {
      res.status(400).json({
        message: "Invalid input.",
      });
      return;
    }
    console.log('Parsed user input',req.body);
    let userExists = await User.findOne({ email: user.data.email });
    if (userExists) {
      res.status(409).json({
        error: "User already exists",
      });
      return;
    }
    delete user.data.confirmPassword;

    user = new User(user.data);
    await user.save();

    let refreshToken = createRefreshToken({id: user._id});
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "Strict",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    let accessToken = createAccessToken({id: user._id});
    let {password,__v,createdAt,modifiedAt,...userWithoutSensitive}=user._doc;
    res.status(201).json({
      success: true,
      message: "User registered.",
      accessToken,
      user: userWithoutSensitive
    });
  } catch (error) {
    next(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    let parsedUser=existingUserSchema.safeParse(req.body);
    if(!parsedUser.success){
      res.status(400).json({
        success:false,
        message : 'Please enter all fields'
      })
      return;
    }
    let {contact , password}=parsedUser.data;
    let dbUser;
    if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(contact)){ //Email
      dbUser=await User.findOne({email : contact});
    }else if (/^[0-9]{10}$/.test(contact)){
      dbUser=await User.findOne({phoneNumber : Number(contact)});
    }
    if(!dbUser){
      res.status(404).json({
        success:false,
        message : 'User not found'
      });
      return;
    }
    console.log('User found');
    let isAuthenticated = await bcrypt.compare(password, dbUser.password);// user.password is correct hashed password fetched from DB
    if (!isAuthenticated) {
      res.status(401).json({
        success: false,
        message: "Incorrect password",
      });
      return;
    }
    let refreshToken = createRefreshToken({id : dbUser._id});
    let accessToken=createAccessToken({id : dbUser._id});
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "Strict",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });
    let {password : dbPassword,__v,createdAt,modifiedAt,...userWithoutSensitive}=dbUser._doc;
    res.status(200).json({
      success: true,
      message: "User logged in.",
      accessToken,
      user : userWithoutSensitive
    });
  } catch (err) {
    next(err);
  }
};
