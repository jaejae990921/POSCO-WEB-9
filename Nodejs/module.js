const a = "a 변수";
const b = "b 변수";

module.exports = {a, b}
// 내보낼 때 변수명과 내보낼 변수명이 같으면 생략 가능
// module.exports = {a: a, b: b}
// 앞에는 키, 뒤에는 값

// {
//     a: "a 변수"
//     b: "b 변수"
// }