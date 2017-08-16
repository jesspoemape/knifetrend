
class ImageCropper {
  constructor() {
    this.reader = new FileReader()
    this.image = new Image()
    this.canvas = document.createElement('canvas')
    this.readerResult = null // this value is set in this.reader's onloadend cb function
    this.croppedImage = null // this value is set in the _blobCb function

    this._blobCb = this._blobCb.bind(this);
  }

  async crop(file, cropSettings) {
    this._initializeCropper(cropSettings)
    await this.reader.readAsDataURL(file)
    await this.canvas.toBlob(this._blobCb, 'image/jpeg')
  }

  _blobCb(blob) {
    console.log('BLOB CB')
    const filename = `${Date.now()}-myNewFile.jpeg`
    this.croppedImage = new File([blob], filename)
    console.log(this.croppedImage)
  }

  _initializeCropper(cropSettings) {

    this.reader.onloadend = () => {
      console.log('READER LOADING HAS FINISHED')
      this.readerResult = this.reader.result;
      this.image.src = this.reader.result
    }

    this.image.onload = () => {
      console.log('IMAGE LOADING HAS FINISHED')
      // destructure crop settings passed to constructor
      console.log(cropSettings)
      const { x, y, width, height } = cropSettings
      // Calculate crop dimmensions
      const imageWidth = this.image.naturalWidth;
      const imageHeight = this.image.naturalHeight;
      const cropX = (x / 100) * imageWidth;
      const cropY = (y / 100) * imageHeight;
      const cropWidth = (width / 100) * imageWidth;
      const cropHeight = (height / 100) * imageHeight;
      // set canvas settings
      this.canvas.width = cropWidth;
      this.canvas.height = cropHeight;
      const ctx = this.canvas.getContext('2d');
      // draw cropped image to canvas object
      ctx.drawImage(
        this.image, cropX, cropY, cropWidth,
        cropHeight, 0, 0, cropWidth, cropHeight
      )
      console.log(ctx)
    }
  }
}


export default ImageCropper;
