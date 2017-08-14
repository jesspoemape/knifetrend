module.exports = (sequelize, DataTypes) => {

  const Comment = sequelize.define("Comment", {
    content: DataTypes.STRING(140)
  })

  Comment.associate = (models => {
    Comment.belongsTo(models.Entry);
    Comment.belongsTo(models.User);
  })

  Comment.bindMethods = (db => {

    Comment.createOrUpdate = async (entryId, content, viewer) => {
      if(!viewer) {
        return null;
      }
      const comment = await Comment.create({
        content: content,
        UserId: viewer.id,
        EntryId: entryId
      })
      return comment;
    }
  })

  return Comment;
}
