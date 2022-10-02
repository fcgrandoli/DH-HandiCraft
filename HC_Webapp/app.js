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
const cors = require('cors');
//APIS

app.use('/api/users', require ('./src/routes/apis/usersRoutes'));
app.use('/api/products', require ('./src/routes/apis/apiproduct.routes.js'));

//SET VIEW ENGINE AND VIEWS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));

//SET IMAGES PATHS
app.use('/', express.static(__dirname + '/public'));
app.use('/images', express.static(__dirname + '/public/images'));

//GENERAL DEPENDENCIES

const whiteList = ['http://localhost:5173', 'http://localhost:5173/users',]
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookie());
app.use(cors({ origin: whiteList}))
app.use(
  session({
    secret: 'hc_webapp',
    saveUninitialized: true,
    resave: true,
  })
);

//MIDDLEWARES
app.use(require('./src/middlewares/userLoggedIn.js'));

//APP ROUTES (USE)
app.use('/', homeRoute);
app.use('/home', homeRoute);
app.use('/user', userRoute);
app.use('/viewProduct', productRoute);
app.use('/cart', cartRoute);
app.use('/collectionList', homeRoute);
app.use('/categorias', homeRoute);
app.use('/enmantenimiento', homeRoute);

//APP ROUTES POST
app.post('/user', userRoute);
app.post('/registerUser', userRoute);
app.post('/cart', cartRoute);
app.post('/createProduct', productRoute);


//SERVER CONFIG
app.listen(process.env.PORT || 3000, () =>
  console.log('Server running (Port: 3000)')
);
