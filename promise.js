var bag=new Promise(function(resolve,reject){
    let a=15;
    let b=150;
    if(a==b){
        resolve("equal");
    }
    else{
        reject("not equal");
    }
})
bag
.then(function(f){
document.write(f);
})
.catch(function(e){
document.write(e);
})