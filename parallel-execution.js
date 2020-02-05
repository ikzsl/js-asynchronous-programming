const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const async = require('async');



const getDirectorySize = (filePath, cb) => {
  let size = 0;

  fs.readdir(filePath, (error1, items) => {

    if (error1) {
      cb(null, size);
      return;
    }

    console.log(items)
    const paths = items.map((el) => path.join(filePath, el));

    async.map(paths, fs.stat, (error2, results) => {
      console.log(results, paths)
      if (error2) {
        cb(error2);
        return;
      }
      
      size = _.sumBy(results.filter(item => item.isFile()).map((el) => el.size));
      cb(null, size);
    });

  });


};

getDirectorySize('./1111', (err, size) => {
  console.log(size);
});

// const array = [22, 33, 545];
// console.log(_.sumBy(array));

// fs.readdir('./', (error, files) => {
//   console.log(files);
// })

// const paths = ['sdf', 'gg'];
// console.log(path.join(...paths));

// const state = {
//   count: 0,
//   results: []
// }

// const tryWriteNewFile = (error) => {
//   if (error) {
//     return;
//   }

//   if (state.count !== 2) {
//     return;
//   }

//   fs.writeFile('new-file', state.results.join(''), (error) => {
//     if (error) {
//       return;
//     }
//     console.log('finished');
//   })
// }

// console.log('first reading was started');
// fs.readFile('first', 'utf-8', (error1, data1) => {
//   console.log('first callback');
//   state.count += 1;
//   state.results[0] = data1;
//   tryWriteNewFile(error1);
// });

// console.log('second reading was started');
// fs.readFile('second', 'utf-8', (error2, data2) => {
//   console.log('second callback');
//   state.count += 1;
//   state.results[1] = data2;
//   tryWriteNewFile(error2);
// });
//////////////////////////////////////////////////////////////
// async.map(['./first', './second'], fs.readFile, (err1, results) => {
//   if (err1) {
//     return;
//   }
//   fs.writeFile('./new-file', results.join(''), (err2) => {
//     if (err2) {
//       return;
//     }
//     console.log('finished!');
//   });
// });
///////////////////////////////////////////////////////////////////
