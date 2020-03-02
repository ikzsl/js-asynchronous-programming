const fs = require('fs');

// const unionFiles = (inputPath1, inputPath2, outputPath) => {
//   let data1;
//   return fs.promises.readFile(inputPath1, 'utf-8')
//     .then(content => data1 = content)
//     .then(() => fs.promises.readFile(inputPath2, 'utf-8'))
//     .then((data2) => fs.promises.writeFile(outputPath, `${data1}${data2}`));
// };

// unionFiles('file1', 'file2', 'newFile2');

//----------то-же с async/await----------------

// const unionFiles = async (inputPath1, inputPath2, outputPath) => {
//   const data1 = await fs.promises.readFile(inputPath1, 'utf-8');
//   const data2 = await fs.promises.readFile(inputPath2, 'utf-8');
//   await fs.promises.writeFile(outputPath, `${data1}${data2}`);
// };

// unionFiles('file1', 'file2', 'newFile3');

//------- параллельно----------

const unionFiles = async (inputPath1, inputPath2, outputPath) => {
  const promise1 = fs.promises.readFile(inputPath1, 'utf-8');
  const promise2 = fs.promises.readFile(inputPath2, 'utf-8');

  const [data1, data2] = await Promise.all([promise1, promise2]);
  await fs.promises.writeFile(outputPath, `${data1}${data2}`);
};

unionFiles('file1', 'file2', 'newFile4');