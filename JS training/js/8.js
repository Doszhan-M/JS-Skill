const sayHello = (
    name = 'Иван ', surname = 'Иванов ', age = 10, greeting = 'Привет ') => alert(
    greeting + name + surname + 'тебе' + age + 'лет')

sayHello()
sayHello('Дима')
sayHello('Евгений', 'Петров', 25, 'Здравствуйте, ') 