const db = require('./../../models');

function findAll(model, filter, limit) {
  return db[model].findAll({where:filter, limit: limit})
}

async function findOne(model, filter, limit) {
  const instance = await db[model].findOne({where:filter})
  return instance
}

async function getSignedInUser(context) {
  if(context.user) {
    const auth_id = context.user.identities[0].user_id
    return await findOne('User', {auth_id})
  } else {
    return null
  }
}

module.exports = {
  findOne,
  findAll,
  getSignedInUser
}
