console.group('Задание 1')

// Создать объект
let obj1 = {
    a: 1,
    b: 2,
};
// Создать объект прототип 
let obj2 = Object.create(obj1)
// Добавить значения на новый обьект
obj2.c = true

// Вернуть только свои значения объекта
function showValue(obj) {
    a: 5;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key} : ${obj[key]}`);
        }
    }
}

showValue(obj1)
showValue(obj2)


console.groupEnd()