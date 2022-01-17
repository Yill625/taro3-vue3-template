const fs = require('fs')

module.exports = {
  'src/**/*.{js,jsx,vue,ts,tsx}': ['yarn lint'],
  '*.{vue,ts}': [
    () => {
      return `vue-tsc --noEmit --skipLibCheck`
    },
  ],
}
