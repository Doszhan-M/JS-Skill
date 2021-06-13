// Напишите функцию transformUpvotes(arr)

arr = ['10k', '2.3k', '5k', '32', '28.4k'];

const transformToNum = strVal => {
    return strVal
        .map(val => val.toLowerCase().includes('k') ? val.slice(0, -1) * 1000 : Number(val))
}


console.log(transformToNum(arr))