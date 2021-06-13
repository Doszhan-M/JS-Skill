console.log('Задание 2');
let b = true;

if (typeof b === 'number'){
  console.log('это число');
} else if (typeof b === 'string'){
  console.log('это строка');
}else if (typeof b === 'boolean'){
  console.log('это логик');
} else {
    console.log('Тип не определён');
}