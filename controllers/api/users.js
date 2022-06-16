const User = require('../../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 6;

module.exports = {
  signup,
  login
}

async function signup(req, res) {
  try {
    const hashedPass = await bcrypt.hash(req.body.password, SALT_ROUNDS)
    console.log(hashedPass)
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPass,
      // admin: true
    });
    // if (user.admin) {
    //   const token= 
    // }
    const token = jwt.sign ({ user}, process.env.SECRET, {expiresIn: "24h" });
    res.status(200).json(token);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}

//verify credentials are correct
//email/password
//build jwt, send to front end


async function login(req, res) {
  try {
    const allUsers = await User.find({});
    console.log(allUsers);
    const user = await User.findOne({ email: req.body.email });
    // check password
    console.log(user)
    console.log(req.body)
    if (!(await bcrypt.compare(req.body.password, user.password))) throw new Error();

    // if we got to this line, password is ok. give user a new token.
    const token = jwt.sign({ user }, process.env.SECRET,{ expiresIn: '24h' });
    res.status(200).json(token)
  } catch (err) {
    console.log(err)
    res.status(400).json('Bad Credentials');
  }
}
