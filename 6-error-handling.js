const fs = require('fs');

// try {
//   // Пытаемся читать директорию, а это ошибка
//   fs.readFile('efirst', 'utf-8', (err, data) => {
//     console.log('wwww', err, data);
//   });
// } catch (e) {
//   console.log('error!')
// }

/////////////////////////////////////////////////////////////////

// fs.readFile('firstq', 'utf-8', (err, data) => {
//   // Любые ошибки чтения файла: доступ, отсутствие файла, директория вместо файла
//   // null неявно приводится к false, поэтому достаточно такой проверки, 
//   // любой другой ответ трактуется как true
//   if (err) {
//     console.log('error!', err);
//     return; // guard expression
//   }

//   console.log('finished!', data)
// });
///////////////////////////////////////////////////////////////////////

// fs.readFile('first', 'utf-8', (error1, data1) => {
//   if (error1) {
//     console.log('error in first file')
//     return;
//   }
//   fs.readFile('second', 'utf-8', (error2, data2) => {
//     if (error2) {
//       console.log('error in second file')
//       return;
//     }
//     fs.writeFile('new-file', `${data1}${data2}`, (error3, data3) => {
//       if (error3) {
//         console.log('error during writing')
//         return;
//       }
//       console.log('finished!');
//     });
//   });
// });

// Тот же самый код, помещённый внутрь функции, выглядит немного по-другому. 
// Как только происходит ошибка, мы вызываем основной колбек и отдаём туда ошибку. 
// Если ошибка не возникла, то мы всё равно вызываем исходный колбек и передаём туда null. 
// Вызывать его обязательно, иначе внешний код не дождётся окончания операции. 
// Следующие вызовы больше не выполняются:


// const unionFiles = (inputPath1, inputPath2, outputPath, cb) => {
//   fs.readFile(inputPath1, 'utf-8', (error1, data1) => {
//     if (error1) {
//       cb(error1);
//       return;
//     }
//     fs.readFile(inputPath2, 'utf-8', (error2, data2) => {
//       if (error2) {
//         cb(error2);
//         return;
//       }
//       fs.writeFile(outputPath, `${data1}${data2}`, (error3) => {
//         if (error3) {
//           cb(error3);
//           return;
//         }
//         cb(null); // не забываем последний успешный вызов
//       });
//     });
//   });
// }

// unionFiles('first', 'second', 'new', (err) => { if (err) { console.log('err') } })

const moveFile = (inputPath1, inputPath2, outputPath, cb) => {
  fs.readFile(inputPath1, 'utf-8', (error1, data1) => {
    if (error1) {
      cb(error1);
      return;
    }
    fs.readFile(inputPath2, 'utf-8', (error2, data2) => {
      if (error2) {
        cb(error2);
        return;
      }
      fs.writeFile(outputPath, `${data1}`, (error3, data3) => {
        if (error3) {
          cb(error3);
          return;
        }
        console.log(data1, inputPath1)
        cb(null); // не забываем последний успешный вызов
      });
    });
  });
}

moveFile('first', 'second', 'new', (err) => {  { console.log('q') } })