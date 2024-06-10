const express=require('express');
const router=express.Router();
var db=require('./db.js');



router.route('/register').post((req,res)=>{
    //get params
    var name=req.body.name;
    var firstname=req.body.firstname;
    var phone=req.body.phone;
    var email=req.body.email;
    var password=req.body.password;
    
    


    //create query
    var sqlQuery = "INSERT INTO user(name, firstname, phone, email, password) VALUES (?, ?, ?, ?, ?)";

    //call database to insert so add or include database
    // ???? pass params here
    db.query(sqlQuery, [name, firstname, phone, email, password], function(error, data, fields) 
        // Gestion des résultats de la requête
    
    {

        if(error)
        {
            // if error send response here
            res.send(JSON.stringify({success:false,message:error}));
        }else{
            // if success send response here
            res.send(JSON.stringify({success:true,message:'register'}));
        }
    });

});






router.route('/login').post((req,res)=>{

    var eamil=req.body.email;
    var password=req.body.password;

    var sql="SELECT * FROM user WHERE email=? AND password=?";
    
    if(eamil != "" && password !=""){
        db.query(sql,[eamil,password],function(err,data,fields){
            if(err){
                res.send(JSON.stringify({success:false,message:err}));

            }else{
                if(data.length > 0)
                {
                    res.send(JSON.stringify({success:true,user:data}));
                }else{
                    res.send(JSON.stringify({success:false,message:'Empty Data'}));
                }
            }
        });
    }else{
        res.send(JSON.stringify({success:false,message:'Email and password required!'}));
    }
});










    router.route('/register2').post((req,res)=>{
        //get params
        var gender=req.body.gender;
        var weight=req.body.weight;
        var height=req.body.height;
        var age=req.body.age;
      
        
    
    
        
       var sqlQuery = "INSERT INTO user (gender, weight, height, age) VALUES (?, ?, ?, ?)";
        //call database to insert so add or include database
        // ???? pass params here
        db.query(sqlQuery, [gender, weight,height, age], function(error, data, fields) 
            // Gestion des résultats de la requête
        
        {
    
            if(error)
            {
                // if error send response here
                res.send(JSON.stringify({success:false,message:error}));
            }else{
                // if success send response here
                res.send(JSON.stringify({success:true,message:'register2'}));
            }
        });
    
    });
    
    






module.exports =router;