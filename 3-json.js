const http = require("http");

const name = "koo";
const courses = [{name: "HTML"},{name: "js"},{name: "css"},{name: "node"}, ];
// 서버 만들기 
const server = http.createServer((req, res) => {
	const url = req.url;
	const method = req.method;
	if (url === '/course') {
		if (method === 'GET') {
			res.writeHead(200, {'Content-Type': 'application/json'});
			res.end(JSON.stringify(courses));
		} else if (method === 'POST') {
			const body = [];
			req.on('data', (chunk) => {
				console.log(chunk);
				body.push(chunk);
			});
			req.on('end', () => {
				const course = JSON.parse(Buffer.concat(body).toString());
				courses.push(course);
				console.log(courses);
				res.writeHead(201);
				res.end();
			})
		}
	}
})

// 리스너로 포트 설정
server.listen(8080);
