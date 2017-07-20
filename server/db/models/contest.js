module.exports = (sequelize, DataTypes) => {

  const Contest = sequelize.define("Contest", {
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    imgUrl: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    terms: DataTypes.TEXT,
    award: DataTypes.TEXT
  })

  Contest.associate = (models => {
    Contest.hasMany(models.Entry, {as: 'Entries'})
  })

  return Contest;
}
