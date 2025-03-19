const express=require('express');
const app=express();
app.get('/',(req,res)=> {
    res.send('whats happening');
});

app.listen(3009,()=> {
    console.log('server running on http://localhost:3009');
});



