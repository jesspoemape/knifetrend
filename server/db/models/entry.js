module.exports = (sequelize, DataTypes) => {

  const Entry = sequelize.define("Entry", {
    active: DataTypes.BOOLEAN,
  })

  Entry.associate = (models => {
    Entry.belongsTo(models.Design)
    Entry.belongsTo(models.Competition)
    Entry.hasMany(models.Vote, { as: 'votes' })
    Entry.hasMany(models.Comment, { as: 'comments' })
  })

  return Entry;
}
