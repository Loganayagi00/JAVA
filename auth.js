const express=require('express');
const app=express();
const authenticationMiddleware=(req,res,next)=>{
    if(req.headers.authorization==='Valid-token'){
        console.log('user authentication');
        next();
    }else{
        res.status(404).json({message:'unauthorized'});
    }
};
app.get('/protected',authenticationMiddleware,(req,res)=>{
    res.json({message:'Welcome to the protected area'});

});
app.listen(3010,()=>{
    console.log('server is running on http://localhost:3010');
})