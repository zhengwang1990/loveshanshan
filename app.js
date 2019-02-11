var express = require('express'),
    app     = express(),
    path    = require('path');

app.use(express.static('public'));


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'html/index.html'));
});

app.get('/questions', function(req, res){
  res.sendFile(path.join(__dirname, 'html/questions.html'));
});

app.get('/wrong', function(req, res){
  res.sendFile(path.join(__dirname, 'html/wrong.html'));
});

app.get('/love', function(req, res){
  res.sendFile(path.join(__dirname, 'html/love.html'));
});


if (module === require.main) {
  // Start the server
  // [START server]
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
  // [END server]
}
