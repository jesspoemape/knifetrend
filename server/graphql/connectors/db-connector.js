const db = require('./../../db/models/index');

async function findAll(model, filter) {
  const list = await db[model].findAll({where:filter})
  return list.map(instance => instance.get())
}

async function findOne(model, filter) {
  const instance = await db[model].findOne({where:filter})
  return instance ? instance.get(): null
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
