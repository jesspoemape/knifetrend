module.exports = (sequelize, DataTypes) => {

  const Design = sequelize.define("Design", {
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    primaryPhoto: DataTypes.STRING,
    otherMedia: DataTypes.ARRAY(DataTypes.STRING)
  })

  Design.associate = (models => {
    Design.hasMany(models.Entry, {as: 'entries'});
    Design.belongsTo(models.User);
    Design.hasOne(models.Item);
  })

  return Design;
}
