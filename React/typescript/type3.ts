// // 유니온 타입 : 여러 타입 중 하나만 선택할 수 있게 해줌
// let value: string | number = 'hello world';
// value = 123;

// // 함수에 모든 타입을 받을 수 있게 유니온 타입으로 지정
// function getValue(val: string | number | object) {
//   return val;
// }

// // 3가지 타입 모두 가능
// getValue('hi');
// getValue(123);
// getValue({ name: 'kim' });

// /////////////////////////////////////////////////

// // 제네릭 타입으로 변경
// function getValue2<T>(value: T): T {
//   return value;
// }

// console.log(getValue2<string>('hello'));
// console.log(getValue2<number>(123));

// // 배열
// function arrLength<T>(arr: T[]) {
//   return arr.length;
// }

// // arr.length는 number 타입이므로 number 타입으로 반환됨
// console.log(arrLength<string>(['a', 'b', 'c']));
// console.log(arrLength<number>([1, 2, 3, 4, 5]));

// function printFunc2<T>(a: T, b: T): T {
//   console.log(a);
//   console.log(b);
//   return a;
// }

// console.log(printFunc2<String>('hi', 'hello'));

//////////////////// 실습 5 ////////////////////
function arrElement<T>(arr: T[], idx: number): T | false {
  let arrLength = arr.length;
  return arrLength <= idx ? false : arr[idx];
}

let arr1 = [1, 2, 3, 4, 5];
console.log(arrElement<number>(arr1, 2)); // 3 출력
console.log(arrElement<number>(arr1, 7)); // false 출력

let arr2 = ['a', 'b', 'c'];
console.log(arrElement<string>(arr2, 1)); // b 출력
console.log(arrElement<string>(arr2, 5)); // false 출력
