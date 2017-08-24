const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const createCharge = (token, amount) => {
  const charge = stripe.charges.create({
    amount: amount,
    currency: "usd",
    description: "Knifetrend.com Purchase",
    source: token
  }, (err, charge) => {
    console.log(charge)
  })
}

module.exports = {
  createCharge
}
