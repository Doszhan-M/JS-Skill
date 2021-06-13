console.log('Задание 5');

const obj = [null, 2, '3', 4, false];
console.log(`Количество элементов ${obj.length}`);
obj.map(function (item, index) {
    console.log(`Элемент ${index} - ${item}`)
});