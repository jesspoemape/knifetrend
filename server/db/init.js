const db = require('./models/index')

db.sequelize.drop().then(() => {
  db.sequelize.sync().then(() => {
    db.Competition.bulkCreate([
      {
        name: 'EDC Folding Knives',
        desc: 'This competition is open to any folding EDC knife design.',
        imgUrl: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/competitions/kt-competition-edc-folding.png',
        startDate: new Date('May 1, 2017 23:59:59 CST'),
        endDate: new Date('August 1, 2017 23:59:59 CST'),
        award: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.'
      },
      {
        name: 'Outdoor & Bushcraft',
        desc: 'Open to all bushcraft or outdoor style knife designs.',
        imgUrl: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/competitions/kt-competition-bushcraft.png',
        startDate: new Date('May 1, 2017 23:59:59 CST'),
        endDate: new Date('August 20, 2017 23:59:59 CST'),
        award: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.'
      },
      {
        name: 'Wood Handled Knives',
        desc: 'This competition is open to any wood handled knife.',
        imgUrl: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/competitions/kt-competition-wood-handled.png',
        startDate: new Date('May 1, 2017 23:59:59 CST'),
        endDate: new Date('August 5, 2017 23:59:59 CST'),
        award: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.'
      }
    ])
  })
})
