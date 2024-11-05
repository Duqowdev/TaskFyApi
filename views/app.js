const http = require('http');

const HOSTNAME = 'localhost';

const PORT = 7000

const srver = http.createServer((req, res) => {
    if (req.url.startsWith('/tasks')) {
        taskRouts(req, res)
        
    } else {
        res.writeHead(404, 'not found', {'content-type': 'Application/json'})
        res.end(JSON.stringify({
            messege: 'sorry,you got lost!'

        }))

        
    }

});

server.listen(PORT, HOSTNAME, () =>{
    console.log('server running on port ${PORT}');
})