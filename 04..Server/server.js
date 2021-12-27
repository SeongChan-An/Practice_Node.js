// http : 서버를 구축하는게 도움을 주는 패키지
const http = require("http");

// createServer 서버 생성 후 콜백함수로 req, res 를 받음
// listen 서버를 만든 후 입력된 포트번호로 대기
http.createServer((req, res) => {
  // res.writeHead(200, { "Content-Type" : "text/html" })
  // res.end("<p>Hello World ~ !!!</p>")
  if (req.url === "/") {
    // 응답을 보냈을 때 정상적으로 들어올 경우 값을 넣음 (스테이터스 코드)
    // 정상 200, 에러(404)
    res.writeHead(200);
    res.end("main url");
  } else if (req.url === "/upload") {
    res.writeHead(200);
    res.end("upload url");
  } else if (req.url === "/delete") {
    res.writeHead(200);
    res.end("delete url");
  } else {
    res.writeHead(404);
    res.end("Not found !!!");
  }
}).listen(3000, () => {
  console.log("3000번 포트 서버 접속 완료 ~!");
})