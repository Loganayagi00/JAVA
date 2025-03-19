const express=require('express');
const bodyParser = require('body-parser');
const path=require('path');
const app=express();
const port=3005;
app.use(bodyParser.json());
let users=[
    {id:301,name:'Loga',email:'loga11@gmail.com'},
    {id:302,name:'nandhu',email:'nandhu26@gmail.com'},
    {id:303,name:'Megu',email:'Megu16@gmail.com'},

];
app.get('/users',(req,res) =>{
    res.json(users);
});
app.get('/user/:id',(req,res)=>{
    const userId=parseInt(req,URLSearchParams.id);
    const user=users.find(u=>u.id===userId);
    if(user){
        res.json(user);
    }
    else{
        res.status(404).json({message:'user not found'});
    }
});
app.post('/users',(req,res)=>{
    const newUser={
        id: users.length+1, name: req.body.name, email: req.body.email
    };
    users.push(newsUser);
    res.status(201).json(newUser);
});
app.listen(port,()=> {
    console.log('server running on http://localhost:3005');
});
app.put('/users/:id',(req,res)=>{
    const userId=parseInt(req,res);
    const userIndex=userId.findIndex(u=>u.id===userId);
    if(userIndex!==-1){
        user[userIndex ]={id:userId,...req.body};
        res.json(user[userIndex]);
    }else{
        res.status(404).json({message:'user not found'});

    }
});
app.get('/blog',(req,res){

})
if(userIndex !==-1) {
    res,json({message:'user deleted sucessfully'});
}
app.listen(port,()=> {
    console.log('server running on http://localhost:3005');
});


