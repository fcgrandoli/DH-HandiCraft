const express = require('express');
const cookie = require('cookie-parser');
const session = require('express-session');
const app = express();
const cartRoute = require('./src/routes/cart.routes.js');
const homeRoute = require('./src/routes/home.routes.js');
const userRoute = require('./src/routes/user.routes.js');
const productRoute = require('./src/routes/product.routes.js');
const path = require('path');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/src/views'));

app.use('/', express.static(__dirname + '/public'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: 'hc_webapp',
    saveUninitialized: true,
    resave: true,
  })
);
app.use(cookie());
app.use(require('./src/middlewares/user.js'));

app.use('/', homeRoute);
app.use('/home', homeRoute);
app.use('/user', userRoute);
app.post('/user', userRoute);

app.post('/registerUser', userRoute);

app.use('/viewProduct', productRoute);
app.post('/createProduct', productRoute);
app.use('/cart', cartRoute);
app.use('/enconstruccion', homeRoute);
app.use('/enmantenimiento', homeRoute);

app.listen(process.env.PORT || 3000, () =>
  console.log('Server running (Port: 3000)')
);
