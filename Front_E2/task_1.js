console.log('Задание 1');
let a = prompt('Введите число')

a = +a;
if (!isNaN(a)) {
    if (a % 2) {
        console.log('Это нечетное число');
    } else {
        console.log('Это четное число');
    }
} else {
    console.log('Упс, кажется вы ошиблись!');
}