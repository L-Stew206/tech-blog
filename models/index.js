const User = require('./User');
const Post = require('./Post');

// User hasMany posts
User.hasMany(Post, {
  foreignKey: 'user_id',
});

// Post belongTo User (user_id)
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

// User hasMany Comments 
User.hasMany(Post, {
  foreignKey: 'user_id',
});

// Comments belongsTo User (Comment.user_id)

// Posts haveMany Comments 

// Comments belongTo Post (Comment.post_id)


module.exports = { User, Post };
