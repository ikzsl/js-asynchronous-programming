const fs = require('fs');
const promise = fs.promises.readFile('file1', 'utf-8')
.then(console.log)
.then(console.log);
console.log(promise);

//-----------------------------------------------------------

// const applyForVisa = (documents, resolve, reject) => {
//   console.log('Обработка заявления...');
//   setTimeout(() => {
//     Math.random() > .5 ? resolve({}) : reject('В визе отказано: нехватка документов');
//   }, 2000)
// }

// applyForVisa({},
//   (visa) => console.info('Виза получена'),
//   (reason) => console.error(reason)
// );