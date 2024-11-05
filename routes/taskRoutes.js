const taskRouts = (req, res) => {
    if (req.method === 'GET') {
        getTasks(req, res);
    } else if (req.mthod === 'POST'){
        createTask(req, res);

    } else if (req.method === 'PATCH'){
        updateTask(req, res);
    } else if (req.method === 'DELETE'){
        deleteTask(req, res)
    } else {
        res.writeHead(404, 'Data Not Found', {'content-type':  'application/json'});
        res.end(JSON.stringify);
        Message: 'unknown method require.'
   }

        
}

module.exports = taskRouts;