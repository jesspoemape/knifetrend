module.exports = (sequelize, DataTypes) => {

  const Entry = sequelize.define("Entry", {
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    imgUrl: DataTypes.STRING
  })

  Entry.associate = (models => {
    Entry.belongsTo(models.Competition)
    Entry.belongsTo(models.User)
  })

  return Entry;
}
