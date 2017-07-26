var async = require('asyncawait/async');
var await = require('asyncawait/await');

var db = require('./server/db/models/index')

var sync_database = async (function() {
  await (db.sequelize.drop());
  await (db.sequelize.sync());

  await (db.Competition.bulkCreate([
    {
      name: 'EDC Folding Knives',
      desc: 'This competition is open to any folding EDC knife design.',
      imgUrl: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/competitions/kt-competition-edc-folding.jpg',
      startDate: new Date('May 1, 2017 23:59:59 CST'),
      endDate: new Date('August 1, 2017 23:59:59 CST'),
      award: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.'
    },
    {
      name: 'Outdoor & Bushcraft',
      desc: 'Open to all bushcraft or outdoor style knife designs.',
      imgUrl: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/competitions/kt-compeitition-bushcraft.jpg',
      startDate: new Date('May 1, 2017 23:59:59 CST'),
      endDate: new Date('August 20, 2017 23:59:59 CST'),
      award: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.'
    },
    {
      name: 'Wood Handled Knives',
      desc: 'This competition is open to any wood handled knife.',
      imgUrl: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/competitions/kt-competition-wood-handled.JPG',
      startDate: new Date('May 1, 2017 23:59:59 CST'),
      endDate: new Date('August 5, 2017 23:59:59 CST'),
      award: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.'
    }
  ]));

  await (db.Entry.bulkCreate([
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg",
      CompetitionId: 1
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-2.jpg",
      CompetitionId: 1
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-3.jpg",
      CompetitionId: 1
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-4.jpg",
      CompetitionId: 1
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-5.jpg",
      CompetitionId: 1
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-6.jpg",
      CompetitionId: 1
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-7.jpg",
      CompetitionId: 1
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-8.jpg",
      CompetitionId: 1
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-9.jpg",
      CompetitionId: 1
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-10.jpg",
      CompetitionId: 1
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg",
      CompetitionId: 2
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-2.jpg",
      CompetitionId: 2
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-3.jpg",
      CompetitionId: 2
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-4.jpg",
      CompetitionId: 2
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-5.jpg",
      CompetitionId: 2
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-6.jpg",
      CompetitionId: 2
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-7.jpg",
      CompetitionId: 2
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-8.jpg",
      CompetitionId: 2
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-9.jpg",
      CompetitionId: 2
    },
    {
      name: '6" Folding Bushcraft',
      desc: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.',
      imgUrl: "https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-10.jpg",
      CompetitionId: 2
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
