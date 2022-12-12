const fs = require('fs')
const appId = process.argv[2]
setTimeout(() => {
  fs.readFile('./dist/project.config.json', 'utf8', function (err, data) {
    if (err) console.log(err)
    const test1 = JSON.parse(data)
    test1.appid = appId
    const t = JSON.stringify(test1)
    fs.writeFileSync('./dist/project.config.json', t)
  })
}, 4000)
