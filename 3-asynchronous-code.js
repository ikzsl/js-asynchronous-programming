const fs = require('fs');

// Асинхронное чтение
// fs.readFile("hello.txt", "utf8", function (error, data) {
//   console.log("Асинхронное чтение файла=>", data);
//   if (error) throw error; //Если возникла ошибка  
// });

// Синхронное чтение
// let fileContent = fs.readFileSync("hello.txt", "utf8");
// console.log("Синхронное чтение =>", fileContent);

// fs.writeFileSync('hello.txt', '2611187');

// fs.appendFile("hello.txt", "-----23456", function() {
//   return 2;
// })

fs.writeFile("hello.txt", "Hello мир!", function(error){
 
  if(error) throw error; // если возникла ошибка
  console.log("Асинхронная запись файла завершена. Содержимое файла:");
  let data = fs.readFileSync("hello.txt", "utf8");
  console.log(data);  // выводим считанные данные
});
// fs.unlinkSync('hello.txt');//удаление

// const callback = (_error, data) => console.log(data, _error);
// console.log('before read');
// const content = fs.readFile('myfile', 'utf-8', callback);
// console.log('after read');

// fs.readFile('./myfile', (_error, data) => console.log('орп!'));
// fs.readFile('./myfile', (_error, data) => console.log('Second!'));




