const { findAll, findOne, getSignedInUser } = require('./../connectors/db-connector');

const typeDef = `
  type Entry {
    id: Int!
    active: Boolean
    totalVotes: Int
    viewerVote: Boolean
    design: Design!
    competition: Competition!
    comments: [Comment]
    votes: [Vote]
  }
`
const resolvers = {
  competition(entry, args, context) {
    return entry.getCompetition();
  },
  comments(entry, args, context) {
    return entry.getComments();
  },
  votes(entry, args, context) {
    return entry.getVotes();
  },
  design(entry, args, context) {
    return entry.getDesign();
  },
  totalVotes(entry, args, context) {
    return entry.countVotes({where:{active:true}});
  },
  async viewerVote(entry, args, context) {
    const viewer = await getSignedInUser(context);
    if(viewer) {
      const vote = await findOne('Vote', {EntryId:entry.id,UserId:viewer.id})
      return vote ? vote.active : false;
    } else {
      return false;
    }
  }
}

module.exports = {
  typeDef,
  resolvers
}
