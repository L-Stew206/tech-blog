const User = require('./User');
const Post = require('./Post');
const Comment = require ('./Comments');

// User hasMany posts
User.hasMany(Post, {
  foreignKey: 'user_id',
});

// Post belongTo User (user_id)
Post.belongsTo(User, {
  foreignKey: 'user_id',
});


// Comments belongsTo User (Comment.user_id)
Comment.belongsTo (User, {
  foreignKey: 'user_id'
});

// Posts haveMany Comments 
Post.hasMany (Comment, {
  foreignKey: 'post_id'
});

// Comments belongTo Post (Comment.post_id)
Comment.belongsTo (Post, {
  foreignKey: 'post_id'
});


module.exports = { User, Post, Comment};
