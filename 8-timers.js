

/////////   setTimeout(f, 1000) -- clearTimeout(timerId)//

const f = () => console.log('hey');
console.log('before timeout');
const timerId = setTimeout(f, 1000);// идентификатор таймера
console.log("TCL: timerId", timerId)
console.log('after timeout');
// clearTimeout(timerId);//отменяем таймер

/* Запомнить данные внутри функции можно тремя способами: */
// const f = (message) => console.log(message);
// console.log('before timeout');
// setTimeout(f, 1000, '1111'); //доп. параметры
// setTimeout(() => f('2222'), 2000); //ф-ция обертка
// setTimeout(f.bind(null, '3333'), 3000); //bind
// console.log('after timeout');

////  setInterval(f, 1000) - clearInterval(intervalId)  //////
//запускает функцию пока не остановят через clearInterval
// const id = setInterval(() => console.log(new Date()), 5000);
// setTimeout(() => clearInterval(id), 16000);

//Таймер можно остановить изнутри, передав в колбек его id.
// let counter = 0;
// const id = setInterval(() => {
//   counter +=1;
//   if (counter ===4) {
//     clearInterval(id);
//     return;
//   }
//   console.log(new Date());
// }, 5000)

// задача
// const fs = require('fs');



// const watcher = (filepath, interval, cb) => {

//   let lastCheckTime = Date.now();

//   const timer = setInterval(() => {

//     fs.stat(filepath, (err, stats) => {

//       if(err) {
//         cb(err);
//         return;
//       }

//       if (lastCheckTime <= stats.mtimeMs) {

//         cb(null);
//         clearInterval(timer)
//         return;

//       }

//       console.log(stats.mtimeMs, lastCheckTime);
//       lastCheckTime = Date.now();
//       cb(null);

//     });

//   }, interval);
//   return timer;

// };


// watcher('firs', 1000, (err) => err)

