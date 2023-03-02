// Task #10
/* отримати від користувача назву трарини і за допогомою світч вивести звук який вона видає.
Наприклад корова: му-му  і т.д */

let animal = prompt('Скажіть яка Ваша улюблена тваринка і дізнайтесь які звуки вона видає?', 'котик')
switch (animal.toLowerCase()) {
    case 'кіт':
    case 'котик':
    case'кошеня':
    case'cat':
    case 'котяра':
        console.log('мяу-мяу');
        break;
    case'собака':
    case'собачка':
    case'пес':
    case'dog':
        console.log('гав-гав');
        break;
    case'корова':
    case'корівка':
    case'cow':
        console.log('му-му');
        break;
    case'свиня':
    case'свинка':
    case'pig':
        console.log('хрю-хрю');
        break;
    case'курка':
    case'курочка':
    case'chicken':
        console.log('ко-ко');
        break;
    case'півень':
    case'півник':
    case'cock':
        console.log('куу-ку-рі-кууу');
        break;
    default:
        console.log('Вибачте, але є лише звуки таких тварин як: кіт, собака, корова, свинка, курка, півень')
}
