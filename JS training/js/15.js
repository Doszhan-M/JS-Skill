/* Напишите функцию countChars(str), которая принимает строку и возвращает количество букв в этой строке. 
Например countChars('Арарат') должен вернуть { а: 3, р: 2, т: 1 }*/

str = 'Арарат'

const countChars = str => {
    obj = {};
    array = str.split('')
    array.forEach(element => {
        char = element.toLowerCase();
        if (obj[char] === undefined) {
            obj[char] = 0;
        }
        obj[char]++;
    });
    return obj
}

console.log(countChars(str))