// Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.

function getPercents(percent, number){
    return number / 100 * percent;
}

console.log(getPercents(30, 200))