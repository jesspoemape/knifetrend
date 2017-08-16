const AWS = require('aws-sdk')

module.exports = {
  handleFileUpload: (req, res) => {
    if(!req.file) return res.status(400).send('no file was provided')

    const s3 = new AWS.S3()

    const Bucket = process.env.AWS_S3_BUCKET
    const Key = `${Date.now()}-${req.file.originalname}`
    const { buffer, mimetype } = req.file
    console.log(mimetype)
    const params = {
      Bucket,
      Key,
      Body: buffer,
      ACL: 'public-read',
      ContentType: mimetype
    }
    // get bucket location to be used in building the url for uploaded object
    s3.getBucketLocation({Bucket}, (err, {LocationConstraint}) => {
      // upload the file to s3
      s3.putObject(params, (putObjErr, putObjData) => {
        // construct the url for the newly uploaded object
        const objectUrl = `https://s3-${LocationConstraint}.amazonaws.com/${process.env.AWS_S3_BUCKET}/${Key}`
        res.status(200).json({'imgUrl': encodeURI(objectUrl)});
      })
    })
  }
}
