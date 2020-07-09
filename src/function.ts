// 函数定义
function fn(x: number, y: number) {
    return x + y;
}

// 函数类型定义
let fn1: (x: number, y: number) => number;

type fn2 =  (x: number, y: number) => number;

interface Fn3 {
    (x: number, y: number): number;
}

// 可选参数

function fn4(x: number, y?: number) {
    return y ? x + y : x;
}

fn4(3);

// 默认值
function fn5(x: number, y = 0, z: number, q = 1) {
    return x + y + z + q;
}

fn5(1, undefined, 5);

// 参数集合
function fn6(x: number, ...rest: number[]) {
    return x + rest.reduce((prev, cur) => prev + cur);
}

console.log(fn6(1, 2, 3, 4, 5));

// 函数重载
function fn7(...rest: number[]): number;
function fn7(...rest: string[]): string;
function fn7(...rest: any[]): any {
    const first = rest[0];
    if(typeof first === 'number') {
        return rest.reduce((prev, cur) => prev + cur);
    }

    if(typeof first === 'string') {
        return rest.join('');
    }
}

console.log(fn7(1,2,3,4));
console.log(fn7('a', 'b', 'c'));