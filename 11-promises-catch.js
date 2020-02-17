const fs = require('fs');

// const promise = fs.promises.readFile('uqtuy')
// .catch(console.log)
// .then(() => fs.promises.readFile('werwer'))
// .catch(console.log)

// promise.catch((e) => console.log(e));
// console.log(fs.promises.writeFile('./test', 'werwverwbrb wer wer'))

//----------------------------------------------

// const promise = fs.promises.readFile('dfq')
// .then(() => fs.promises.readFile('df'))
// .catch((e) => {
//   console.log('ashipka');
//   throw new Error('asd');
// })
// .catch(console.log);

//-----------------------------------

// const promise = fs.promises.readFile('iuvyiy')
//   .then((data) => {
//     throw new Error('www');
//   })
//   .catch(console.log)

//----------------------------------------------

  const promise = fs.promises.readFile('iuvyiy')
  .then((data) => {
    return Promise.reject(new Error('err'));
  })
  .catch(console.log)