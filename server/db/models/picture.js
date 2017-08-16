module.exports = (sequelize, DataTypes) => {

  const Picture = sequelize.define("Picture", {
    x: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    y: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    height: {
      type: DataTypes.INTEGER,
      defaultValue: 50
    },
    width: {
      type: DataTypes.INTEGER,
      defaultValue: 50
    },
    url: DataTypes.TEXT
  })

  Picture.associate = (models => {

  })

  return Picture;
}
