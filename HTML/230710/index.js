// 변수란 특정 값을 저장하는 공간
// abc = "abcdefg~~~"

// 키워드 변수이름 = 값;
// 키워드 : var, let, const

var number = 5; // 변수의 선언과 할당을 동시에

var number1; // 변수를 선언
number1 = 5; // 변수에 값을 할당
number1 = 10; // 변수에 값을 재할당

let string = "가나다"; // 문자열은 " " or ' ' or ` `
string = "abc"; // 재할당

const string2 = "가가가";

// var let const
// var : 재선언O, 재할당 O
// let : 재선언 X, 재할당 O - let 사용을 권장
// const : 재선언 X, 재할당 X

// 변수 이름으로 문자, 숫자, $, _ 사용 가능
// 숫자로 시작 불가능
// 예약어 사용 불가능
// 변수 이름은 의미있게 작성
// 상수는 대문자로 작성 (암묵적 룰)

// 강한 타입 언어 : 변수의 타입을 강하게 체크 -> 자료형을 명시해야 함 -> java, c, c++, c#
// 약한 타입 언어 : 변수의 타입을 체크하지 않음 -> 자료형을 명시하지 않음 -> javascript, python

// ' ', " ", ` `(백틱) - 문자열
let test = '1';
let string99 = "string";
let string199 = `abc`;

// 백틱을 작성하면 문자열 안에 변수를 넣을 수 있음 -> js를 사용하겠다
let myName = "심재운";
console.log(`안녕하세요 ${myName}입니다`);

let hi = `안녕하세요 ${myName}입니다`;
console.log(hi);

// 숫자형 데이터
let number99 = 123;
let float99 = 1.23;

// 불린형 데이터
let t99 = true; // 참
let f99 = false; // 거짓

// 미할당 데이터 -> undefined : 변수를 선언했지만 값을 할당하지 않음
let undefined99;

// 빈 데이터 -> null : 변수를 선언하고 null을 할당함
let null99 = null;

/* ------------------------------------------------------------------------- */
// 배열 데이터 -> Array : 여러개의 데이터를 하나의 변수에 저장
// 다른 타입들도 저장 가능
let fruits = ["사과", "바나나", "포도", "딸기", "수박"];
console.log(fruits[0], fruits[3]); // 사과, 딸기
console.log(fruits.length); // 배열의 길이

fruits.push("귤"); // 배열의 끝에 데이터를 추가
console.log(fruits);
// fruits = ["사과", "바나나", "포도", "딸기", "수박", "귤"];

fruits.pop(); // 배열의 끝 데이터를 삭제
console.log(fruits);
// fruits = ["사과", "바나나", "포도", "딸기", "수박"];

fruits.unshift("귤"); // 배열의 앞에 데이터를 추가
console.log(fruits);
// fruits = ["귤", "사과", "바나나", "포도", "딸기", "수박"];

fruits.shift(); // 배열의 앞 데이터를 삭제
console.log(fruits);
// fruits = ["사과", "바나나", "포도", "딸기", "수박"];

console.log(fruits.indexOf("포도")); // 배열의 데이터의 인덱스를 반환 -> 2
// 만약 데이터가 없으면 -1 출력

console.log(fruits.includes("포도")); // 배열의 데이터가 있는지 확인 -> true
/* ------------------------------------------------------------------------- */