const fs = require('fs')

let file = process.argv[2]

fs.access(file, fs.constants.R_OK, (err) => {
  console.log(err ? 'read error' : 'file is ready for read')

  let result = 'file content:\n\n'

  let fileStream = fs.createReadStream(file)

  fileStream.on('data', (data) => {
    result += data
  })

  fileStream.on('end', () => {
    console.log(result)
  })
})
