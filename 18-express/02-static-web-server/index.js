const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));//使用中间件
app.listen(8080);
