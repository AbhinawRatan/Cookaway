const mongoose = require('mongoose');
const mealSchema = new mongoose.Schema({
    name:{
        type: String,
        required: 'This field is required.'
    },
    descriprion:{
        type:String,
        required:'This field is required.'
    },
    email:{
        type:String,
        required:'This field is required.'
    },
    ingredients:{
        type:Array,
        enum:['Thai', 'American', 'Chinese', 'Mexican', 'Indian'],
        required:'This field is required.'
    },
    image:{
        type:String,
        required:'This field is required.'
    },
   
});
module.exports = mongoose.model('category',mealSchema)