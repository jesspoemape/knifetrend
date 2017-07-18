
const initialState = {
  competitions: [
    {
      id: 1,
      name: 'EDC Folding Knives',
      description: 'This competition is judged on overall look & style as well as originality. The EDC Folding Knives competition is open to any EDC folding knives.',
      imgUrl: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/edc-comp.png',
      endDate: new Date('October 1, 2017 23:59:59 CST'),
      awardDescription: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.'
    },
    {
      id: 2,
      name: 'Outdoor & Bushcraft',
      description: 'This competition is open to any bushcraft/outdoor knife. The winner is chosen based on design, style, & originality',
      imgUrl: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/outdoor-bushcraft-comp.png',
      endDate: new Date('October 1, 2017 23:59:59 CST'),
      awardDescription: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.'
    },
    {
      id: 3,
      name: 'Fixed Blade',
      description: 'This competition is judged on overall look & style as well as originality. The Fixed Blade Knives competition is open to any fixed blade knives.',
      imgUrl: 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/fixed-blade-comp.png',
      endDate: new Date('October 1, 2017 23:59:59 CST'),
      awardDescription: 'Mollit aliqua eiusmod anim ullamco officia est consectetur ad minim enim. Mollit cupidatat veniam deserunt anim irure occaecat ut tempor duis reprehenderit sunt tempor.'
    }
  ]
}

export default (state=initialState , action) => {
  switch (action.type) {

    default: return state
  }
}
