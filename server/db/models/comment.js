module.exports = (sequelize, DataTypes) => {

  const Comment = sequelize.define("Comment", {
    text: DataTypes.TEXT
  })

  Comment.associate = (models => {
    Comment.belongsTo(models.Entry)
  })
  Comment.associate = (models => {
    Comment.belongsTo(models.User)
  })

  return Comment;
}
