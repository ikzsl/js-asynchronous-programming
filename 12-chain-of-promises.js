const fs = require('fs');

// const unionFiles = (inputPath1, inputPath2, outputPath) => {
//   fs.promises.readFile(inputPath1, 'utf-8')
//     .then((data1) => {
//       fs.promises.readFile(inputPath2, 'utf-8')
//         .then((data2) => fs.promises.writeFile(outputPath, `${data1}${data2}`));

//     });

// }

//------------------------- --------------------------------------

// const unionFiles = (inputPath1, inputPath2, outputPath) => {
//   let data1, data2;
//   return fs.promises.readFile(inputPath1, 'utf-8')
//     .then((content) => data1 = content)
//     .then(() => fs.promises.readFile(inputPath2, 'utf-8'))
//     .then((content) => data2 = content)
//     .then(() => fs.promises.writeFile(outputPath, `${data1}${data2}`));

// }
// unionFiles('file1', 'file2', 'result');
// console.log(unionFiles('file1', 'file2', 'result'))

//--------------------------------------------------------

// const filePaths = ['file1', 'file2'];

// const promise = filePaths.reduce((acc, path) => (
//   acc.then(() => {
//     fs.promises.readFile(path)
//       .then((res) => {
//         fs.promises.appendFile('newFile', res);        
//       });
//       // console.log(fs.stat.isDirectory());
//   })

// ), Promise.resolve());
// console.log(fs.Stat.stats.isDirectory())
console.log('zxc', fs.stat('./node_modules', (q) => q).isDirectory(''));




