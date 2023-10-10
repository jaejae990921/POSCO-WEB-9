// 타입스크립트의 기본형태
var a = 'hi';
var b = 1;
var c = true;
var d = {
    name: 'simson',
    age: 25,
};
console.log(a, b, c, d);
// typescript를 사용하는 이유
// 1) js로 실행 시 타입 체크가 없어 의도와 다른 방식으로 쓰일 수 있음
// 2) 정적파일언어 -> 실행하지 않고 코드 상의 에러를 알려줌 (실시간 디버깅)
// 배열 -> 타입[] = [] 형태로 사용
var arr = ['a', 'b', 'c', 'hi', 'bye'];
var numArr = [1, 2, 3, 4, 5];
var boolArr; // 선언
boolArr = [true, false, true]; // 할당
// 객체
var person;
person = {
    name: 'simson',
    age: 25,
};
// 객체 배열
var personArr;
personArr = [
    {
        name: 'simson',
        age: 25,
    },
];
