module.exports = (sequelize, DataTypes) => {

  const Entry = sequelize.define("Entry", {
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    imgUrl: DataTypes.STRING
  })

  Entry.associate = (models => {
    Entry.belongsTo(models.Competition)
    Entry.belongsTo(models.User)
    Entry.hasMany(models.Vote, { as: 'votes' })
    Entry.hasMany(models.Comment, { as: 'comments' })
  })

  return Entry;
}
