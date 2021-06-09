/* Напишите функцию random(min, max), которая принимает минимальное и максимальное значение
 и возвращает целое случайное число n, такое что min ≤ n ≤ max. Эта функция понадобится нам для следующих заданий. */


 function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  
  console.log( getRndInteger(1, 5) )