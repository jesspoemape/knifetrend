const db = require('./models');

const addDatabase = (req, res, next) => {
  req.db = db;
  next();
}

const addViewer = async (req, res, next) => {
  if(req.user) {
    const auth_id = req.user.identities[0].user_id
    const viewer = await req.db.User.findOne({
      where: {auth_id},
      include: [{ model: req.db.ShoppingCart }]
    });
    req.viewer = viewer;
  }
  next();
}

module.exports = {
  addDatabase,
  addViewer
}
