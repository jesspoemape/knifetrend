module.exports = (sequelize, DataTypes) => {

  const Competition = sequelize.define("Competition", {
    name: DataTypes.STRING(25),
    shortDesc: DataTypes.STRING(70),
    desc: DataTypes.TEXT,
    primaryPhoto: DataTypes.TEXT,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    terms: DataTypes.TEXT,
    award: DataTypes.TEXT,
    awardValue: DataTypes.INTEGER
  })

  Competition.associate = (models => {
    Competition.hasMany(models.Entry, {as: 'Entries'})
  })

  return Competition;
}