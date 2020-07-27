// 泛型

function log<T>(value: T): T {
  console.log(value);
  return value;
}

// 泛型类
class Log<T> {
  run(value: T) {
    console.log(value);
    return value;
  }
}

// 实现的时候指定类的属性类型
let log1 = new Log<number>();
log1.run(12);
let log2 = new Log();
log2.run("12");
log2.run(1212);

// 泛型约束

interface Length {
  length: number;
}

function Print<T extends Length>(value: T): T {
  console.log(value, value.length);
  return value;
}
