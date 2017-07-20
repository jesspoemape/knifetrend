module.exports = (sequelize, DataTypes) => {

  const Entry = sequelize.define("Entry", {
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    imgUrl: DataTypes.STRING,
    secondaryImgUrls: DataTypes.ARRAY(DataTypes.TEXT)
  })

  Entry.associate = (models => {
    Entry.belongsTo(models.Contest)
  })

  return Entry;
}
