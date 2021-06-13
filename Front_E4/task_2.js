console.group('Задание 2')

let str1 = 'c';
let str2 = 'a';
let obj = {
    a : 1,
    b : 3,
}

// Проверить есть ли свойство с именем строки
function checkValue(string, object){
    console.log(string in object);
};

checkValue(str2, obj);


console.groupEnd()