const loaderUtils = require('loader-utils');

module.exports = function (source) {
  const options = loaderUtils.getOptions(this)
  const callback = this.async()
  setTimeout(() => {
    const result = source.replace('dell', options.name)
    callback(null,result)  // callback的传参和this.callback一致
  }, 1000)
}
