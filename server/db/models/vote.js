module.exports = (sequelize, DataTypes) => {

  const Vote = sequelize.define("Vote", {
    active: { type: DataTypes.BOOLEAN, defaultValue:true }
  })

  Vote.associate = (models => {
    Vote.belongsTo(models.Entry)
  })
  Vote.associate = (models => {
    Vote.belongsTo(models.User)
  })

  return Vote;
}
