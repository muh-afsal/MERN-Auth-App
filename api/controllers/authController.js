import User from "../model/usesrModel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  console.log("reached the backend of sign up");
  const { Username, email, password } = req.body;
  const hashedpassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    userName: Username,
    email: email,
    password: hashedpassword,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: "User saved succesfully" });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email,password,'this is email and password')
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User Not Found"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "wrong credentials"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const {password:hashedpassword,...rest}=validUser._doc;
    const expiredate=new Date(Date.now()+3600000);

    res
      .cookie("access_token", token, { httpOnly: true,expires:expiredate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
