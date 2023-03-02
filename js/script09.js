// Task #09
/* Отримати від користувача число яке більше 0 і якщо воно більше 100 то порахувати знижку 3% і вивести значення якщо більше 3000 то порахувати знижку 5% і якщо більше 10000 то порахувати знижку 7%
в усіх інших випадках вивести: "У вас нема знижки до сплати число яке було введене"*/

let sum = prompt("Cума до сплати", "200");
let result = 0;
let discount= 0;
if (sum <= 0) {
    console.log("Помилка, щось пішло не так!")
} else if (sum > 10000) {
    result = sum - (sum * 0.07);
    console.log('Сума до сплати: ',result);
    discount=sum *0.07;
} else if (sum > 3000) {
    result = sum - (sum * 0.05);
    console.log(result);
    discount=sum *0.05;
} else if (sum > 100) {
    result = sum - (sum * 0.03);
    console.log(result);
    discount=sum *0.03;
} else {
    console.log("У вас немає знижки, сума до сплати незмінна");
}
console.log('Знижка: ', parseInt(discount));


