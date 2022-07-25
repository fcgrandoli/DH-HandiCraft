const express = require('express');
const app = express();
const cartRoute = require('./src/routes/cart.routes.js');
const homeRoute = require('./src/routes/home.routes.js');
const loginRoute = require('./src/routes/login.routes.js');
const mainRoute = require('./src/routes/main.routes.js');
const productRoute = require('./src/routes/product.routes.js');
const registerRoute = require('./src/routes/register.routes.js');
const path = require('path');
const multer = require('multer');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));
app.use('/public', express.static(__dirname + '/public'));

let pathObj = path.parse(__dirname + '/public');
console.log(pathObj);

app.listen(process.env.PORT || 3000, () => console.log('Server runnning'));

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', homeRoute);
app.use('/home', homeRoute);
app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/producto', productRoute);
app.use('/crear', productRoute);
app.use('/cart', cartRoute);
app.use('/enconstruccion', mainRoute);
app.use('/enmantenimiento', mainRoute);
