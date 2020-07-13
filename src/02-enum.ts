/**
 * 枚举： 增强代码可读性
 * */  

//  数字枚举
enum Role {
    Reporter = 1,
    Developer,
    Owner
}

console.log('角色', Role.Reporter);
console.log(Role);

// 字符串枚举
enum Message {
    success = '恭喜你，成功了',
    warnning = '警告，不可继续操作',
    fail = '抱歉，失败了'
}
console.log(Message);

// 异构枚举 数字枚举和字符串枚举
enum Answer {
    N,
    Y = 'yes'
}
console.log(Answer);

// 枚举成员 计算型和常量 不可编辑 只读
// Answer.N=6;

enum Char {
    // const member
    a,
    b = Char.a,
    c = 2 + 1,
    // computed member 运行时才会得出真正的计算值
    d = Math.random(),
    e = '124'.length,
    f = 2 // 在computed后面的成员必须赋予初始值
}


// 常量枚举 只可访问其成员 编译时期常量枚举就会消失不可访问
const enum Month {
    Mon,
    Fri,
    May,
    July
}
const arr = [Month.Mon, Month.May, Month.July, Month.Fri];
console.log('常量枚举', arr);


// 枚举类型

enum A {
    a = 1,
    b = 2
}
enum B {
    a,
    b
}
enum S {
    a = 'month',
    b = 'year'
}

let user:A.a = 3;
console.log(user);
let b: B.b = 2;
console.log(b);

