const fs = require('fs');
const waterfall = require('async/waterfall');
// const a = fs.readFile('hello.txt', 'utf-8', (e, a) => { console.log(a); });




// const callback = (a) => console.log(a);

const unionFiles = (inputPath1, inputPath2, outputPath, cb) => {

  const readFile1 = (arg1, callback) => {
    fs.readFile(inputPath1, 'utf-8', cb);
    // callback(null, 'one', 'two');
  };

  // const readFile2 = (arg1, arg2, callback) => {
  //   fs.readFile(inputPath2, 'utf-8', cb);
  //   // callback(null, 'one');
  // };

  const writeFile = (arg12, callback) => {
    fs.writeFile(outputPath, 'utf-8', cb);
    callback(null, 'one', 'two');
  };



  waterfall([
    readFile1,
    // readFile2,
    writeFile
  ], cb);
}

unionFiles('./file1', './file2', './resultFile', (err, data) => console.log(err, data))