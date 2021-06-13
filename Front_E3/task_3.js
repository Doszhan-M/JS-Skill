console.log('Задание 3')

function getSum(a) {
    let b = a;
    return function (b) {
        console.log(b + a)
    }
}

let func = getSum(4);
func(10)
