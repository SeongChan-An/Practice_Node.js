# 환경설정

확장프로그램
- ejs snippets  
: HTML 코드를 자동완성 시켜주는 확장프로그램 

(option)
- Material Icon Theme  
: 확장자에 맞게 아이콘 변경

개인적으로 사용하는 것은
- Dracula Official (Theme)
- vscode-icons
- Code Runner
- Beautify
- ejs Snippets
- Auto Rename Tag
- Color Highligh (CSS)

## 유틸 프로그램
- postman  
: 서버 통신 테스트를 위해 사용함 get, post

## node package
- express-generator (-g 글로벌 설치)
  >express [type] [name]  
  express --ejs first-project  
  를 통해 ejs 타입을 가진 express 구조의 first-project 폴더 생성 
- nodemon (-D 옵션을 통해 설치)
  >nodemon ./bin/www  
  을 통해 서버를 on/off 할 필요 없이 변경사항을 바로 확인 할 수 있도록 함.

## 참고 문법  
```jsx
// 구조 분해 할당
const colors = ['red', 'yellow', 'black'];
const Colors = {
    blue: 'blue',
    green: 'green',
    white: 'white'
}

// 오른쪽에 있는 요소를 하나하나 분해해서 변수에 하나씩 할당
// const red = colors[0];
// const yellow = colors[1];
// const black = colors[2];

const [red, yellow, black] = colors;

// 객체인 경우에는 속성의 이름이 있기 때문에 위치 일치하지 않아도 된다.
//const [, yellow] = colors;
const { white, green} = Colors;

yellow;

Object.keys(Colors).forEach(prop => console.log(`${prop}: ${Colors[prop]}`));

```

```jsx
function delay(millisecond) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 랜덤함수를 이용하여 랜덤하게 함수를 실행시키고 싶을 때 
            if (Math.floor(Math.random() * 10) % 2 === 0) {
                resolve("sucess");
            } else {
                reject("failure");
            }
        }, millisecond);
    });
}

// 기존의 promise 를 이용한 코드
// then 과 catch에 callback 함수를 통해 원하는 동작을 하도록 분기한다.
// delay 시간을 줌으로써 비동기적인 프로그래밍을 구현한다.
// delay(3000)
//     .then((result) => {
//         console.log("done promise! " + result);
//     })
//     .catch((error) => {
//         console.error("fail promise! " + error);
//     });
//     console.log("----------------------------");

    // 비동기 함수, 함수 앞에 async 예약어를 추가
    // 기존의 promise 객체를 반환하는 함수가 있다면
    // await 추가
    async function main () {
        try {
            console.log("start ~ !!")
            const result = await delay(3000);
            console.error("done async!" + result);
        } catch(e) {
            console.error("fail async!" + e);
        }
    }

    main();
```