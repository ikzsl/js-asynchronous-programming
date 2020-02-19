const fs = require('fs');

// const unionFiles = (inputPath1, inputPath2, outputPath) => {
//   const promise1 = fs.promises.readFile(inputPath1, 'utf-8');
//   const promise2 = fs.promises.readFile(inputPath2, 'utf-8');

//   const promise = Promise.all([promise1, promise2]);
//   return promise.then(([data1, data2]) => fs.promises.writeFile(outputPath, `${data1}${data2}`));
// }

// unionFiles('file1', 'file2', 'newFile');
// console.log(unionFiles('file1', 'file2', 'newFile'))

//----------------------------------------------------------
const getDirectorySize = (dirpath) => {
  const promise = fs.readdir(dirpath).then((filenames) => {
    const filepaths = filenames.map((name) => path.join(dirpath, name));
    const promises = filepaths.map(fs.stat);
    return Promise.all(promises);
  });

  return promise.then((stats) => _.sumBy(stats.filter((stat) => stat.isFile()), 'size'));
};

