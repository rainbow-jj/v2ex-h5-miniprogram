
// 可选参数和默认参数
// 可选参数
function createUserId(name:string, id:number, age?:number): string {
  return name + id;
}
// 默认参数
function createUserId(
  name:string = "shih",
  id:number,
  age?: number,
):string {
  return name +id
}

// 剩余函数
function push(array, ...items) {
  items.forEach(function(item) {
    array.push(item);
  });
}
let a = [];
push(a, 1,2,3);

function add(a: number, b: number):number;
function add(a: string, b: string):string;
function add(a: string, b: number): string;
function add(a: number, b: string):string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b
}

// 重载类中的方法
class Calculator {
  add(a:number, b:number): number;
  add(a:string, b:string): string;
  add(a:string, b:number): string;
  add(a:number, b:string): string;
  add(a:Combinable, b:Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
      return a.toString() + b.toSting();
    }
    return a + b;
  }
}

const calculator = new Calculator();
const result = calculator.add('Seme', 'sha');
