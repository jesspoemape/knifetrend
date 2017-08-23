module.exports = (sequelize, DataTypes) => {

  const Entry = sequelize.define("Entry", {
    active: DataTypes.BOOLEAN,
  })

  Entry.associate = (models => {
    Entry.belongsTo(models.Design)
    Entry.belongsTo(models.Competition)
    Entry.hasMany(models.Vote, { as: 'votes' })
    Entry.hasMany(models.Comment, { as: 'comments' })
  })

  Entry.addNewEntry = async function(entryInput, viewer) {
    const { CompetitionId, name, desc, primaryPhoto, otherMedia } = entryInput;
    // const { Design } = Entry.sequelize.models
    const design = await viewer.createDesign({ name, desc, primaryPhoto, otherMedia });
    const entry = await design.createEntry({CompetitionId})
    console.log('design', design)
    console.log('entry', entry)
    return entry;
  }

  return Entry;
}
