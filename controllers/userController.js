const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

// signup
exports.signUp = async (req, res, next) => {
    try{
        const newUser = await createUserObj(req);
        const savedUser = await User.create(newUser);
        return res.status(200).send({message:"User created successfully", user:savedUser})
     }catch(err){
        return res.status(400).send({error:"Unable to create user", error: err})
     }
  };

exports.login = async(req, res) =>{
    return res.status(200).send({ message:"Hitting login route"});
}

exports.updateUser = async(req, res) =>{
    return res.status(200).send({ message:"Hitting update user route"});
}

exports.deleteUser = async(req, res) =>{
    return res.status(200).send({ message:"Hitting delete user route"});
}

exports.data = async(req, res) =>{
    return res.status(200).send({ message:"Hitting data route"});
}

  const createUserObj = async (req) => {
    return {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      phone: req.body.phone,
    };
  }



