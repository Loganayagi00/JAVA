function fetchData(url){
    return new Promise((reslove, reject)=>{
        setTimeout(()=>{
            if(url===""{
                reslove({message: 'Data fetched Sucessfully'});
            }else{
                reject('Invalid URL');
            }
            })
        })
    })
}