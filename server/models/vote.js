module.exports = (sequelize, DataTypes) => {

  const Vote = sequelize.define("Vote", {
    active: { type: DataTypes.BOOLEAN, defaultValue:true }
  })

  Vote.associate = (models => {
    Vote.belongsTo(models.Entry);
    Vote.belongsTo(models.User);
  })

  Vote.bindMethods = (db => {
    // static methods (aka classMethods)
    Vote.saveOrChange = async (entryId, viewer) => {
      if(!viewer) return null;
      let votes  = await viewer.getVotes({where:{EntryId:entryId}})
      let vote = votes[0]
      if(vote) {
        vote.active = !vote.active;
        await vote.save()
      } else {
        vote = await viewer.createVote({
          active: true,
          EntryId: entryId
        })
      }
      return vote;
    }

    // instance methods


  })

  return Vote;
}
