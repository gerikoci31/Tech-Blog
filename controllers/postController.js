const { Post } = require('../models');

exports.getDashboard = async (req, res) => {
  try {
    const posts = await Post.findAll({ where: { userId: req.session.userId } });
    res.render('dashboard', { posts });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  await Post.create({ title, content, userId: req.session.userId });
  res.redirect('/dashboard');
};
