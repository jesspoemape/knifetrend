module.exports = (sequelize, DataTypes) => {

  const Comment = sequelize.define("Comment", {
    content: DataTypes.STRING(140)
  })

  Comment.associate = (models => {
    Comment.belongsTo(models.Entry);
    Comment.belongsTo(models.User);
  })

  return Comment;
}
