module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define('Comment', {
    text: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  });

  return Comment;
};
