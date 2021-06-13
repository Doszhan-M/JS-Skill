/* Сверстайте 5 параграфов с текстом. С помощью js меняйте цвет фона каждого параграфа на случайный 
каждую секунду. Создайте массив с названиями цветов ['blue', 'cyan', ...] и с помощью функции из предыдущего 
задания выбирайте случайный цвет из массива.*/

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

const colors = ['red', 'green', 'blue', 'yellow', 'cyan', 'purple'];

const getColor = (colors) => {
    return colors[getRndInteger(0, colors.length - 1)]
}

const getParagraphs  = document.querySelectorAll('p')

setInterval(() => {
getParagraphs.forEach(elem => {
    elem.style.backgroundColor = getColor(colors)
})}, 1000)