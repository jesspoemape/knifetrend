module.exports = (sequelize, DataTypes) => {

  const Maker = sequelize.define("Maker", {
    makerJoinDate: DataTypes.DATE,
    biography: DataTypes.TEXT,
    logo: {
      type: DataTypes.TEXT,
      defaultValue: "http://www.knifetrend.com/wp-content/uploads/2016/12/KTLOGO.png"
    },
    profilePhoto: DataTypes.TEXT,
    coverPhoto: {
      type: DataTypes.TEXT,
      defaultValue: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/kt-landing-following.jpg"
    },
    location: DataTypes.TEXT,
    socialLinks: DataTypes.JSON,
    FAQs: DataTypes.JSON,
    storeName: DataTypes.TEXT
    // billing/ payment info
  })

  Maker.associate = (models => {
    Maker.belongsTo(models.User);
    Maker.hasMany(models.Item, {as: 'items'});
  })

  return Maker;
}
