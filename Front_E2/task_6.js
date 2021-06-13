console.log('Задание 6');

let array = [5, 5, null, 5, 5];


for (i = 0; i < array.length; i++) {
    // Проверить не выходит ли индекс цикла за пределы индекса массива
    if (i < array.length - 1) {
        // Если есть хоть одна несовпадение, то объявить об этом и 
        // останвить цикл
        if (array[i] !== array[i + 1]) {
            console.log(false)
            i = array.length
        }
        // Если цикл дошел до конца, то все элементы одинаковы
    } else if (i == array.length - 1) {
        console.log(true)
    }
}