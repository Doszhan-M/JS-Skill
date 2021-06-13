/* Напишите функцию, которая принимает массив чисел, и сначала к каждому четному числу прибавляет 4, у каждого 
нечетного отнимает 2, потом убирает из массива числа, делящиеся на 13 без остатка и возвращает сумму оставшихся чисел */

array = [15, 2, 3, 5, 6];

const calculate = (arr) => {
  return arr
    .map(function (currentValue) {
      if (currentValue % 2 === 0) {
        return currentValue + 4}
      else {
        return currentValue - 2}
    })
    .filter(function (currentValue){
      return currentValue % 13 !== 0;
    })
    .reduce(function (sum, elem){
      return sum + elem;
    }, 0)
}

/* стрелочный вариант */
const calculate2 = (arr) => {
  return arr
    .map(currentValue => currentValue % 2 === 0 ? currentValue + 4 : currentValue - 2)
    .filter(currentValue => currentValue % 13 !== 0)
    .reduce((sum, elem) => sum + elem, 0)
}


console.log(calculate2(array))