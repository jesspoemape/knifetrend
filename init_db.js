const env = require('dotenv').config();
const db = require('./server/db/models/index')

const sync_database = async function() {
  await db.sequelize.drop();
  await db.sequelize.sync();

  await db.User.bulkCreate([
    {
      name: 'Joe Isabell',
      username: 'josephisabell',
      providerAvatar: 'https://scontent.cdninstagram.com/t51.2885-19/11272883_487814924721110_310600987_a.jpg',
      auth_id: '1581915443',
      auth_provider: 'instagram',
      isAdmin: true
    },
    {
      name: 'Jack Steel',
      username: 'sweetknives',
      providerAvatar: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/kt-landing-testimonial-profile.jpg',
      auth_id: '',
      auth_provider: '',
      isAdmin: false
    },
    {
      name: 'Josh Isabell',
      username: 'joshisabell',
      providerAvatar: 'https://instagram.fmkc1-1.fna.fbcdn.net/t51.2885-19/11934596_970391889689038_923518484_a.jpg',
      auth_id: '',
      auth_provider: '',
      isAdmin: false
    },

  ])

  await db.Competition.bulkCreate([
    {
      name: 'EDC Folding Knives',
      shortDesc: 'This competition is open to any folding EDC knife design.',
      desc: 'Knife Trend presents the EDC Folding Knives competition. This competition is open to all EDC folding knive designs and will be judged on originality, style, and shape. The most votes will be awarded the Grand Prize.',
      primaryPhoto: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/competitions/kt-competition-edc-folding.jpg',
      startDate: new Date('May 1, 2017 23:59:59 CST'),
      endDate: new Date('August 1, 2017 23:59:59 CST'),
      award: 'All expenses paid trip to Blade Show 2018. This prize includes airfare, lodging for 3 nights and $300 spending money!',
      awardValue: 1500
    },
    {
      name: 'Outdoor & Bushcraft',
      shortDesc: 'Open to all bushcraft or outdoor style knife designs.',
      desc: 'Knife Trend presents the Outdoor & Bushcraft competition. This competition is open to all EDC folding knive designs and will be judged on originality, style, and shape. The most votes will be awarded the Grand Prize.',
      primaryPhoto: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/competitions/kt-compeitition-bushcraft.jpg',
      startDate: new Date('May 1, 2017 23:59:59 CST'),
      endDate: new Date('August 20, 2017 23:59:59 CST'),
      award: 'All expenses paid trip to Blade Show 2018. This prize includes airfare, lodging for 3 nights and $300 spending money!',
      awardValue: 1500
    },
    {
      name: 'Wood Handled Knives',
      shortDesc: 'This competition is open to any wood handled knife.',
      desc: 'Knife Trend presents the Wood Handled Knives competition. This competition is open to all EDC folding knive designs and will be judged on originality, style, and shape. The most votes will be awarded the Grand Prize.',
      primaryPhoto: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/competitions/kt-competition-wood-handled.JPG',
      startDate: new Date('May 1, 2017 23:59:59 CST'),
      endDate: new Date('August 5, 2017 23:59:59 CST'),
      award: 'All expenses paid trip to Blade Show 2018. This prize includes airfare, lodging for 3 nights and $300 spending money!',
      awardValue: 1500
    }
  ])

  await db.Design.bulkCreate([
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      primaryPhoto: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg",
      UserId: 2
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      primaryPhoto: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-4.jpg",
      UserId: 3
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      primaryPhoto: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-3.jpg",
      UserId: 2
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      primaryPhoto: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-11.jpg",
      UserId: 1
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      primaryPhoto: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-2.jpg",
      UserId: 3
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      primaryPhoto: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg",
      UserId: 2
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      primaryPhoto: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-13.jpg",
      UserId: 1
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      primaryPhoto: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-13.jpg",
      UserId: 1
    }
    ,
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      primaryPhoto: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-13.jpg",
      UserId: 1
    }
    ,
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      primaryPhoto: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-13.jpg",
      UserId: 1
    }
  ])

  await db.Entry.bulkCreate([
    {
      active: true,
      designId: 1,
      competitionId: 1
    },
    {
      active: true,
      designId: 2,
      competitionId: 2
    },
    {
      active: true,
      designId: 3,
      competitionId: 3
    },
    {
      active: true,
      designId: 4,
      competitionId: 1
    },
    {
      active: true,
      designId: 5,
      competitionId: 2
    },
    {
      active: true,
      designId: 6,
      competitionId: 3
    },
    {
      active: true,
      designId: 7,
      competitionId: 1
    },
  ])

  await db.Vote.bulkCreate([
    {
      active: true,
      EntryId: 1 ,
      UserId: 1
    },
    {
      active: true,
      EntryId: 2 ,
      UserId: 1
    },
    {
      active: true,
      EntryId: 3 ,
      UserId: 1
    },
    {
      active: true,
      EntryId: 4 ,
      UserId: 1
    },
    {
      active: true,
      EntryId: 5 ,
      UserId: 1
    },
    {
      active: true,
      EntryId: 6 ,
      UserId: 1
    },
    {
      active: true,
      EntryId: 7 ,
      UserId: 1
    }
  ])

  await db.Comment.bulkCreate([
    {
      content: "I love this knife!!!",
      EntryId: 1 ,
      UserId: 1
    },
    {
      content: "I think its a great design too, can't wait to get mine in the mail!",
      EntryId: 1 ,
      UserId: 2
    },
    {
      content: "Looks sharp :)",
      EntryId: 1 ,
      UserId: 3
    },
    {
      content: "When will this one be available to buy?",
      EntryId: 1 ,
      UserId: 2
    },
    {
      content: "I love this knife!!!",
      EntryId: 2 ,
      UserId: 1
    },
    {
      content: "I love this knife!!!",
      EntryId: 3 ,
      UserId: 1
    },
    {
      content: "I love this knife!!!",
      EntryId: 4 ,
      UserId: 1
    },
    {
      content: "I love this knife!!!",
      EntryId: 5 ,
      UserId: 1
    },
    {
      content: "I love this knife!!!",
      EntryId: 6 ,
      UserId: 1
    },
    {
      content: "I love this knife!!!",
      EntryId: 7 ,
      UserId: 1
    }
  ])

  await db.Maker.bulkCreate([
    {
      userId: 1,
      makerJoinDate: new Date('May 1, 2017 23:59:59 CST'),
      biography: "Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.",
      logo: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg',
      coverPhoto: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg',
      profilePhoto: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg',
      location: 'Utah',
      socialLinks: {"facebook": "facebook-link.com"},
      FAQs: {"question": "answer"}
    },
    {
      userId: 2,
      makerJoinDate: new Date('May 1, 2017 23:59:59 CST'),
      biography: "Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.",
      logo: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg',
      coverPhoto: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg',
      profilePhoto: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg',
      location: 'Utah',
      socialLinks: {"facebook": "facebook-link.com"},
      FAQs: {"question": "answer"}
    },
    {
      userId: 3,
      makerJoinDate: new Date('May 1, 2017 23:59:59 CST'),
      biography: "Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.",
      logo: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg',
      coverPhoto: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg',
      profilePhoto: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg',
      location: 'Utah',
      socialLinks: {"facebook": "facebook-link.com"},
      FAQs: {"question": "answer"}
    },
  ])

  await db.Order.bulkCreate([
    {
      orderDate: new Date('May 1, 2017 23:59:59 CST'),
      shippingPrice: 550.01,
      tax: 4.99,
      UserId: 2
    },
    {
      orderDate: new Date('May 1, 2017 23:59:59 CST'),
      shippingPrice: 550.01,
      tax: 4.99,
      UserId: 3
    },
    {
      orderDate: new Date('May 1, 2017 23:59:59 CST'),
      shippingPrice: 550.01,
      tax: 4.99,
      UserId: 1
    },
    {
      orderDate: new Date('May 1, 2017 23:59:59 CST'),
      shippingPrice: 550.01,
      tax: 4.99,
      UserId: 2
    },
    {
      orderDate: new Date('May 1, 2017 23:59:59 CST'),
      shippingPrice: 550.01,
      tax: 4.99,
      UserId: 3
    },
    {
      orderDate: new Date('May 1, 2017 23:59:59 CST'),
      shippingPrice: 550.01,
      tax: 4.99,
      UserId: 1
    },
    {
      orderDate: new Date('May 1, 2017 23:59:59 CST'),
      shippingPrice: 550.01,
      tax: 4.99,
      UserId: 2
    },
  ])

  await db.OrderLineItem.bulkCreate([
    {
      quantity: 2,
      salePrice: 100.99,
      itemId: 1,
      OrderId: 1
    },
    {
      quantity: 2,
      salePrice: 100.99,
      itemId: 1,
      OrderId: 2
    },
    {
      quantity: 2,
      salePrice: 100.99,
      itemId: 1,
      OrderId: 3
    },
    {
      quantity: 2,
      salePrice: 100.99,
      itemId: 7,
      OrderId: 7
    },
    {
      quantity: 2,
      salePrice: 100.99,
      itemId: 6,
      OrderId: 6
    },
    {
      quantity: 2,
      salePrice: 100.99,
      itemId: 5,
      OrderId: 5
    },
    {
      quantity: 2,
      salePrice: 100.99,
      itemId: 4,
      OrderId: 4
    },
    {
      quantity: 2,
      salePrice: 100.99,
      itemId: 3,
      OrderId: 3
    },
    {
      quantity: 2,
      salePrice: 100.99,
      itemId: 2,
      OrderId: 2
    },
  ])

  await db.Item.bulkCreate([
    {
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      price: 213.15,
      quantity: 100,
      primaryPhoto: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg',
      otherMedia: ['https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg', 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg'],
      isUnique: false,
      MakerId: 2,
      DesignId: 1
    },
    {
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      price: 213.15,
      quantity: 100,
      primaryPhoto: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg',
      otherMedia: ['https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg', 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg'],
      isUnique: false,
      MakerId: 1,
      DesignId: 2
    },
    {
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      price: 213.15,
      quantity: 1,
      primaryPhoto: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg',
      otherMedia: ['https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg', 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg'],
      isUnique: true,
      MakerId: 3,
      DesignId: 3
    },
    {
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      price: 213.15,
      quantity: 100,
      primaryPhoto: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg',
      otherMedia: ['https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg', 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg'],
      isUnique: false,
      MakerId: 2,
      DesignId: 4
    },
    {
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      price: 213.15,
      quantity: 100,
      primaryPhoto: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg',
      otherMedia: ['https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg', 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg'],
      isUnique: false,
      MakerId: 2,
      DesignId: 5
    },
    {
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      price: 213.15,
      quantity: 1,
      primaryPhoto: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg',
      otherMedia: ['https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg', 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg'],
      isUnique: true,
      MakerId: 3,
      DesignId: 6
    },
    {
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      price: 213.15,
      quantity: 100,
      primaryPhoto: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg',
      otherMedia: ['https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg', 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg'],
      isUnique: false,
      MakerId: 1,
      DesignId: 7
    },
  ])

  await db.ShoppingCart.bulkCreate([
    {
      userId: 1
    },
    {
      userId: 2
    },
    {
      userId: 3
    },
  ])

  await db.ShoppingCartLineItem.bulkCreate([
    {
      quantity: 2,
      purchaseDate: new Date('May 1, 2017 23:59:59 CST'),
      removeDate: null,
      ItemId: 1,
      ShoppingCartId: 1
    },
    {
      quantity: 2,
      purchaseDate: new Date('May 1, 2017 23:59:59 CST'),
      removeDate: null,
      ItemId: 7,
      ShoppingCartId: 3
    },
    {
      quantity: 2,
      purchaseDate: new Date('May 1, 2017 23:59:59 CST'),
      removeDate: null,
      ItemId: 6,
      ShoppingCartId: 2
    },
    {
      quantity: 2,
      purchaseDate: new Date('May 1, 2017 23:59:59 CST'),
      removeDate: null,
      ItemId: 5,
      ShoppingCartId: 1
    },
    {
      quantity: 2,
      purchaseDate: new Date('May 1, 2017 23:59:59 CST'),
      removeDate: null,
      ItemId: 4,
      ShoppingCartId: 1
    },
    {
      quantity: 2,
      purchaseDate: new Date('May 1, 2017 23:59:59 CST'),
      removeDate: null,
      ItemId: 3,
      ShoppingCartId: 3
    },
    {
      quantity: 2,
      purchaseDate: new Date('May 1, 2017 23:59:59 CST'),
      removeDate: null,
      ItemId: 2,
      ShoppingCartId: 2
    },
    {
      quantity: 2,
      purchaseDate: new Date('May 1, 2017 23:59:59 CST'),
      removeDate: null,
      ItemId: 3,
      ShoppingCartId: 1
    },
  ])
}



sync_database().then(() => {
  db.sequelize.close()
  console.log("SYNC COMPLETE");
})
