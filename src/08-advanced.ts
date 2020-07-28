// 基本类型推断
let abc = 1;

let y;

let cc = [];

let cba = "srrer";

// 最佳通用类型推断
let x = [0, 1, null, true];
let c = (x = 1) => x + 1;

// 上下文推断
window.onkeydown = (event: any) => {
  console.log(event.button);
};

// 类型断言
interface Foo {
  bar: number;
}
let foo = {} as Foo;
foo.bar = 1;

// 类型兼容性
let s: string = "a";
// s = null;

// 接口兼容性
interface X {
  a: any;
  b: any;
}

interface Y {
  a: any;
  b: any;
  c: any;
}

let x1: X = {
  a: 1,
  b: 2,
};

let y1: Y = {
  a: 3,
  b: 4,
  c: 5,
};

x1 = y1;

// y1 = x1; 类型不兼容

// 函数兼容性

type Handler = (a: number, b: number) => void;
function hof(handler: Handler) {
  return handler;
}

// 目标函数的参数必须多余源函数的参数

let handler1 = (a: number) => {};
hof(handler1);
let handler2 = (a: number, b: number, c: number) => {};
// hof(handler2);

// 可选参数和剩余参数
let aa1 = (a: number, b: number) => {};
let aa2 = (a: number, b?: number) => {};
let aa3 = (...args: number[]) => {};

// 固定参数是可以兼容可选参数和剩余参数的
aa1 = aa2;
// aa2 = aa3;

// 类型保护
enum Type {
  Strong,
  Week,
}

class Java {
  helloJava() {
    console.log("hello java");
  }
  java: any;
}

class Javascript {
  helloJavascript() {
    console.log("hello javascript");
  }
  javascript: any;
}

function isJava(lang: Java | Javascript): lang is Java {
  return (lang as Java).helloJava !== undefined;
}

function getLanguage(type: Type, x: string | number) {
  let lang = type === Type.Strong ? new Java() : new Javascript();
  //   类型断言
  //   if ((lang as Java).helloJava) {
  //     (lang as Java).helloJava();
  //   } else {
  //     (lang as Javascript).helloJavascript();
  //   }

  // 1、instanceof
  //   if (lang instanceof Java) {
  //     lang.helloJava();
  //   } else {
  //     lang.helloJavascript();
  //   }

  // 2、in
  //   if ("java" in lang) {
  //     lang.helloJava();
  //   } else {
  //     lang.helloJavascript();
  //   }

  // 3、typeof
  //   if (typeof x === "string") {
  //     x.length;
  //   } else {
  //     x.toFixed(2);
  //   }

  // 4、自定义方法 isJava
  if (isJava(lang)) {
    lang.helloJava();
  } else {
    lang.helloJavascript();
  }
  return lang;
}
