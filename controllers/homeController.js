const { Post } = require('../models');

exports.getHomepage = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.render('home', { posts });
  } catch (err) {
    res.status(500).json(err);
  }
};


