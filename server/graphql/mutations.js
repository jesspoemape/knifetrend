const { findAll, findOne, getSignedInUser } = require('./connectors/db-connector');

async function vote(obj, args, context) {
  const viewer = await getSignedInUser(context);
  if(!viewer) {
    return null;
  }
  const vote = await context.db.Vote.findOne({where:{UserId:viewer.id,EntryId:args.EntryId}})
  if(vote) {
    vote.active = !vote.active
    console.log(vote);
    await vote.save()
  } else {
    await context.db.Vote.create({
      active: true,
      UserId: viewer.id,
      EntryId: args.EntryId
    })
  }
  return await findOne('Entry', {id:args.EntryId})
}

async function comment(obj, args, context) {
  const viewer = await getSignedInUser(context);
  if(!viewer) {
    return null;
  }
  await context.db.Comment.create({
    content: args.text,
    UserId: viewer.id,
    EntryId: args.EntryId
  })
  return await findOne('Entry', {id:args.EntryId})
}

module.exports = {
  Mutation: {
    vote,
    comment
  }
}
