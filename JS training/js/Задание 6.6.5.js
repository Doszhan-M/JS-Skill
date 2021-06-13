const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let num = Math.round(Math.random() * 100);
        if (num % 2 == 0) {
            resolve(num)
        } else {
            reject(num) 
        }}
        , 1000)
})

myPromise.then(number => console.log('Завершено успешно', number))
myPromise.catch(number => console.log('Завершено с ошибкой', number))