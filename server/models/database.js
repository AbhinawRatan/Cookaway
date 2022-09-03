const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true});
const db =mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',function(){
    console.log('connected')
});
require('./category');
require('./meal');

