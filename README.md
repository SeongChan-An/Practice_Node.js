# NodeJS 학습

NodeJS란 ?
> Node.js 는 javascript 런타임 입니다.  
  Node.js는 이벤트기반, 논 블로킹 I/O모델을 사용해 가볍고 효율적입니다.

  : **런타임이란 ?**     
  프로그래밍 언어가 구동되는 환경

  이전에 JS는 브라우저 내에서만 사용할 수 있는 한계로 확장성이 좋지 않았지만
  NodeJS로 인해 확장성이 넓어짐. (서버, 머신러닝, 데스크탑 앱)

: **이벤트기반 ?**  
이벤트가 발생할 때 미리 지정해둔 작업을 수행하는 방식
1. 실행 순서대로 호출스택에 쌓기
2. 백그라운드 필요 작업은 백그라운드로 이동
3. 백그라운드에서 작업이 완료되면 태스크 큐로 이동
4. 호출 스택들이 다 완료되면 이벤트 루프가 테스크 큐 작업을 호출 스택으로 이동


참고   
: [Event Loop Explanation (Youtube)](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

: [Event Loop Visualization](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

: **논 블로킹 I/O ?**
1. 이전 작업이 완료될 때 까지 기다리지 않고, 다음 작업들을 수행
2. 오래걸리는 작업은 백그라운드에서 처리

: **싱글스레드란 ?**  
주어진 작업을 한개의 스레드(작업을 실행하는 단위)가 처리하는 방식

- 비교  
  - 싱글스레드
    1. 주어진 작업을 혼자 처리하는 방식
    2. 스레드에 문제가 생길 시 전체에 문제가 생길 가능성 있음
    3. 메모리나 기타 자원을 효율적으로 사용가능
  - 멀티스레드
    1. 여러개의 스레드가 일을 나눠 처리
    2. 하나의 스레드가 문제 생겨도 다른 스레드로 대체 가능
    3. 스레드 간의 작업 전환 비용, 놀고 있는 스레드 문제 발생

## NodeJS 장단점
- 장점
  1. 싱글 스레드, 논블로킹 I/O에 따른 빠른속도
  2. 컴퓨터 자원을 덜 사용
  3. I/O 작업이 많은 서버로 적합(채팅, 스트리밍)
  4. JavaScript를 사용하기에 프론트엔드 개발자 사용 용이
  5. 생산성이 높음

- 단점
  1. 싱글 스레드 기반이라 자원을 많이 필요로 하는 작업이 오면 부하가 크게 걸림
  2. 싱글 스레드는 CPU 코어 한개만 사용 => CPU 작업 많은 서버로 부적합.
  3. 로직이 복잡한 경우 콜백함수의 늪에 빠질 수 있음.
  4. 에러가 발생하면 프로세스 자체가 죽는다..

  ### Node.js 가 어울리는 서비스
  1. 간단한 로직으로 구성된 서비스
  2. 빠른 응답시간이 요구되는 서비스
  3. 빠른 개발이 요구되는 서비스
  4. 비동기방식에 어울리는 서비스(채팅, 스트리밍 서비스)

## Server 란 ?
네트워크를 통해 클라이언트에 정보나 서비스를 제공하는 컴퓨터 혹은 프로그램 (클라이언트의 요청에 대한 응답을 하는 역할)

**:localhost (127.0.0.1)**  
서버 내부의 주소  
(서버 개발할 때 테스트 용으로 사용)

**:PORT**  
서버내의 프로세스를 구분하는 번호

참고 내용  
: https://ko.wikipedia.org/wiki/HTTP_%EC%83%81%ED%83%9C_%EC%BD%94%EB%93%9C

## NPM (Node Package Manager)
Node.js 로 만들어진 패키지를 설치하고 관리해주는 툴
package.json 을 통해 의존성 및 버전 관리를 함
> npm init  
: package.json 생성

> npm install -D   
: -D 옵션을 통해 개발환경에서만 사용하는 패키지 설치

## Framework   
https://ko.wikipedia.org/wiki/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC  
체계적인 코드관리, 유지보수가 용이

### express  

|비교|Node.js|Express|
|----:|:---:|:---:|
|1|req.rul 파싱|req.get("경로")|
|2|req.method 확인|req.query로 확인|
|3|쿼리문 파싱| |

### express-generator  
express의 기본 구조를 만들어줌  
구조에 대한 설명
>**bin/www 파일**  
서버를 실행하는 파일, 포트 번호를 지정가능

>**public 폴더**  
image, js, css등 리소스 저장

>**routes 폴더**  
페이지 라우팅과 관련된 파일 저장  
실제 서버 로직 작성

>**views 폴더**  
템플릿 파일.. jade, ejs   
(템플릿파일 : HTML 코드 내부에 js 코드를 작성할 수 있음 ex) <%= title %> )

>**app.js**  
핵심적인 서버 역할  
라우팅의 시작점

>**pacakge.json**  
의존성 관리 및 버전 관리

### express에서 HTTP method 
- GET  
요청 받은 정보를 검색(READ)하여 응답
- POST  
요청된 자원을 생성(CREATE)
- PUT  
요청된 자원을 수정(UPDATE)
- DELETE  
요청된 자원을 삭제(DELETE)

## Middleware  
> 비즈니스 로직을 클라이언트와 DBMS사이의 미들웨어 서버에서 동작하도록 함으로써 클라이언트는 입력과 출력만 담당하도록 함.  

출처 : [velog:웹서버의 동작](https://velog.io/@leesg619/%EC%9B%B9%EC%84%9C%EB%B2%84%EC%9D%98%EB%8F%99%EC%9E%91)

어떠한 공통적인 요소에 대해 미들웨어서 처리함  
ex) create, read, update, delete 를 하기위해 logincheck 가 필요할 때 요청과 응답사이의 위치해서 logincheck에 처리
