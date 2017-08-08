module.exports = `

  type User {
    id: Int!
    name: String
    username: String
    email: String
    providerAvatar: String
    customAvatar: String
    userJoinDate: String
    auth_id: String
    auth_provider: String
    isAdmin: Boolean
    designs: [Design]
    entries: [Entry]
    orders: [Order]
    shoppingCart: ShoppingCart
  }

  type Design {
    id: Int!
    name: String!
    desc: String
    primaryPhoto: String
    otherMedia: [String]
    user: User
    entries: [Entry]
    item: Item
  }

  type Entry {
    id: Int!
    active: Boolean
    competition: Competition
    votes: [Vote]
    comments: [Comment]
    design: Design!
    totalVotes: Int
    viewerVote: Boolean
  }

  type Competition {
    id: Int!
    name: String
    primaryPhoto: String
    shortDesc: String
    desc: String
    award: String
    awardValue: Int
    terms: String
    startDate: String
    endDate: String
    entries: [Entry]
  }

  type Comment {
    id: Int!
    content: String!
    user: User
    entry: Entry
    createdAt: String
    updatedAt: String
  }

  type Vote {
    id: Int!
    createdAt: String
    active: Boolean
    user: User
    entry: Entry
  }

  type Maker {
    id: Int!
    makerJoinDate: String
    biography: String
    logo: String
    coverPhoto: String
    profilePhoto: String
    location: String
    user: User!
    items: [Item]
  }

  type Item {
    id: Int!
    name: String
    desc: String
    price: Float
    quantity: Int
    primaryPhoto: String
    otherMedia: [String]
    isUnique: Boolean
    maker: Maker!
    design: Design
    orders: [Order]
  }

  type Order {
    id: Int!
    orderDate: String
    shippingPrice: Float
    tax: Float
    user: User!
    lineItems: [OrderLineItem]!
  }

  type OrderLineItem {
    id: Int!
    quantity: Int
    salePrice: Float
    order: Order
    item: Item
  }

  type ShoppingCart {
    id: Int!
    active: Boolean
    user: User
    lineItems: [ShoppingCartLineItem]
  }

  type ShoppingCartLineItem {
    id: Int!
    quantity: Int
    purchaseDate: String
    removeDate: String
    shoppingCart: ShoppingCart
    item: Item
  }

  type Query {
    competition(id: Int!): Competition
    competitions: [Competition]
    entry(id: Int!): Entry
    entries: [Entry]
    users: [User]
    viewer: User
    makers: [Maker]
  }

  type Mutation {
    vote(EntryId: Int!): Entry
    comment(EntryId: Int!, text: String!): Entry
  }

`
