# Reference

## EJS (Embedded Javascript Template)
> 템플릿 엔진이란,  
템플릿을 읽어 엔진의 문법과 설정에 따라서 파일을 HTML 형식으로 변환시키는 모듈입니다. Express에서 인기리에 사용되고 있는 Jade 템플릿 엔진은 기존의 HTML에 비해 작성법이 아주 다른데, 그에 비해 EJS는 똑같은 HTML에서 <%%>를 사용해 서버의 데이터를 사용하거나 코드를 실행할 수 있다.

- 동적 웹 페이지를 구현하기 위해 사용 
- javascript 변수를 view 파일 내에서도 사용 가능

### JavaScript Code
JS 문법 사용
> <% JS Code %>  

변수 출력
> <%= ... %>  

ejs 분할
> <% include 파일명 %>

## express-session
: express 환경에서 session을 적용하도록 도와주는 패키지  

로그인 시에 제공하는 기능들(업로드, 수정..등)에 대해 사용자의 현재 로그인 상태에 대한 정보가 없으면 매번 서버에 확인 요청이 필요하다. 

이에 따라 session 개념이 나오게 됨

>사용자가 로그인 정보를 서버에 전송 ==> 서버에서 확인 ==> 해당 정보를 세션에 저장

