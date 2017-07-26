module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define("User", {
    name: DataTypes.TEXT,
    username: DataTypes.TEXT,
    avatar: DataTypes.STRING,
    email: DataTypes.TEXT,
    auth_id: DataTypes.STRING,
    auth_provider: DataTypes.TEXT
  })

  return User;
}
