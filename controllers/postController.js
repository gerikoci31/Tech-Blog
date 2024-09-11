const { Post }  = require('../models');

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


exports.updatePost = async (req, res) => {
  try {
   
    const postId = req.params.id;

    const { title, content } = req.body;

    const post = await db.Post.findByPk(postId);

    
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    
    post.title = title;
    post.content = content;
    await post.save();

    
    res.status(200).json({ message: 'Post updated successfully', post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while updating the post' });
  }
};


exports.deletePost = async (req, res) => {
  try {
    
    const postId = req.params.id;

    
    const post = await db.Post.findByPk(postId);

    
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    
    await post.destroy();

   
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {

    console.error(error);
    res.status(500).json({ message: 'An error occurred while deleting the post' });
  }
};
