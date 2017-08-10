module.exports = (sequelize, DataTypes) => {

  const Maker = sequelize.define("Maker", {
    makerJoinDate: DataTypes.DATE,
    biography: DataTypes.TEXT,
    logo: DataTypes.TEXT,
    coverPhoto: DataTypes.TEXT,
    profilePhoto: DataTypes.TEXT,
    location: DataTypes.TEXT,
    socialLinks: DataTypes.JSON,
    FAQs: DataTypes.JSON,
    storeName: DataTypes.STRING(50)
    // billing/ payment info
  })

  Maker.associate = (models => {
    Maker.belongsTo(models.User);
    Maker.hasMany(models.Item, {as: 'items'});
  })

  return Maker;
}