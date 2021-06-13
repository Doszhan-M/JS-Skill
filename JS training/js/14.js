/*  Напишите функцию, которая принимает массив массивов вида [['ключ1', 'значение1'], ['ключ2', 'значение2']] 
и возвращает объект вида { ключ1: 'значение1', ключ2: 'значение2' }*/


array = [ ['key2', 3], ['key1', 'hello'], ]

const getObject = function (array){
    obj = {}
    array.forEach(element => {
        obj[element[0]] = element[1]
    });
    return obj
}

console.log(getObject(array))