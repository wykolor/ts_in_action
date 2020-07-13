interface List {
    readonly id: number; // 只读属性
    name: string;
    // [x: string]: any // 索引签名
    age?: number; // 可选属性
}

interface Result {
    data: List[]
}

function render(result: Result): void {
    result.data.forEach(item => {
        console.log(item.id, item.name, item);
        if(item.age) {
            console.log(item.age)
        }
    })
}

let result = {
    data: [
        {
            id: 1,
            name: 'A',
            sex: 'female',
            age: 12
        },
        {
            id: 2,
            name: 'B'
        }
    ]
}

// render(result);

/**
 * 类型断言 绕过类型检查
 * 1、
 * render( <Result>{
    data: [
        {
            id: 1,
            name: 'A',
            sex: 'female'
        },
        {
            id: 2,
            name: 'B'
        }
    ]
    });
   2、
   render({
    data: [
        {
            id: 1,
            name: 'A',
            sex: 'female'
        },
        {
            id: 2,
            name: 'B'
        }
    ]
} as Result);
 * */  

//  索引签名

interface StringArray {
    [index: number]: string
}

let chars: StringArray = ['1', '3', '2'];

interface Names {
    [x: string]: string,
    [y: number]: string
}

// 函数类型接口

// 函数基本类型
// let accuse: (a: number, b: number) => number

// interface Accuse {
//     (a: number, b: number): number
// }


// 类型别名
type Accuse = (a: number, b: number) => number
let accuse: Accuse = (a, b) => a + b;

// 混合接口

interface Lib {
    (): void;
    version: string;
    doSomething(): void
}

function getLib() {
    let lib: Lib = (() => {}) as Lib;
    lib.version = '1.0.0';
    lib.doSomething = () => {};
    return lib;
}

let lib1 = getLib();
let lib2 = getLib();
lib2.version = '2.0.0';
console.log(lib1.version, lib2.version);

