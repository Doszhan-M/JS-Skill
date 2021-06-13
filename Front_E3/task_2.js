console.log('Задание 2')

function showPrime_num(num) {
    if (num <= 1000) {
        if (num !== 1 && num !== 0) {
            for (i = 2; i < num; i++) {
                if (num % i == 0) {
                    console.log('Не простое число');
                    break
                } else if (i + 1 == num) {
                    console.log('Простое число');
                }
            }
        } else {
            console.log('0 и 1 не являются простыми числами')
        }
    } else {
        console.log('Данные не верны')
    }
}

showPrime_num(101)