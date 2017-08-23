module.exports = (sequelize, DataTypes) => {

  const Item = sequelize.define("Item", {
    name: DataTypes.STRING(25),
    desc: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    quantity: DataTypes.INTEGER,
    primaryPhoto: DataTypes.TEXT,
    otherMedia: DataTypes.ARRAY(DataTypes.STRING),
    isUnique: DataTypes.BOOLEAN
  })

  Item.associate = (models => {
    Item.belongsTo(models.Maker)
    Item.belongsTo(models.Design);
    Item.hasMany(models.OrderLineItem, { as: 'order-items' })
    Item.hasMany(models.ShoppingCartLineItem, { as: 'cart-items' })
  })

  return Item;
}