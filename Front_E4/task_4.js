console.group('Задание 4')


// функция создать прибор
function Device(name, power, color) {
    this.name = name;
    this.power = power;
    this.color = color;
}


// функция с методами для прибора
function DeviceAction() {
    this.power_use = 0;  // потребляемая энергия сейчас
}

DeviceAction.prototype.connect = function () {
    // подключить к сети
    console.log(`${this.name} connected to electricity`);
    this.power_use = this.power;
};

DeviceAction.prototype.disconnect = function () {
    // отключить из сети
    console.log(`${this.name} disconnected from electricity`);
    this.power_use = 0;
};

DeviceAction.prototype.checkPower = function () {
    // проверить текущий расход 
    if (this.power_use) {
        console.log(`${this.name} uses ${this.power_use/1000} kW electricity`)
    }
    else {
        console.log(`${this.name} is not pluged in, it uses ${this.power_use} kW`)
    }
};



// делегирующая связь для расширения методов прибора
Device.prototype = new DeviceAction()


const laptop = new Device('laptop', 17, 'black')
laptop.connect()
laptop.checkPower()
laptop.disconnect()
laptop.checkPower()

const oven = new Device('oven', 2800, 'white')
oven.connect()
oven.checkPower()
oven.disconnect()
oven.checkPower()

console.groupEnd()
