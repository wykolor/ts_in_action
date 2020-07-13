class Dog {
    // 类加上 private 私有修饰符 不能被实例化也不能被继承
    constructor (name: string) {
        this.name = name;
    }
    public name: string;
    run() {}
    private print() {} // 私有成员
    readonly age: number = 4; // 类的只读属性，不能被更改，所以只读属性必须初始化值
    static food: string = 'apple'; // 类的静态成员，只能通过类名访问，不能通过实例访问
}
// 类的属性都是实例属性  类的方法都是实例方法

class Husky extends Dog {
    constructor (name: string, color: string) {
        super(name);
        this.color = color; // this一定要在super之后才能使用
    }
    color: string;
}

// 抽象类 只能被继承不能实例化

abstract class Animal {
    eat() {
        console.log('eating food');
    }
    abstract sleep(): void; // 抽象方法不需要制定具体的实现 可以实现在不同的继承类中实现不同的功能
}

class LittleDog extends Animal {
    constructor() {
        super();
    }
    sleep() {
        console.log('little dog sleeping');
    }
}
let littleDog = new LittleDog();

class Cat extends Animal {
    constructor() {
        super();
    }
    sleep() {
        console.log('cat sleeping');
    }
}
let cat = new Cat();

let animal: Animal[] = [littleDog, cat];
animal.forEach(item => {
    item.sleep(); // 实现类的多态
});
 
// 方法的链式调用 this的应用

class Chain {
    stpe1() {
        console.log('stpe1');
        return this;
    }
    step2() {
        console.log('step2');
        return this;
    }
}

let chain = new Chain();
chain.stpe1().step2().stpe1();

// 链式调用在子类中也是可以使用的
class ChildChain extends Chain {
    constructor() {
        super();
    }
    next() {
        console.log('下一步');
        return this;
    }
}
let childChain = new ChildChain();
childChain.next().stpe1().step2().next();