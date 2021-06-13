console.log('Задание 4')

// печататься число, начиная с a и заканчивая b
function showNums(a, b){
    for (i = a; i <= b; i++){
        console.log(i)
    }
}

// Каждую секунду выполняет showNums
const intervalid = setInterval(showNums, 1000, 5, 15);
// Защита от зависания, через 5 секунд очищает setInterval
setTimeout(function(){clearInterval(intervalid)}, 5000);
