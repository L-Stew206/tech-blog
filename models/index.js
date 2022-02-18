const User = require('./User');
const Project = require('./Project');

// User hasMany posts

// Post belongTo User (user_id)

// User hasMany Comments 

// Comments belongsTo User (Comment.user_id)

// Posts haveMany Comments 

// Comments belongTo Post (Comment.post_id)

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project };
