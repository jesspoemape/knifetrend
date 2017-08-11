const { findAll, findOne, getSignedInUser } = require('./connectors/db-connector');

module.exports = {
  User: {
    // entries(user, args, context) {
    //   return findAll('Entry', {UserId:user.id});
    // },
    designs(user, args, context) {
      return findAll('Design', {UserId:user.id});
    },
    orders(user, args, context) {
      return findAll('Order', {UserId:user.id});
    },
    shoppingCart(user, args, context) {
      return findOne('ShoppingCart', {UserId:user.id});
    },
  },
  Design: {
    user(design, args, context) {
      return findOne('User', {id: design.UserId});
    },
    entries(design, args, context) {
      return findAll('Entry', {DesignId: design.id});
    },
    item(design, args, context) {
      return findOne('Item', {DesignId: design.id});
    },
  },
  Entry: {
    competition(entry, args, context) {
      return findOne('Competition', {id:entry.CompetitionId});
    },
    comments(entry, args, context) {
      return findAll('Comment', {EntryId:entry.id});
    },
    votes(entry, args, context) {
      return findAll('Vote', {EntryId:entry.id,active:true});
    },
    design(entry, args, context) {
      return findOne('Design', {id: entry.DesignId})
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
  Competition: {
    entries(competition, args, context) {
      return findAll('Entry', {CompetitionId:competition.id});
    }
  },
  Comment: {
    user(comment, args, context) {
      return findOne('User', {id:comment.UserId});
    },
    entry(vote, args, context) {
      return findOne('Entry', {id:comment.EntryId});
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
  Maker: {
    user(maker, args, context) {
      return findOne('User', {id: maker.UserId});
    },
    items(maker, args, context) {
      return findAll('Item', {MakerId: maker.id}, args.limit)
    },
    async profilePhoto(maker, args, context) {
      if(maker.profilePhoto) {
        return maker.profilePhoto
      } else {
        const user = await findOne('User', {id: maker.UserId});
        return user.avatar
      }
    },
    async storeName(maker, args, context) {
      if(maker.storeName) {
        return maker.storeName
      } else {
        const user = await findOne('User', {id: maker.UserId});
        return `${user.name}'s Store`
      }
    }
  },
  Item: {
    maker(item, args, context) {
      return findOne('Maker', {id: item.MakerId})
    },
    design(item, args, context) {
      return findOne('Design', {id: item.DesignId})
    },
    // check this later
    async orders(item, args, context) {

      const orders = await context.db.Order.findAll({
        include: [{
          model: context.db.OrderLineItem,
          as: "lineItems",
          where: {ItemId: item.id}
        }]
      })
      return orders.map(order => order.get())
    }
  },
  Order: {
    user(order, args, context) {
      return findOne('User', {id: order.UserId})
    },
    lineItems(order, args, context) {
      return findAll('OrderLineItem', {OrderId: order.id})
    }
  },
  OrderLineItem: {
    order(orderLineItem, args, context) {
      return findOne('Order', {id: orderLineItem.OrderId})
    },
    item(orderLineItem, args, context) {
      return findOne('Item', {id: orderLineItem.ItemId})
    }
  },
  ShoppingCart: {
    user(shoppingCart, args, context) {
      return findOne('User', {id: shoppingCart.UserId})
    },
    lineItems(shoppingCart, args, context) {
      return findAll('ShoppingCartLineItem', {ShoppingCartId: shoppingCart.id})
    }
  },
  ShoppingCartLineItem: {
    shoppingCart(shoppingCartLineItem, args, context) {
      return findOne('ShoppingCart', {id: shoppingCartLineItem.ShoppingCartId})
    },
    item(shoppingCartLineItem, args, context) {
      return findOne('Item', {id: shoppingCartLineItem.ItemId})
    }
  },

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
    } ,
    users(obj, args, context) {
      return findAll('User', args);
    },
    makers(obj, args, context) {
      return findAll('Maker', args);
    },
    items(obj, args, context) {
      return findAll('Item', args);
    }
  },
}
