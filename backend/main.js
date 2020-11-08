var express = require('express'); //Creates rest API
var bodyParser = require('body-parser');
var cors = require('cors');

//ExpressJS Controller
var app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3000;

app.get('/test',async function(req, res) {
    console.log("Test")
});

app.listen(port, () => console.log(`Backend listening on port ${port}!`));
