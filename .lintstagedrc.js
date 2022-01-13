const fs = require('fs')
const generateTSConfig = (stagedFilenames) => {
  return (type) => {
    console.log(type)
    const tsconfig = fs.readFileSync('tsconfig.json', 'utf8')
    console.log(tsconfig)
    if (stagedFilenames.length === 0) return ''
    tsconfig.include = stagedFilenames
    fs.writeFileSync('tsconfig.lint.json', JSON.stringify(tsconfig))
    return `${type} --noEmit --skipLibCheck  --project tsconfig.lint.json`
  }
}

module.exports = {
  'src/**/*.{js,jsx,vue,ts,tsx}': ['yarn lint'],
  // '*.{vue,ts}': [(fileName) => generateTSConfig(fileName)('vue-tsc')],
}
