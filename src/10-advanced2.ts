// 索引类型

let objs = {
  a: 1,
  b: 2,
  c: 3,
};

function getValues<T, K extends keyof T>(obj: T, values: K[]): T[K][] {
  return values.map((key) => obj[key]);
}

console.log(getValues(objs, ["a", "b"]));
// console.log(getValues(objs, ["d", "f"]));

interface Obj {
  a: number;
  b: string;
}

let key: keyof Obj;

// T[K]
let value: Obj["a"];

//  T extends U
