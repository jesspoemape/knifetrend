const { findAll, findOne, getSignedInUser } = require('./connectors/db-connector');

module.exports = {
  Query: {
    competition(obj, args, context) {
      return findOne('Competition', args);
    },
    competitions(obj, args, context) {
      return findAll('Competition', args);
    },
    entry(obj, args, context) {
      return findOne('Entry', args);
    },
    entries(obj, args, context) {
      return findAll('Entry', args);
    },
    viewer(obj, args, context) {
      return getSignedInUser(context);
    }
  },
  User: {
    entries(user, args, context) {
      return findAll('Entry', {UserId:user.id});
    }
  },
  Competition: {
    entries(competition, args, context) {
      return findAll('Entry', {CompetitionId:competition.id});
    }
  },
  Entry: {
    competition(entry, args, context) {
      return findOne('Competition', {id:entry.CompetitionId});
    },
    user(entry, args, context) {
      return findOne('User', {id: entry.UserId});
    },
    comments(entry, args, context) {
      return findAll('Comment', {EntryId:entry.id});
    },
    votes(entry, args, context) {
      return findAll('Vote', {EntryId:entry.id,active:true});
    },
    async totalVotes(entry, args, context) {
      const votes = await findAll('Vote', {EntryId:entry.id,active:true});
      return votes.length;
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
  },
  Vote: {
    user(vote, args, context) {
      return findOne('User', {id:vote.UserId});
    },
    entry(vote, args, context) {
      return findOne('Entry', {id:vote.EntryId});
    }
  },
  Comment: {
    user(comment, args, context) {
      return findOne('User', {id:comment.UserId});
    },
    entry(vote, args, context) {
      return findOne('Entry', {id:comment.EntryId});
    }
  }
}
