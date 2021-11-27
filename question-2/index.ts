// 2. Write a function in Javascript, which receives NUMBER and has the next logic:
// a) it prints "foo" if NUMBER is divisible by 2;
// b) it prints "bar" if NUMBER is divisible by 7;
// c) it prints "foobar" if NUMBER is divisible by 14;
// d) it prints NUMBER value for other cases;
// note: NUMBER is a positive integer number;

const numberLogicFn = (num: number) => {
    let result = 'NUMBER';
    if (num % 14 === 0) result = 'foobar'
    else if (num % 7 === 0) result = 'bar'
    else if (num % 2 === 0) result = 'foo'
    return result
}