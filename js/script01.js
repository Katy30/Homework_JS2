// Task #1
/* дописати реалізацію  калькулятора розглянутого на уроці за допомогою if і else if
при спробі поділити на 0 виводити alert з попередженням. Повині бути команди (додавання, множення, ділення, віднімання)*/


let firstNumber = parseFloat(prompt('Type number', 0));
let secondNumber = parseFloat(prompt('Type number', 0));
let operationNumber = prompt('Operation');
let result = 0;

if (operationNumber === '+') {
    result = firstNumber + secondNumber;
    console.log('Plus value:', result)
} else if (operationNumber === '-') {
    result = firstNumber - secondNumber;
    console.log('Subtraction value:', result)
} else if (operationNumber === '*') {
    result = firstNumber * secondNumber;
    console.log('Multiplie value:', result)
} else if (operationNumber === '/') {

    if (secondNumber === 0) {
        alert('You cannot divide by 0')
    }else {
        result = firstNumber / secondNumber;
        console.log('Division value:', result)
    }


} else {
    console.log('Operation not found')
}