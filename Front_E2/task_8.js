console.log('Задание 8');

let map = new Map();
map.set("1", "string");  
map.set(1, "number"); 
map.set(true, "boolean");
console.log(map);

map.forEach(function(item, index,) {
    console.log(`Ключ — ${index}, значение — ${item}`);
})