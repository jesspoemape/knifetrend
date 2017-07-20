const db = require('./models/index')

db.sequelize.drop().then(() => {
  db.sequelize.sync().then(() => {
    db.Contest.bulkCreate([
      {
        name: 'EDC Folding Knives',
        desc: 'This competition is judged on overall look & style as well as originality. The EDC Folding Knives competition is open to any EDC folding knives.',
        imgUrl: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/edc-comp.png',
        startDate: new Date('May 1, 2017 23:59:59 CST'),
        endDate: new Date('October 1, 2017 23:59:59 CST'),
        award: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.'
      },
      {
        name: 'Outdoor & Bushcraft',
        desc: 'This competition is open to any bushcraft/outdoor knife. The winner is chosen based on design, style, & originality',
        imgUrl: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/outdoor-bushcraft-comp.png',
        startDate: new Date('May 1, 2017 23:59:59 CST'),
        endDate: new Date('October 1, 2017 23:59:59 CST'),
        award: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.'
      },
      {
        name: 'Fixed Blade',
        desc: 'This competition is judged on overall look & style as well as originality. The Fixed Blade Knives competition is open to any fixed blade knives.',
        imgUrl: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/fixed-blade-comp.png',
        startDate: new Date('May 1, 2017 23:59:59 CST'),
        endDate: new Date('October 1, 2017 23:59:59 CST'),
        award: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.'
      }
    ])
  })
})
