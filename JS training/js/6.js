/* Напишите функцию repeatWord(word, count), которая принимает слово и количество раз для повторения, 
Например если вызвать repeatWord('слово', 3) функция напечатает "слово1, слово2, слово3, " на одной строке. */

function repeatWord(word, count){
    for (let i = 1; i <= count; ++i){
    console.log(`word ${i}`)
    }
}

repeatWord('слово', 3)