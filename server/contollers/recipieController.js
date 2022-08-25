require('../models/database');
const Category = require('../models/category');



/** 
 * GET/
 * Homepage
*/
exports.homepage = async(req,res)=>{

   

    res.render('index',{tittle:'Cookaway-Home'});
}



async function insertmyCategoryData(){
    try {
        await Category.insertMany([
            {
            "name": "American",
            "image": "american-food.jpg"
            },
           {
               "name": "Indian",
               "image": "indian-food.jpg"
           },
           {
               "name": "Chinese",
               "image": "chieese.jpg"
           },
           {
               "name": "Japanese",
               "image": "japaese.jpg"
           },
           {
               "name": "Italian",
               "image": "itly.jpg"
           }
             
           
       ]
       );
    } catch (error) {
        console.log('err'+ error)
        
    }
}
insertmyCategoryData();
