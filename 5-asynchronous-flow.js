const fs = require('fs');
const path = require('path');

// fs.readFile('first', 'utf-8', (_error1, data1) => {
//   fs.readFile('second', 'utf-8', (_error2, data2) => {
//     fs.writeFile('new-file', `${data1}${data2}`, () => 2);
//   });
// });

///////////////////////////////////
// const getFileOwners = (dirpath, cb) => {
//   fs.readdir(dirpath, (_error1, filenames) => {
//     const readFileStat = (items, result = []) => {
//       if (items.length === 0) {
//         // Обработку ошибок пока не рассматриваем
//         cb(null, result);
//         return;
//       }
//       const [first, ...rest] = items;
//       const filepath = path.join(dirpath, first);
//       fs.stat(filepath, (_error2, stat) => {
//         readFileStat(rest, [...result, { filename: first, owner: stat.uid }]);
//       });
//     };
//     readFileStat(filenames);
//   });
// };


// const compareFileSizes = (path1, path2, cb) => {
//   fs.stat(path1, (_error1, stat1) => {
//     fs.stat(path2, (_error2, stat2) => {
//       cb(_error2, Math.sign(stat1.size - stat2.size));
//     });
//   });
// };

// compareFileSizes('first', 'second', (_err, result) => console.log(result));

fs.readFile('./first', 'utf-8', (_error1, data1) => {
  fs.readFile('./second', 'utf-8', (_error2, data2) => {
    fs.writeFile('./new-file', `${data1}${data2}`, () => 5);
  });
});