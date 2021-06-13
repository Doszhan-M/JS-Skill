console.log('Задание 7');

let array1 = [1, 2, 3, 'efes', 0, null, '26']

let even_count = 0
let odd_count = 0
let zero_count = 0
let nul_count = 0
array1.forEach(function (item, index, array) {


    if (!isNaN(item)) {
        if (item % 2) {
            even_count++;
        } else if (item === 0) {
            zero_count++;
        } else if (item === null) {
            nul_count++;
        } else {
            odd_count++;
        }
    }
});
console.log(
    `Количество четных элементов ${even_count},
Количество нечетных элементов ${odd_count},
Количество нулей ${zero_count}
Количество null ${nul_count}
Всего элементов ${array1.length}`)