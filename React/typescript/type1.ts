//////////////////// 튜플 ////////////////////
// 튜플 타입 선언
let drink: [string, number];

// 튜플 초기화
drink = ['cola', 2000];

// 튜플의 선언과 초기화를 동시에
let drink2: [string, number] = ['cola', 2000];

// js 배열과 동일하게 인덱스 접근 가능, 메서드 사용 가능
console.log(drink[0]);
// spread 연산자 사용 가능
console.log([...drink2, '콜라', 3000]);

// readonly: 데이터 변경 안되게
let drink3: readonly [string, number] = ['cola', 2000];
// drink3.push('콜라'); // 에러 발생
// drink3[0] = '콜라'; // 에러 발생

//////////////////// enum 열거형 ////////////////////
// enum은 기본적으로 0부터 1씩 증가하는 값을 갖는다.
enum Auth {
  admin = 100,
  user = 101,
  guest = 102,
}

// enum은 문자열도 지정해줄 수 있다.
enum Delivery {
  pending = 'pending',
  delivery = 'delivery',
  finish = 'finish',
}

console.log(Auth.admin); // 100
console.log(Auth.user); // 101
console.log(Auth.guest); // 102
console.log(Delivery.pending); // pending

//////////////////// any ////////////////////
let aa: any = ['1', '2', '3', 4, 5, 6];

//////////////////// 실습 1 ////////////////////
let olimpic_newgame: readonly [object, boolean] = [
  {
    name: '쇼트트랙',
    type: '혼성 계주',
  },
  true,
];

// olimpic_newgame[1] = false; // 에러 발생

//////////////////// interface 중요 !!!! ////////////////////
interface Student {
  name: string;
  grade: number;
  isPassed: boolean;
}

let person1: Student = {
  name: 'simson',
  grade: 3,
  isPassed: true,
};

//////////////////// type ////////////////////
type Gender = 'female' | 'male' | 'boy' | 'girl';
const gender: Gender = 'female';

//////////////////// 실습 2 ////////////////////
interface Game {
  title: string;
  price: number;
  desc?: string; // ?는 선택적 프로퍼티
  category: string;
  platform: string;
}

let heroGame_A: Game = {
  title: 'DC 언체이드',
  price: 50000,
  desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
  category: '액션',
  platform: '모바일',
};

let heroGame_B: Game = {
  title: 'MARVEL 퓨처파이트',
  price: 65000,
  category: '롤플레잉',
  platform: '모바일',
};
