const express = require('express');//  Import express
const expressLayouts = require('express-ejs-layouts');//express-ejs-layouts is a middleware that allows us to use ejs layouts



const app = express();// Create an instance of express
const port = process.env.PORT || 8939;

require('dotenv').config();

require('dotenv').config();

app.use(express.urlencoded( { extended: true } ));
app.use(express.static('public'));
app.use(expressLayouts);

app.set('layout','./layouts/main');// Set the layout to use
app.set('view engine', 'ejs');

const routes = require ('./server/routes/recipieRoutes');
app.use('/',routes);


app.listen(port,()=> {console.log(`Listening to port${port}`)});


