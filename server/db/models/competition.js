module.exports = (sequelize, DataTypes) => {

  const Competition = sequelize.define("Competition", {
    name: DataTypes.STRING,
    shortDesc: DataTypes.TEXT,
    desc: DataTypes.TEXT,
    imgUrl: DataTypes.STRING,
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
