const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
})

Post.belongsTo(User, {
    foreignKey: 'userId'   
});

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignKey: "user_id"
})

User.hasMany(Comment, {
    foreignKey:"user_id",
    ondelete: 'CASCADE'
})

Comment.belongsTo(User, {
    foreignKey: 'userId'
    
});

module.exports = {
    User,
    Comment,
    Post
};