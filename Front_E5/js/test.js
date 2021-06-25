arrA = ["acer", "asus"]
arrB = ["asus", "acer", ]

// let difference = arrA.filter(x => !arrB.includes(x));
// console.log(difference)


let difference = arrA
                 .filter(x => !arrB.includes(x))
                 .concat(arrB.filter(x => !arrA.includes(x)));
console.log(difference)
