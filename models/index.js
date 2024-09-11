const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING || 'postgres://postgres:Anac0ndA@localhost:5432/techblog_db');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);

db.User.hasMany(db.Post);
db.Post.belongsTo(db.User);

db.Post.hasMany(db.Comment);
db.Comment.belongsTo(db.Post);

db.User.hasMany(db.Comment);
db.Comment.belongsTo(db.User);

module.exports = db;
