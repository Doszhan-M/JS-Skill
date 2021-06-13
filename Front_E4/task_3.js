console.group('Задание 3')

// Создать объект без прототипа
function creatEmptyObject() {
    return Object.create(null);
}

const empty_obj = creatEmptyObject()

// Убедиться в типе переменного, что это объект
console.log(typeof(empty_obj))
// Есть ли прото внутри нового объекта
console.log(empty_obj.__proto__)


console.groupEnd()

