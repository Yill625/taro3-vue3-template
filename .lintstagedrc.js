const fs = require('fs')
const generateTSConfig = (stagedFilenames) => {
  return (type) => {
    return `${type} --noEmit --skipLibCheck`
  }
}

module.exports = {
  'src/**/*.{js,jsx,vue,ts,tsx}': ['yarn lint'],
  '*.{vue,ts}': [(fileName) => generateTSConfig(fileName)('vue-tsc')],
}
