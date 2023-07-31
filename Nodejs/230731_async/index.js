// setTimeout(code, delay) : delay만큼 기다리고 code 실행
// setInterval(code, delay) : delay마다 code 실행

// console.log(1);
// setTimeout(() => {console.log(2)}, 2000);
// console.log(3);

// ---------------------------------------------- //

// 편의점에 들어가서 음료수를 사고 나오는 상황
// function goMart() {
//     console.log('마트에 가서 어떤 음료를 살지 고민한다.');
// }

// function pickDrink() { // 3초 뒤에 실행
//     setTimeout(function() {
//         console.log('고민 끝!!');
//         product = '제로 콜라';
//         price = 2000;
//     }, 3000);
// }

// function pay(product, price) {
//     console.log(`상품명: ${product}, 가격: ${price}`);
//     // 상품명: undefined, 가격: undefined
//     // product, price가 pickDrink()에서 정의되기 전에 실행되었기 때문에 undefined 출력
// }

// let product;
// let price;
// goMart();
// pickDrink();
// pay(product, price);

// ---------------------------------------------- //

// 콜백함수 : 함수 타입 파라미터 맨 마지막에 하나 더 선언
// function mainFunc(param1, param2, callback) {
//     console.log(param1, param2);
//     callback(param1);
// }

// function callbackFunc(param) {
//     console.log("콜백함수 입니다.");
// }

// mainFunc(1, 2, callbackFunc);

// ---------------------------------------------- //

// 콜백함수를 이용
// 편의점에 들어가서 음료수를 사고 나오는 상황
// function goMart() {
//     console.log('마트에 가서 어떤 음료를 살지 고민한다.');
// }

// function pickDrink(callback) { // 3초 뒤에 실행
//     setTimeout(function() {
//         console.log('고민 끝!!');
//         product = '제로 콜라';
//         price = 2000;
//         callback(product, price);
//     }, 3000);
// }

// function pay(product, price) {
//     console.log(`상품명: ${product}, 가격: ${price}`);
// }

// let product;
// let price;
// goMart();
// pickDrink(pay);

/*
이 방식은 pay() 함수가 필요없고, 익명함수로 바로 함수를 넘김
pickDrink(function(product, price) {
    console.log(`상품명: ${product}, 가격: ${price}`);
});
*/

// ---------------------------------------------- //