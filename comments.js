// Create web server    
// 1. Load express module
var express = require('express');
// 2. Create an express application
var app = express();
// 3. Create a route
app.get('/comments', function(request, response) {
    response.send('Comments will be displayed here');
});
// 4. Start the server
app.listen(8080); 
console.log('Server started at http://localhost:8080');
// 5. Test the server
// Open a browser and type http://localhost:8080/comments
// You should see "Comments will be displayed here" message on the browser