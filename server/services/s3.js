const s3 = require('s3');

const client = s3.createClient({
  s3Options: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  }
})

const generateObjKey = (UserId, mimeType) => {
  const randomNum = Math.ceil(Math.random()*100)
  return `${UserId}-${randomNum}`
}

const upload = (UserId) => {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET,
    Key: generateObjKey(UserId, )
  }
  return client.AWS.putObject(params, (err, data) => {

  })
}

module.exports = {
  s3Ctrl: (req, res, next) => {
    console.log('in s3 endpoint')
    console.log('The request body looks like this: ', req.body)
    console.log(req.files)
    return res.status(200).send('made it back')
  }
}
