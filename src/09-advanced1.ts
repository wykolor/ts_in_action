// 高级类型

// 交叉类型
interface DogInterface {
  run(): void;
}

interface CatInterface {
  jump(): void;
}

// 交叉类型取所有类型的并集

let pet: DogInterface & CatInterface = {
  run() {},
  jump() {},
};

// 联合类型

let a1: number | string = 1;
let a2: "a" | "b" | 1 = "a";
let a3: 1 | 2 | 3 = 2;

class Dog1 implements DogInterface {
  run() {}
  eat() {}
}

class Cat1 implements CatInterface {
  jump() {}
  eat() {}
}

enum Master {
  Boy,
  Girl,
}

function getPet(master: Master) {
  let pet = master === Master.Boy ? new Dog1() : new Cat1();
  // 联合类型可以直接访问两种类型的交集 eat方法
  pet.eat();
  return pet;
}

// 可区分的联合类型 创建类型保护区块
interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Circle {
  kind: "circle";
  r: number;
}

type Shape = Square | Rectangle | Circle;

/**
 * function area(s: Shape) {
        switch (s.kind) {
            case "square":
            return s.size * s.size;
            case "rectangle":
            return s.width * s.height;
        }
    }
    console.log(area({ kind: "circle", r: 12 })); // 直接打出undefined 没有检测出来
 *
 * */

// 更改

function area(s: Shape) {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.width * s.height;
    case "circle":
      return Math.PI * s.r ** 2;
    default:
      return ((e: never) => {
        throw new Error(e);
      })(s);
  }
}
console.log(area({ kind: "circle", r: 2 }));
