const dotenv =require('dotenv');
dotenv.config ({path: '.env'});
require('../models/database');
const Category = require('../models/category');
const meal = require('../models/meal');




/** 
 * GET/
 * Homepage
*/
exports.homepage = async(req,res)=>{
    try {
        const limitNumber =5;
        const category = await Category.find({}).limit(limitNumber);

        res.render('index',{tittle:'Cookaway-Home',category});
        
    } catch (error) {
        res.status(500).send({message:error.message || "Error Occured"});
        
    }
}

/** 
 * GET/categories
 * Categories
*/
exports.exploreCategories = async(req,res)=>{
    try {
        const limitNumber = 20;
        const category = await Category.find({}).limit(limitNumber);

        res.render('categories',{title:'Cookaway-Categories',category});
        
    } catch (error) {
        res.status(500).send({message:error.message || "Error Occured"});
        
    }
}




