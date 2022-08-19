const express = require ('express');
const morgan = require('morgan');
const app = express();


app.use(express.json());
app.use(morgan('dev'));

//* procesa las peticiones y devuelve un index.html
app.use(express.static('public'));

app.listen(5000,() => {
    console.log('Server on port 5000');
});