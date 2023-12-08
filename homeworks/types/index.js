// let str1 = 0.1;

// let str2 = 0.2;

// const result = str1 + str2;

// console.log(result.toFixed(1));

// //

// let a = "1";

// let b = 2;

// console.log(parseInt(a) + b);  // Пeреведення а зi string in number

//

// function amountFiles(sizeFlash, sizeFile) {
//     // Переведення обсягу флешки в Мб
//     sizeFlash *= 1024;

//     // Обчислення кількості файлів
//     const amount = Math.floor(sizeFlash / sizeFile);

//     return amount;
// }

// const sizeFlashGB = parseFloat(prompt("Введіть обсяг флешки в Гб:")); // Запит на введення обсягу флешки
// const sizeFileMB = 820; // Розмір файлу в Мб

// const amount = amountFiles(sizeFlashGB, sizeFileMB);
// console.log(`Кількість файлів розміром ${sizeFileMB} Мb, які поміщаються на флешці обсягом ${sizeFlashGB} Гб: ${amount}`);

//

// function amountChoco(sumMonay, priceChoco) {
//     // Обчислення кількості шоколадок
//     const amount = Math.floor(sumMonay / priceChoco);

//     // Обчислення залишку грошей
//     const rest = sumMonay % priceChoco;

//     return [amount, rest];
// }

// const sumMonay = parseFloat(prompt("Введіть суму грошей в гаманці:"));
// const priceChoco = parseFloat(prompt("Введіть ціну однієї шоколадки:"));

// const [amount, rest] = amountChoco(sumMonay, priceChoco);
// console.log(`За ${sumMonay} грн можна купити ${amount} шоколадок і залишиться здачі ${rest} грн.`);

//

// const num = prompt('Введіть трьохзначне число');

// let turnNum = 0;

// if (num.length === 3) {
//     turnNum = num % 10; // Отримання першої цифри числа
//     turnNum = turnNum * 10 + Math.floor((num / 10) % 10); // Отримання другої цифри числа
//     turnNum = turnNum * 10 + Math.floor(num / 100); // Отримання третьої цифри числа

//     console.log(`Число задом наперед: ${turnNum}`);
// } else {
//     console.log("Будь ласка, введіть тризначне число.");
// }


