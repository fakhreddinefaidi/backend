const express=require('express');
const app=express();
var bodyParser=require('body-parser');


app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
const userRouter=require('./user');
app.use('/user',userRouter);

app.listen(3000,()=>console.log('your server is running on port 3000'));