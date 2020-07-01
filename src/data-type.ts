// 原始类型
let bool: boolean = true;
let num: number = 12;
let str: string = 'kolor';

// 数组
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];

// 元组 固定元素个数和类型
let tuple: [number, string] = [12, 'kolor'];
// console.log(tuple);
tuple.push(2);
// 但是访问不了tuple[2]元素 

// 函数

let add = (x: number, y: number) => x + y;

let sum: (x: number, y: number) => number;
sum = (a, b) => a + b;
// console.log(sum(1,2));

// 对象
let obj: { x: number, y: number } = { x: 1, y: 2 };
obj.x = 21;

// Symbol
let symbol1: Symbol = Symbol();
let symbol2 = Symbol();
// console.log(symbol1 === symbol2); // false

// undefined null
let un: undefined = undefined;
let nu: null = null;

// any
let a;


