// / Напишите функцию getInfo(persons), которая принимает массив объекто

persons = [
    {
        name: 'Kaya',
        age: 10,
    },
    {
        name: 'Vitya',
        age: 20,
    },
    {
        name: 'Kolya',
        age: 30,
    },
  ]

const getInfo = function(persons){
    ages = persons.map(persons => persons.age)
    const avarageAge = ages.reduce((sum, elem) => (sum + elem), 0) / ages.length;
    const oldestAge =  Math.max(...ages);
    const oldestPersenName = persons.find(elem => elem.age == oldestAge).name
    const result = {avarageAge, oldestPersenName : oldestPersenName};
    return result
  }

console.log(getInfo(persons))