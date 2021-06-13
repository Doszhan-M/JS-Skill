console.group('Задание 5')


/*Общий клас с методоми для приборов, которые работает от розетки*/
class DeviceActions {
    constructor(power_use) {
        this.power_use = power_use; // потребляемая энергия сейчас
    };
    connect () { // подключить к сети
        console.log(`${this.name} connected to electricity`);
        this.power_use = this.power;
    };
    disconnect () { // отключить из сети
        console.log(`${this.name} disconnected from electricity`);
        this.power_use = 0;
    };
    checkPower () { // проверить текущий расход 
        if (this.power_use) {
            console.log(`${this.name} uses ${this.power_use/1000} kW electricity`)
        }
        else {
            console.log(`${this.name} is not pluged in, it uses ${this.power_use} kW`)
        }
    };
}

/* Класс прибора */
class Devices extends DeviceActions {
    constructor(name, power, color, power_use) {
        super(power_use);
        this.name = name;
        this.power = power;
        this.color = color;
    };
    
}


const lamp = new Devices('Lamp', 96, 'black', 0)
lamp.connect()
lamp.checkPower()
lamp.disconnect()
lamp.checkPower()

const teapot = new Devices('Teapot', 1700, 'red', 0)
teapot.connect()
teapot.checkPower()
teapot.disconnect()
teapot.checkPower()


console.groupEnd()