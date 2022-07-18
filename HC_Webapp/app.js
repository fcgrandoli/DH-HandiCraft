const express = require('express');
const app = express();
const cartRoute = require('./routes/cartRoute.js');
const mainRoute = require('./routes/mainRoute.js');
const homeRoute = require('./routes/homeRoute.js');
const loginRoute = require('./routes/loginRoute.js');
const productRoute = require('./routes/productRoute.js');
const registerRoute = require('./routes/registerRoute.js');
const path = require('path');
const multer = require('multer');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname + '/css'));

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

// DIVISOR ========================================================================

//const mainRoute =require('./routes/mainRoute.old')
/* app.use('/', mainRoute);
app.use('/login', mainRoute);
app.use('/register', mainRoute);
app.use('/producto', mainRoute);
app.use('/cart', mainRoute); */

/* Nuevo código código MVC. - creo estructura de carpetas y controlador + archivo rutas

app.set('view engine', 'ejs');

app.use('/', mainRoute);
app.use('/login', mainRoute);
app.use('/register', mainRoute);
app.use('/producto', mainRoute);
app.use('/cart', mainRoute);

  */
