let str1 = 0.1;

let str2 = 0.2;

const result = str1 + str2;

console.log(result.toFixed(1));

// 

let a = "1";

let b = 2;

console.log(parseInt(a) + b);  // Пeреведення а зi string in number

// 

function amountFiles(sizeFlash, sizeFile) {
    // Переведення обсягу флешки в Мб
    sizeFlash *= 1024;

    // Обчислення кількості файлів
    const amount = Math.floor(sizeFlash / sizeFile);

    return amount;
}

const sizeFlashGB = parseFloat(prompt("Введіть обсяг флешки в Гб:")); // Запит на введення обсягу флешки
const sizeFileMB = 820; // Розмір файлу в Мб

const amount = amountFiles(sizeFlashGB, sizeFileMB);
console.log(`Кількість файлів розміром ${sizeFileMB} Мb, які поміщаються на флешці обсягом ${sizeFlashGB} Гб: ${amount}`);
