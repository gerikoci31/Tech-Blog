const bcrypt = require('bcrypt');
const { User } = require('../models');

exports.getLogin = (req, res) => {
  res.render('partials/login');
};

exports.postLogin = async (req, res) => {
 
};

exports.getSignup = (req, res) => {
  res.render('partials/signup');
};

exports.postSignup = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ username, password: hashedPassword });
  res.redirect('/');
};