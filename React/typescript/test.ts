// 타입스크립트의 기본형태
let a: string = 'hi';
let b: number = 1;
let c: boolean = true;
let d: object = {
  name: 'simson',
  age: 25,
};

console.log(a, b, c, d);

// typescript를 사용하는 이유
// 1) js로 실행 시 타입 체크가 없어 의도와 다른 방식으로 쓰일 수 있음
// 2) 정적파일언어 -> 실행하지 않고 코드 상의 에러를 알려줌 (실시간 디버깅)

// 배열 -> 타입[] = [] 형태로 사용
let arr: string[] = ['a', 'b', 'c', 'hi', 'bye'];
let numArr: number[] = [1, 2, 3, 4, 5];
let boolArr: boolean[]; // 선언
boolArr = [true, false, true]; // 할당

// 객체
let person: {
  name: string;
  age: number;
} = {
  name: 'simson',
  age: 25,
};

// 객체 배열
let personArr: {
  name: string;
  age: number;
}[];

personArr = [
  {
    name: 'simson',
    age: 25,
  },
];

console.log(person);
console.log(personArr);
