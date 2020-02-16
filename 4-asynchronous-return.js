const fs = require('fs');

const readFileWithTrim = (filepath, cb) => {

  fs.readFile(filepath, 'utf-8', (_error, data) => {
    cb(null, data.trim());
  })

}

readFileWithTrim('./myfile', (_error1, data1) => console.log(data1))
    


