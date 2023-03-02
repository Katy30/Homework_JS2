// Task #3
/* використовуючи цикл виведіть суму чисел між  А і В з умовою що A<B  */

let a = prompt("Яким буде число а?", 6)
let b = prompt("Яким буде число b?", 9)
let result = a
if (a<b) {
    for (let i = 0; i < b; i++) {
        result++
    }
    console.log(result)
} else {
    console.log("Дія неможлива, оскільки а>b!")
}

    
