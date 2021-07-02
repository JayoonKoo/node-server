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
		ejs
			.renderFile('./template/index.ejs', {name})
			.then(data => res.end(data));
	} else if (url === '/course') {
		ejs
			.renderFile('./template/course.ejs', {courses})
			.then(data => res.end(data));
	} else {
		ejs
			.renderFile('./template/not-found.ejs', {name})
			.then(data => res.end(data));
	}
})

// 리스너로 포트 설정
server.listen(8080);
