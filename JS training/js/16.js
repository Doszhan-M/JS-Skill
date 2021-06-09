// Перепишите функцию так, чтобы она писала 'Hello, {name}' в консоль только при первых трёх вызовах, 
// начиная с 4го ничего не делала. Используйте замыкания.

const sayHello = (() => {
	let countCalls = 0;

	return name => {
    if (countCalls >= 3) return;
    console.log(`Hello, ${name}`);
    ++countCalls;
  }
})();

sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')