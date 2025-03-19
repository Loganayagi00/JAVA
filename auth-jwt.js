const express=required('express');
const jwt=require('jsonwebtoken');
const app=express();


const secretkey='6f661acf4d50d24ea40e3adc66d89cf2a4543c14fdf29129285301f7fda88af32e5e8499aafeb06b2f7390f48c294b6fcc3e99ed8968d46562cf487e00d3d27b8ec47cca4292dae7bc1c610a8487b759ae9e504288811a5820ad6cd933c9096aeb7cf3f95675c8841d0dfb1e259525fab5fd8a9e1c81c064079211d68eb4d2bc70849efcc06838bb545eebbf738176a9161d5135614fa52dcce4ae8fc0aeae21';
app.use(express.json());

const generatetoken=(user={})=>{
    return jwt.sign(user,secretkey,{expriresIn:'1h'});
};
const authenticationMiddleware=(req,res,next)=>{
    const token=req.headers.authorization;
    if(!token){
        console.log('No token provided');
        return res.status(401).json({message:'Unauthorized:No token provided'});
    }
    const bearerToken=token.startsWith('Bearer')?token.slice(7):token;

    jwt.verify(bearerToken,secretkey,(err,decoded)=>{
        if(err){
            console.log('Error verifying token:',err);
            return res.status(401).json({message:'Unauthorized:Invalid token'});
        }
        req.user=decoded;
        console.log('User authentication');
        next();
    });
   
};
app.post('/login',(req,res)=>{
    if(!user||Object.keys(user).length===0){
        return res.status(400).json({message:'User data is required'});
    }
    const token=generateToken(user);
    res.json({token});
});

app.listen(3012,()=>{
    console.log('Server is running on http://localhost:3012/');
});