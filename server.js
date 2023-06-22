const http = require('http');
const fs = require('fs')

const server = http.createServer(function (request, responce) {
    console.log("Hello")
    if (request.url === '/style.css') {
        const css = fs.readFileSync('style.css', "utf-8")
        console.log(request.method, request.url)
        responce.end(css);
    } else {
        const html = fs.readFileSync('index.html', "utf-8")
        console.log(request.method, request.url)
        responce.end(html);
    }
});
server.listen(process.env.PORT || 8088)

console.log("PORT", process.env.PORT)
console.log("Server start")