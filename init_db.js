var async = require('asyncawait/async');
var await = require('asyncawait/await');
const env = require('dotenv').config();

var db = require('./server/db/models/index')

var sync_database = async (function() {
  await (db.sequelize.drop());
  await (db.sequelize.sync());

  await (db.User.bulkCreate([
    {
      name: 'Joe Isabell',
      username: 'josephisabell',
      avatar: 'https://scontent.cdninstagram.com/t51.2885-19/11272883_487814924721110_310600987_a.jpg',
      auth_id: '1581915443',
      auth_provider: 'instagram',
      storeName: 'Isabell Custom',
      isAdmin: true
    },
    {
      name: 'Jack Steel',
      username: 'sweetknives',
      avatar: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/kt-landing-testimonial-profile.jpg',
      auth_id: '',
      auth_provider: '',
      storeName: 'Jack\'s Knives',
      isAdmin: false
    },
    {
      name: 'Josh Isabell',
      username: 'joshisabell',
      avatar: 'https://instagram.fmkc1-1.fna.fbcdn.net/t51.2885-19/11934596_970391889689038_923518484_a.jpg',
      auth_id: '',
      auth_provider: '',
      storeName: 'Outback Designs',
      isAdmin: false
    },

  ]))

  await (db.Competition.bulkCreate([
    {
      name: 'EDC Folding Knives',
      shortDesc: 'This competition is open to any folding EDC knife design.',
      desc: 'Knife Trend presents the EDC Folding Knives competition. This competition is open to all EDC folding knive designs and will be judged on originality, style, and shape. The most votes will be awarded the Grand Prize.',
      imgUrl: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/competitions/kt-competition-edc-folding.jpg',
      startDate: new Date('May 1, 2017 23:59:59 CST'),
      endDate: new Date('August 1, 2017 23:59:59 CST'),
      award: 'All expenses paid trip to Blade Show 2018. This prize includes airfare, lodging for 3 nights and $300 spending money!',
      awardValue: 1500
    },
    {
      name: 'Outdoor & Bushcraft',
      shortDesc: 'Open to all bushcraft or outdoor style knife designs.',
      desc: 'Knife Trend presents the Outdoor & Bushcraft competition. This competition is open to all EDC folding knive designs and will be judged on originality, style, and shape. The most votes will be awarded the Grand Prize.',
      imgUrl: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/competitions/kt-compeitition-bushcraft.jpg',
      startDate: new Date('May 1, 2017 23:59:59 CST'),
      endDate: new Date('August 20, 2017 23:59:59 CST'),
      award: 'All expenses paid trip to Blade Show 2018. This prize includes airfare, lodging for 3 nights and $300 spending money!',
      awardValue: 1500
    },
    {
      name: 'Wood Handled Knives',
      shortDesc: 'This competition is open to any wood handled knife.',
      desc: 'Knife Trend presents the Wood Handled Knives competition. This competition is open to all EDC folding knive designs and will be judged on originality, style, and shape. The most votes will be awarded the Grand Prize.',
      imgUrl: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/competitions/kt-competition-wood-handled.JPG',
      startDate: new Date('May 1, 2017 23:59:59 CST'),
      endDate: new Date('August 5, 2017 23:59:59 CST'),
      award: 'All expenses paid trip to Blade Show 2018. This prize includes airfare, lodging for 3 nights and $300 spending money!',
      awardValue: 1500
    }
  ]));

  await (db.Entry.bulkCreate([
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg",
      CompetitionId: 1,
      UserId: 2
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-2.jpg",
      CompetitionId: 1,
      UserId: 1
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-3.jpg",
      CompetitionId: 1,
      UserId: 1
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-4.jpg",
      CompetitionId: 1,
      UserId: 2
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-5.jpg",
      CompetitionId: 1,
      UserId: 1
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-6.jpg",
      CompetitionId: 1,
      UserId: 2
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-7.jpg",
      CompetitionId: 1,
      UserId: 2
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-8.jpg",
      CompetitionId: 1,
      UserId: 1
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-9.jpg",
      CompetitionId: 1,
      UserId: 3
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-10.jpg",
      CompetitionId: 1,
      UserId: 1
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg",
      CompetitionId: 2,
      UserId: 3
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-2.jpg",
      CompetitionId: 2,
      UserId: 3
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-3.jpg",
      CompetitionId: 2,
      UserId: 1
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-4.jpg",
      CompetitionId: 2,
      UserId: 2
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-5.jpg",
      CompetitionId: 2,
      UserId: 1
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-6.jpg",
      CompetitionId: 2,
      UserId: 2
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-7.jpg",
      CompetitionId: 2,
      UserId: 1
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-8.jpg",
      CompetitionId: 2,
      UserId: 3
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-9.jpg",
      CompetitionId: 2,
      UserId: 3
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-10.jpg",
      CompetitionId: 2,
      UserId: 3
    }
  ]))

  await (db.Vote.bulkCreate([
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
  ]))

  await (db.Comment.bulkCreate([
    {
      text: "I love this knife!!!",
      EntryId: 1 ,
      UserId: 1
    },
    {
      text: "I think its a great design too, can't wait to get mine in the mail!",
      EntryId: 1 ,
      UserId: 2
    },
    {
      text: "Looks sharp :)",
      EntryId: 1 ,
      UserId: 3
    },
    {
      text: "When will this one be available to buy?",
      EntryId: 1 ,
      UserId: 2
    },
    {
      text: "I love this knife!!!",
      EntryId: 2 ,
      UserId: 1
    },
    {
      text: "I love this knife!!!",
      EntryId: 3 ,
      UserId: 1
    },
    {
      text: "I love this knife!!!",
      EntryId: 4 ,
      UserId: 1
    },
    {
      text: "I love this knife!!!",
      EntryId: 5 ,
      UserId: 1
    },
    {
      text: "I love this knife!!!",
      EntryId: 6 ,
      UserId: 1
    },
    {
      text: "I love this knife!!!",
      EntryId: 7 ,
      UserId: 1
    }
  ]))

  // var competition = await (db.Competition.findOne({
  //   include: [
  //     {model: db.Entry, as: 'Entries'}
  //   ]
  // })).get({plain:true});
  //
  // console.log(competition.Entries)
  //
  // const test = await (db.Competition.findAll({ include: [{model: db.Entry, as: 'Entries'}]}).then(competitions => {
  //   return competitions.map(competition => competition.get() )
  // }))
  // // console.log(test)

});



sync_database().then(() => {
  db.sequelize.close()
  console.log("SYNC COMPLETE");
})
