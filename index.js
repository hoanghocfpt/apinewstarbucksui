const express = require('express')
var connectDB = require('./database');
var port = 3000 | process.env.PORT;

var indexRouter = require('./routes/index');
var productRouter = require('./routes/product');
var categoryRouter = require('./routes/category');
const app = express()
connectDB();


app.use('/', indexRouter);
app.use('/products', productRouter);
app.use('/categories', categoryRouter);


app.listen(port, function() {
    console.log('Server listening on port ' + port);
});
