console.log('Hello world');

require("http").createServer( function(req,res){
    res.writeHead(200);
    res.end('Hello ' + req.headers['user-agent'] );
}).listen(process.env.PORT);


console.log( "http://cloud9test.stankaminski.cloud9ide.com" );
