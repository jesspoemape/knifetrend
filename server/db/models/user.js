module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define("User", {
    name: DataTypes.STRING(25),
    username: DataTypes.STRING(25),
    providerAvatar: DataTypes.TEXT,
    customAvatar: DataTypes.TEXT,
    email: DataTypes.TEXT,
    userJoinDate: DataTypes.DATE,
    favorites: DataTypes.JSON,
    auth_id: DataTypes.STRING,
    auth_provider: DataTypes.TEXT,
    isAdmin: DataTypes.BOOLEAN,
    // billing info goes here
    avatar: {
      type: new DataTypes.VIRTUAL(DataTypes.TEXT, ['providerAvatar', 'customAvatar']),
      get: function() {
        return this.get('customAvatar') || this.get('providerAvatar');
      }
    }
  })

  User.associate = (models => {
    User.hasMany(models.Design, { as: 'designs' });
    User.hasMany(models.Vote, {as: 'votes'});
    User.hasMany(models.Comment, {as: 'comments'});
    User.hasOne(models.Maker);
    User.hasOne(models.ShoppingCart);
    User.hasMany(models.Order, {as: 'orders'});
  })

  return User;
}
