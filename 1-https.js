const http = require("http");

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);


// 서버 만들기 
const server = http.createServer((req, res) => {
	console.log('server on');
	console.log(req.headers);
	console.log(req.httpVersion);
	console.log(req.method);
	console.log(req.url);
	res.write('Welcome!');
	res.end();
})

// 리스너로 포트 설정
server.listen(8080);
