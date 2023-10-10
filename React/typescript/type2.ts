// 자바스크립트의 경우
// function jsFunc(a, b) {
//   console.log(a);
//   console.log(b);
// }
// jsFunc(10, 20);

// 타입스크립트의 경우
function tsFunc(a: number, b: number, c?: number): number {
  return a + b;
}

// 매개변수가 3개면 3개 넣어줘야 함
tsFunc(10, 20, 30);
// 매개변수에 ? 붙이면 선택적 매개변수가 돼서 2개만 넣어줘도 됨
tsFunc(1, 2);

// 화살표 함수
const arrowTsFunc = (a: number, b: number): number => {
  return a + b;
};

// return 생략한 화살표 함수
const arrowTsFunc2 = (a: number, b: number): number => a + b;

// 위 3가지는 모두 :number를 생략할 수 있다.

// 리턴이 없는 함수
function printFunc(a: string, b: string): void {
  console.log(a, b);
}

//////////////////// never 타입 ////////////////////
// never: 특정 조건에서만 빠져나갈 수 있고, 어떤 조건에서는 무한루프
// 항상 함수 끝에 도달하지 않는 경우
// function goinOn(a: number): never {
//   while (true) {
//     console.log('go');
//   }
// }

// goinOn(1);

// never는 사용하지 않는 것이 좋다.

//////////////////// 실습 3 ////////////////////

// function sum1(a: number, b: number) {
//   console.log(a + b);
// }

// sum1(5, 11);

//////////////////// 실습 4 ////////////////////
function sum2(...a: number[]) {
  let sum = a.reduce((acc, cur) => acc + cur, 0);
  // reduce: 배열의 모든 요소를 더해줌 acc는 누적값, cur은 현재값, 0은 초기값
  return sum;
}

console.log(sum2(1, 2, 3, 4, 10));

//////////////////// 제네릭 ////////////////////
// 제네릭: 함수를 호출할 때 타입을 지정하는 것
