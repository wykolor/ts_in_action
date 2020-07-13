// 接口类只能约束类的公有成员

interface Human {
    name: string,
    eat(): void;
}

// 类实现接口

class Kolor implements Human {
    constructor(public name: string) {

    };
    eat() {
        console.log('eating food');
    }
}

// 接口的继承
interface Man extends Human {
    walk(): void;
}

interface Child {
    run(): void;
}

interface Marry extends Man, Child {};

let marry: Marry = {
    name: 'kolor',
    eat(){},
    walk(){},
    run(){},
}