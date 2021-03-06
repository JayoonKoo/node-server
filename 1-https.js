const http = require("http");
const fs = require("fs");
const ejs = require("ejs");

const name = "koo";
const courses = [{name: "HTML"},{name: "js"},{name: "css"},{name: "node"}, ];

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);


// 서버 만들기 
const server = http.createServer((req, res) => {
	// console.log('server on');
	// console.log(req.headers);
	// console.log(req.httpVersion);
	// console.log(req.method);
	// console.log(req.url);
	const url = req.url;
	res.setHeader('Content-Type', 'text/html');
	if (url === '/') {
		fs.createReadStream('./index.html').pipe(res);
	} else if (url === '/course') {
		fs.createReadStream('./course.html').pipe(res);
	} else {
		fs.createReadStream('./not-found.html').pipe(res);
	}
})

// 리스너로 포트 설정
server.listen(8080);
