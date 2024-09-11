

const updatePost = (req, res) => {
  
  res.send('Post updated');
};

const createPost = (req, res) => {
  
  res.send('Post created');
};

const deletePost = (req, res) => {
  
  res.send('Post deleted');
};

const getDashboard = (req, res) => {
  
  res.send('Dashboard');
};

module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define('Post', {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  });

  return Post;
};